const obj = document.cookie
// console.log("obj", obj)

const re = new RegExp(`(?<=fitaddatauser=)[^;]*`);
try {
    const username = document.cookie.match(re)[0]
    if (username) {
        let fileName = 'user';
        let profile = 'userProfile.html';
        let support = 'userSupport.html';
        let account = 'userAccount.html';
        document.getElementById('login').innerHTML = `
                
        <div id="login-logo"  class="dropdown">
            <button class="dropbtn">
                <img
                    src="https://static.cure.fit/assets/images/user-image.svg"
                    alt=""/>
            </button>
            <div class="dropdown-content">
            <a href='../${fileName}/${profile}'><i class="fas fa-user"></i> Profile</a>

            <a href='../${fileName}/${support}'><i class="fas fa-headset"></i>
            Support
            </a>
            
            <a href='../${fileName}/${account}'><i class="fas fa-cog"></i>
            Account
            </a>
            </div>
        </div>
        <div id="login-text">${username}</div>
    
                `
    }
} catch {
    console.log("is-cookie-doesn't-exist")
}

//end
var rotateDropDown = -180;
function dropdowneffect(x) {
    var img = document.getElementById(x);
    img.style.transform = `rotate(${rotateDropDown}deg)`;
    var dropdown = document.getElementById('dropdown-links');
    if (rotateDropDown == -180) {
        rotateDropDown = 0;
        dropdown.style.display = "inline";
    }
    else {
        rotateDropDown = -180;
        dropdown.style.display = "none";
    }
}

// for first 5 products

async function getdata() {
    let url = "https://fitadda.onrender.com/api/v1/products";
  
    let response = await fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        }
    });
  
    const data = await response.json();
    appendProducts(data.products)
}

// let id = 0;
function appendProducts(products) {
    // id = i;
    for(let i = 1; i < products.length  ; i++) {
        let cardGrid = document.getElementById('cardsGrid');

        let card = document.createElement('div');
        card.setAttribute("class", 'card');

        let img = document.createElement('img');
        img.src = products[i].image;
        img.setAttribute("class", 'card-image');

        let info = document.createElement('div');
        info.setAttribute("class", 'card-info');

        let name = document.createElement('p')
        name.innerText= products[i].name;

        let des = document.createElement('p')
        des.innerText = products[i].description;

        let discountedPrice = document.createElement('h3')
        discountedPrice.innerText = products[i].discountedPrice;

        let price = document.createElement('h4')
        price.innerText = products[i].price

        let discount = document.createElement('p')
        discount.innerText =`${ products[i].discount}% off`;

        let viewBtn = document.createElement('button');
        viewBtn.innerText = `VIEW`;
        viewBtn.setAttribute('class', 'view-btn');
        viewBtn.setAttribute('id', `${products[i]._id}`)
        viewBtn.addEventListener('click', (event)=>{
            let value = event.target.id;
            saveProduct(value);
        });

        info.append(discountedPrice, price, discount, viewBtn);
        card.append(img,name, des, info);

        cardGrid.append(card);

    }
}


getdata()





async function saveProduct(productId) {

        let url = `https://fitadda.onrender.com/api/v1/product/${productId}`;
      
        let response = await fetch(url, {
            method : "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        });
      
        const data = await response.json();    //dat of one product 
        showProduct(data);
        console.log("data", data)
    }

    function showProduct(data) {
        localStorage.setItem("productData", JSON.stringify(data));  
        window.location.assign("showproduct.html")
    }




// ---------Location pop up---------- \\

// Step 1: Get user coordinates
function getCoordintes() {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        var crd = pos.coords;
        var lat = crd.latitude.toString();
        var lng = crd.longitude.toString();
        var coordinates = [lat, lng];
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        getCity(coordinates);
        return;

    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
}
// Step 2: Get city name
    function getCity(coordinates) {
        var xhr = new XMLHttpRequest();
        var lat = coordinates[0];
        var lng = coordinates[1];
    
        // Paste your LocationIQ token below.
        xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.80d3509160f77dc312d85df1cbe27bf4&lat=" +
        lat + "&lon=" + lng + "&format=json", true);
        xhr.send();
        xhr.onreadystatechange = processRequest;
        xhr.addEventListener("readystatechange", processRequest, false);
    
        function processRequest(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                var city = response.address.county;
                console.log(city);
                let a = document.getElementById('change-location-navbar');
                a.innerText = city
                a.style.display = "inherit";
                return;
            }
        }
    }

function locationUpdate(x) {
var a = document.getElementById('change-location-navbar');
a.style.display = "none";

var b = document.getElementById('change-location-navbar');
b.innerText = x;
}