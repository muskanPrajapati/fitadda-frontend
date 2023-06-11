//for name/ login 
const obj = document.cookie
console.log("obj", obj)

let customerName = "";      //customer name requiered in verify order
const re = new RegExp(`(?<=fitaddatauser=)[^;]*`);
try {
    const username = document.cookie.match(re)[0];
    customerName = username;
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

//MAIN DATA 



let cartData = JSON.parse(localStorage.getItem('cartfood'));
function appendCard(data){
    let main = document.getElementById('main');
    data.forEach((el)=>{
        let img = document.createElement('img');
        img.setAttribute("class", "img")
        img.src = el.image;

        let name = document.createElement('h4');
        name.innerText = `Name : ${el.name}`;

        let price = document.createElement('p')
        price.innerText = `Price : INR ${el.price}`;

        let quantity = document.createElement('p')
        quantity.innerText = `Quantity : ${el.qty}`;

        let time = document.createElement('p')
        time.innerText = `Time to deliver : ${el.time} min`;

        let rightDiv = document.createElement('div')
        rightDiv.setAttribute('class', 'right-side')
        rightDiv.append(name, price,quantity, time);

        let crossBtn = document.createElement("button");
        crossBtn.innerText = "\u274C";
        crossBtn.setAttribute('class', 'cross-btn');
        crossBtn.setAttribute('id', `${el.id}`)
        crossBtn.addEventListener('click', (event)=>{
            let value = event.target.id;
            removeItem(value);
            // console.log(value)
        });


        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        card.append(img, rightDiv, crossBtn);
        main.append(card);
    })

    ///total amount 
    let total = 0;
    let totalCard = document.getElementById('total');
    data.forEach((el)=>{
        let qty = el.qty;
        let price = el.price;
        total += qty * price;
    })

    //total card
        data.forEach((el)=>{
        let p = document.createElement('p');
        p.innerText = `Total price for ${el.name}:  ${el.qty * el.price}`;

        let rightCard = document.createElement('div');
        rightCard.setAttribute("class", 'priceCard');
        rightCard.append(p);

        totalCard.append(rightCard);
    })

    let h3 = document.createElement('h3');
    h3.innerText = `Total payable amount: ${total}`;

    let payBtn = document.createElement('button');
    payBtn.innerText = `Procede to pay`;
    payBtn.addEventListener('click', () =>{
        verifyOrder(data, total);
    })
    totalCard.append(h3, payBtn);
    
}
appendCard(cartData);


// //remove item 
// function removeItem(value){
//     console.log("function is running")
//     cartData.forEach((data) => {
//         if (data.id == value){

//         }
//     })

// }

//verify order

function verifyOrder(data, total){
    let mainData = document.getElementById("mainData");
    mainData.innerHTML = null;

    let form = document.createElement("div");
    form.setAttribute("class", "orderform")
    let lable1 = document.createElement("lable"); //name 
    lable1.innerText= 'Name: '

    let name = document.createElement("input");
    name.type = "text";
    name.value = `${customerName}`;

    let lable2 = document.createElement("lable");  //address
    lable2.innerText = `Address for delivery: `;

    let address = document.createElement("input");
    address.type = "text";
    address.placeholder = "Enter Address"

    let lable3 = document.createElement("lable");  //contact
    lable3.innerText = `Contact for delivery:`

    let contact = document.createElement("input");
    contact.type = "numbers";
    contact.placeholder = "Enter Contact Number"


    let lable4 = document.createElement("lable");  //order list
    lable4.innerText = "Order List";

    let ul = document.createElement("ul");
    data.forEach((el)=>{
        let li = document.createElement("li");
        li.innerText = `${el.qty}  ${el.name} for ${el.qty * el.price}` ;
        ul.append(li)
    })


    let lable5 = document.createElement("lable");  //total amuont
    lable5.innerText = `Total amount :  ${total}  `

    let pay = document.createElement("button");
    pay.setAttribute("class", "Paybtn")
    pay.innerText = "Save & Pay";
    pay.addEventListener("click",()=> {
        window.location.replace("../payment/foodpayment.html");
    })

    form .append(lable1, name, lable2, address, lable3, contact, lable4, ul, lable5, pay)

    mainData.append(form)
}

