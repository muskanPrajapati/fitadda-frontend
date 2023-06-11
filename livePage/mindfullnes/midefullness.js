//for name/ login 
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



// ---------Log in---------- \\ 

let clickCount = 0;

function fetchLoginPage() {
clickCount++;
if (clickCount % 2 == 0) {
    let x = document.getElementById('user-info-popup');
    x.style.display = "none";
    return;
}
var login = document.getElementById('login-text');
if (login.innerHTML != "Login") {
    let x = document.getElementById('user-info-popup');
    x.style.display = "inherit";
    return;
}

var blur = document.getElementById('blur');
blur.classList.toggle('active');

var popup = document.getElementById('login-page');
popup.classList.toggle('active');
}

function logout() {
let currentUser = {
    name: "Login"
}

localStorage.setItem('cultUserName', JSON.stringify(currentUser));
window.location.href = "mindfulness.html";
}

function displayCart() {
var cart = document.querySelector('.Cart-container');
cart.style.display = "inherit";
}

function hideCart() {
var cart = document.querySelector('.Cart-container');
cart.style.display = "none";
}

function verifyLogin() {

let phone = document.getElementById('login-phone').value;
let password = document.getElementById('login-password').value;

let data = JSON.parse(localStorage.getItem('cultFitUsers'));

if (data == null) {
    alert("Invalid Credentials!");
    return;
}

if (data[phone] == undefined) {
    alert("Invalid Credentials!");
}
else {
    if (data[phone].password == password) {
        var login = document.getElementById('login-text');

        if (login.innerHTML == "Login") {
            let currentUser = data[phone];

            localStorage.setItem('cultUserName', JSON.stringify(currentUser));
        }
        else {
            alert("User already logged in");
        }
        window.location.href = "mindfulness.html";
    }
    else {
        alert("Invalid Credentials!");
    }
}

}


let check = JSON.parse(localStorage.getItem('cultUserName'));
if (check != null) {
var login = document.getElementById('login-text');
login.innerHTML = `${check.name}`;
}

function showHidePassword(id) {
let input = document.getElementById('login-password');
let passwordType = document.getElementById(id);
if (input.type == 'password') {
    input.type = "text";
    passwordType.removeAttribute('class');
    passwordType.setAttribute('class', 'far fa-eye');
}
else {
    input.type = 'password';
    passwordType.removeAttribute('class');
    passwordType.setAttribute('class', 'far fa-eye-slash');
}
}





//------------- Cart js ----------\\
function displayCart() {
    var cart = document.querySelector('.Cart-container');
    cart.style.display = "inherit";
}

function hideCart() {
    var cart = document.querySelector('.Cart-container');
    cart.style.display = "none";
}



// ----------- cart js --------- \\
var borderBottomAchor = document.getElementById('eatfit');
function underline(x) {
    var a = document.getElementById(x);
    borderBottomAchor.style.borderBottom = "none";
    borderBottomAchor.style.fontWeight = "500";

    borderBottomAchor = a;
    borderBottomAchor.style.fontWeight = "bolder";
    a.style.borderBottom = "2px solid rgb(255, 50, 120)";

    var cartImg = document.getElementById('cart-img-1');
    var cartDes = document.getElementById('cart-description');

    if (x == "cultgear") {
        cartImg.style.display = "none";
        cartDes.style.display = "none";
    }
    else {
        cartImg.style.display = "inherit";
        cartDes.style.display = "inherit";
    }
}


// ----------- location pop up ------------\\

  // ----------- location pop up ------------\\

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




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}