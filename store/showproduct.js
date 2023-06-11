//for login name
const obj = document.cookie
console.log("obj", obj)

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
let store = JSON.parse(localStorage.getItem("store"));
if (store != null) {
    let len = 0;
    for (var i = 0; i < store.length; i++) {
        if (store[i].qty >= 1) {
            len++;
        }
    }
    let badge = document.getElementById("badge");
    badge.innerHTML = len;
}

// var queryString = decodeURIComponent(window.location.search);
// queryString = queryString.substring(1);
// var queries = queryString.split("&");
// let cartname,
//     cartdesc,
//     cartimage,
//     cartprice,
//     cartcutprice,
//     cartdiscount,
//     id;
// for (var i = 0; i < queries.length; i++) {
//     if (i == 6) {
//         id = queries[i];
//     }
//     if (i == 0) {
//         let image = document.getElementById("image");
//         image.src = queries[i];
//         cartimage = queries[i];
//     }
//     if (i == 1) {
//         cartname = queries[i];
//     }
//     if (i == 2) {
//         let h1 = document.getElementById("pass-heading");
//         h1.innerHTML = queries[i];
//         cartdesc = queries[i];
//     }
//     if (i == 3) {
//         let p = document.getElementById("cutprice");
//         let p1 = document.getElementById("price");
//         let p2 = document.getElementById("discount");

//         p.innerHTML = queries[i + 1];
//         cartcutprice = queries[i + 1];
//         p1.innerHTML = "₹ " + queries[i];
//         cartprice = queries[i];
//         p2.innerHTML = queries[i + 2] + "% Off";
//         cartdiscount = queries[i + 2];
//     }
// }

function showProduct() {
    let data = JSON.parse(localStorage.getItem("productData"));
    let image = document.getElementById("image");
    image.src = data.product.image;

    let h1 = document.getElementById("pass-heading");
    h1.innerHTML = data.product.description;

    let h3 = document.getElementById("pass-description");
    h3.innerHTML = data.product.name;

    let p = document.getElementById("cutprice");
    p.innerHTML = ` ₹ ${data.product.price}`;

    let p2 = document.getElementById("price");
    p2.innerHTML = `₹ ${data.product.discountedPrice} on offer `;

    if (data.product.size) {
        let sizeDiv = document.getElementById("size");
        sizeDiv.innerHTML = `
            <h3 style="margin-bottom: 15px">Choose Size</h3>

                <input class="radio_input" type="radio" value="S" name="size" id="myradio1"/>

                <label class="radio_label" for="myradio1">S</label>

                <input class="radio_input" type="radio" value="M" name="size" id="myradio2" />

                <label class="radio_label" for="myradio2">M</label>

                <input class="radio_input" type="radio" value="L" name="size" id="myradio3" />

                <label class="radio_label" for="myradio3">L</label>

                <input class="radio_input" type="radio" value="XL" name="size" id="myradio4" />

                <label class="radio_label" for="myradio4">XL</label>
                `

    }
    let discount = document.getElementById("discount");
    discount.innerHTML = `${data.product.discount}% OFF`;


}

showProduct()
// let btn1 = document.getElementById("btn1");
// btn1.onclick = function() {
//     let form = document.getElementById("myform");
//     let size = form.size.value;
//     if (!size) {
//         alert("Select Size");
//     } else {
//         obj = {
//             id: id,
//             size: size,
//             name: cartname,
//             image: cartimage,
//             description: cartdesc,
//             price: Number(cartprice),
//             cutprice: cartcutprice,
//             discount: cartdiscount,
//             qty: 1,
//         };
//         let store = localStorage.getItem("store");
//         if (store == null) {
//             store = [];
//             store.push(obj);
//             localStorage.setItem("store", JSON.stringify(store));
//         } else {
//             store = JSON.parse(localStorage.getItem("store"));
//             let found = false;
//             for (var o = 0; o < store.length; o++) {
//                 if (store[o].id == obj.id && store[o].size == obj.size) {
//                     store[o].qty += 1;
//                     localStorage.setItem("store", JSON.stringify(store));
//                     found = true;
//                     alert("Already In Cart Quantity Increased");
//                     break;
//                 }
//             }
//             if (!found) {
//                 store.push(obj);
//                 localStorage.setItem("store", JSON.stringify(store));
//                 alert("Added To Cart");
//             }
//         }

