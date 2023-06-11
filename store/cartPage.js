//for login name
const obj = document.cookie
console.log("obj", obj)

let customerName = "";
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

// end

async function cart() {
    
    const re = new RegExp(`(?<=fitaddatoken=)[^;]*`);
    try {
        let token = document.cookie.match(re)[0]
        token = `Bearer ${token}`
        fetch('https://fitadda.onrender.com/api/v1/orders/me', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'authorization': token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
           
        }).then(response => response.json())
            .then(data => {
                appendCart(data.orders);
                totalPrice(data.orders);
            })
    }

    catch {
        console.log("is-cookie-doesn't-exist")
    }
   //data of one product
}
cart();

function appendCart(data) {
    console.log(data)
    if(data.length <= 0){
        let mainBox = document.getElementById("mainBox");
        mainBox.innerHTML = null;
        let img = document.createElement("img");
        img.src = "https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png";
        mainBox.append(img);
    }

    let cartContainer = document.getElementById("cartContainer");

    data.forEach((el)=>{

        let img = document.createElement("img");
        img.src = el.product.image;

        let des = document.createElement("p");
        des.innerText = `Des: "${el.product.description}"`;

        let size = document.createElement("p");
        size.innerText = `Size: "${el.size}"`;

        let quantity = document.createElement("p");
        quantity.innerText = `Quantity selected : ${el.quantity}`

        let actualPrice = document.createElement("p");
        actualPrice.innerText = `Actual price : INR ${el.product.price}`;

        let discount = document.createElement("p");
        discount.innerText = `Discount: ${el.product.discount} %`;
        
        let discountPrice = document.createElement("p");
        discountPrice.innerText = `Discounted price :  INR ${el.product.discountedPrice }`;

        let totalPrice = document.createElement("p");
        totalPrice.innerText = `Total price :  INR ${ el.quantity * el.product.discountedPrice}`;

        let rightDiv = document.createElement("div");
        rightDiv.setAttribute("class", "rightDiv");

        let leftDiv = document.createElement("div");
        leftDiv.setAttribute("class", "leftDiv");

        rightDiv.append( des, size, quantity, actualPrice,discount, discountPrice, totalPrice);
        leftDiv.append(img);

        let crossBtn = document.createElement("button");
        crossBtn.innerText = "\u274C";
        crossBtn.setAttribute('class', 'cross-btn');
        crossBtn.setAttribute('id', `${el._id}`)
        crossBtn.addEventListener('click', (event)=>{
            let value = event.target.id;
            removeProduct(value);
        });

        let cartDiv = document.createElement("div");
        cartDiv.setAttribute("class", "cartDiv");
        cartDiv.append(leftDiv, rightDiv, crossBtn);
        cartContainer.append(cartDiv);
    })
   
}

//remove one product
async function removeProduct(orderId){
    console.log("orderid: ", orderId);
        const re = new RegExp(`(?<=fitaddatoken=)[^;]*`);
        try {
            let token = document.cookie.match(re)[0]
            token = `Bearer ${token}`
            fetch(`https://fitadda.onrender.com/api/v1/order/delete/${orderId}`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'authorization': token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
               
            }).then(response => response.json())
                .then(data => {
                    console.log("product TO REMOVE ", data)
                    window.location.reload();
                })
        }
    
        catch {
            console.log("is-cookie-doesn't-exist")
        }
}

let sum = 0 ; 
function totalPrice(data){
    let mainBox = document.getElementById("mainBox");
   
    data.forEach((el)=>{
        let quan = +el.quantity;
        let price = +el.product.discountedPrice
        sum += quan * price;
    })
    let rightCard = document.createElement("div");
    rightCard.setAttribute("class", "rightCard")
        let p = document.createElement("p");
        p.innerText = `Your total order price is INR ${sum}`

        let pay = document.createElement("button");
        pay.setAttribute("class", "payBtn")
        pay.innerText = `PROCEDE TO PAY`;
        pay.addEventListener("click", () =>{
            verifyOrder(data, sum)
        })

        rightCard.append(p, pay);
        mainBox.append(rightCard);
}
    

function verifyOrder(data, total){
    console.log("data", data)
    let mainData = document.getElementById("mainBox");
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
        let quan = +el.quantity;
        let price = +el.product.discountedPrice
        li.innerText = `${el.quantity}  ${el.product.description} for ${quan * price}`;
        ul.append(li)
    })


    let lable5 = document.createElement("lable");  //total amuont
    lable5.innerText = `Total amount :  ${total}  `

    let pay = document.createElement("button");
    pay.setAttribute("class", "Paybtn")
    pay.innerText = "Save & Pay";
    pay.addEventListener("click",()=> {
        window.location.replace("./payment/paymentPage.html");
    })

    form.append(lable1, name, lable2, address, lable3, contact, lable4, ul, lable5, pay)

    mainData.append(form)
}