//         let badge = document.getElementById("badge");
//         badge.innerHTML = store.length;
//     }
// };
// let btn2 = document.getElementById("btn2");
// btn2.onclick = function() {
//     let form = document.getElementById("myform");
//     let size = form.size.value;
//     if (!size) {
//         alert("Select Size");
//     } else {
//         obj = {
//             id: id,
//             size: size,
//             name: cartname,
//             image: cartimage,
//             description: cartdesc,
//             price: Number(cartprice),
//             cutprice: cartcutprice,
//             discount: cartdiscount,
//             qty: 1,
//         };
//         let store = localStorage.getItem("store");
//         if (store == null) {
//             store = [];
//             store.push(obj);
//             localStorage.setItem("store", JSON.stringify(store));
//             window.location.href = "cartPage.html";
//         } else {
//             store = JSON.parse(localStorage.getItem("store"));
//             let found = false;
//             for (var o = 0; o < store.length; o++) {
//                 if (store[o].id == obj.id && store[o].size == obj.size) {
//                     store[o].qty += 1;
//                     localStorage.setItem("store", JSON.stringify(store));
//                     found = true;
//                     window.location.href = "cartPage.html";
//                     break;
//                 }
//             }
//             if (!found) {
//                 store.push(obj);
//                 localStorage.setItem("store", JSON.stringify(store));
//                 window.location.href = "cartPage.html";
//             }
//         }

//         let badge = document.getElementById("badge");
//         badge.innerHTML = store.length;
//     }
// };

var rotateDropDown = -180;

function dropdowneffect(x) {
    var img = document.getElementById(x);
    img.style.transform = `rotate(${rotateDropDown}deg)`;
    var dropdown = document.getElementById("dropdown-links");
    if (rotateDropDown == -180) {
        rotateDropDown = 0;
        dropdown.style.display = "inline";
    } else {
        rotateDropDown = -180;
        dropdown.style.display = "none";
    }
}

// ----------- login -----------\\

// let clickCount = 0;

// function fetchLoginPage() {
//     clickCount++;
//     if (clickCount % 2 == 0) {
//         let x = document.getElementById("user-info-popup");
//         x.style.display = "none";
//         return;
//     }
//     var login = document.getElementById("login-text");
//     if (login.innerHTML != "Login") {
//         let x = document.getElementById("user-info-popup");
//         x.style.display = "inherit";
//         return;
//     }

//     var blur = document.getElementById("blur");
//     blur.classList.toggle("active");

//     var popup = document.getElementById("login-page");
//     popup.classList.toggle("active");
// }

function logout() {
    let currentUser = {
        name: "Login",
    };

    localStorage.setItem("cultUserName", JSON.stringify(currentUser));
    window.location.href = "home_cult_cultCenters.html";
}

function verifyLogin() {
    let phone = document.getElementById("login-phone").value;
    let password = document.getElementById("login-password").value;

    let data = JSON.parse(localStorage.getItem("cultFitUsers"));

    if (data == null) {
        alert("Invalid Credentials!");
        return;
    }

    if (data[phone] == undefined) {
        alert("Invalid Credentials!");
    } else {
        if (data[phone].password == password) {
            var login = document.getElementById("login-text");

            if (login.innerHTML == "Login") {
                let currentUser = {
                    name: data[phone].name,
                    email: data[phone].email,
                    password: data[phone].password,
                    number: data[phone].number,
                };

                localStorage.setItem("cultUserName", JSON.stringify(currentUser));
            } else {
                alert("User already logged in");
            }
            window.location.href = "home_cult_cultCenters.html";
        } else {
            alert("Invalid Credentials!");
        }
    }
}

// let check = JSON.parse(localStorage.getItem("cultUserName"));
// if (check != null) {
//     var login = document.getElementById("login-text");
//     login.innerHTML = `${check.name}`;
// }

function showHidePassword(id) {
    let input = document.getElementById("login-password");
    let passwordType = document.getElementById(id);
    if (input.type == "password") {
        input.type = "text";
        passwordType.removeAttribute("class");
        passwordType.setAttribute("class", "far fa-eye");
    } else {
        input.type = "password";
        passwordType.removeAttribute("class");
        passwordType.setAttribute("class", "far fa-eye-slash");
    }
}

//------------- Cart js ----------\\
function displayCart() {
    var cart = document.querySelector(".Cart-container");
    cart.style.display = "inherit";
}

function hideCart() {
    var cart = document.querySelector(".Cart-container");
    cart.style.display = "none";
}

//end

var borderBottomAchor = document.getElementById("eatfit");

function underline(x) {
    var a = document.getElementById(x);
    borderBottomAchor.style.borderBottom = "none";
    borderBottomAchor.style.fontWeight = "500";

    borderBottomAchor = a;
    borderBottomAchor.style.fontWeight = "bolder";
    a.style.borderBottom = "2px solid rgb(255, 50, 120)";

    var cartImg = document.getElementById("cart-img-1");
    var cartDes = document.getElementById("cart-description");

    if (x == "cultgear") {
        cartImg.style.display = "none";
        cartDes.style.display = "none";
    } else {
        cartImg.style.display = "inherit";
        cartDes.style.display = "inherit";
    }
}


// -----location video change------- \\
let videoLinks = {
    bengaluru: "https://cdn-media.cure.fit/image/gymfit/centers/prod/CENTER46/video/gymfit/3dd5ffef-0b0d-4d6e-8720-c18262d959bcCenter_46_App_Video.mp4",
    hyderabad: "https://cdn-media.cure.fit/image/gymfit/centers/prod/CENTER73/video/gymfit/2ff2c43e-92c3-43b2-b0bd-6da873e96b87Center_73_App_Video.mp4",
    delhi: "https://cdn-media.cure.fit/image/gymfit/centers/prod/CENTER48/video/gymfit/66a0d47f-fffd-4a2b-9ab9-5f6db41f25f9Center_48_App_Video.mp4",
    mumbai: "https://cdn-media.cure.fit/image/gymfit/centers/prod/CENTER52/video/gymfit/2d524769-2bf9-4b9f-95bf-4f6e4d6baa74CENTER_52_APP_VIDEO.mp4",
};


function changeVideo() {
    let state = document.getElementById("gymVideosState").value;

    let video = document.getElementById("stateVideo");
    video.src = videoLinks[state];
}

function openPayment() {
    let login = document.getElementById("login-text");
    if (login.innerHTML == "Login") {
        fetchLoginPage();
        return;
    }
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



//cart function 


let addToCratBtn = document.getElementById("btn1");      //add to cart btn
addToCratBtn.addEventListener('click', () => {
    addToCrat();
})

function addToCrat() {
    console.log("add to btn is clicked ")
    let productSize = ""
    var ele = document.getElementsByName('size');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            console.log("size: " + ele[i].value);
        productSize = ele[i].value;
    }
    let data = JSON.parse(localStorage.getItem("productData"));
    let productId = data.product._id;
    console.log("productid ", productId);


    //token

    const re = new RegExp(`(?<=fitaddatoken=)[^;]*`);
    try {
        let token = document.cookie.match(re)[0]
        token = `Bearer ${token}`

        fetch('https://fitadda.onrender.com/api/v1/order/new', {
            method: 'post',
            mode: 'cors',
            headers: {
                'authorization': token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                product: productId,
                quantity: 1,
                size: productSize
            }),
        }).then(response => response.json())
            .then(data => {
                console.log("data", data)
                window.location.href = "cartPage.html"
            })
    }

    catch {
        console.log("is-cookie-doesn't-exist")
    }
  
}