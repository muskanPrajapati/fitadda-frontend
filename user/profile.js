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
                <div id="login-text">${username}</div>`

                document.getElementById('user').innerHTML = ` 
                <img src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png" alt="" width="80px"
                        id="profile-picture">
                <p id="fetchUserName">${username}</p> `
            
    }
} catch {
    console.log("is-cookie-doesn't-exist")
}

//end

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

// end

//update profile pic
function updateProfilePicture() {
    var imgSrc = prompt(' Enter link for your profile picture ');
    if(imgSrc == ""){
        alert('Profile not changed!');
        return;
    }

    let data = JSON.parse(localStorage.getItem('cultFitUsers'));
    let userData = data[check.number];
    userData.img = imgSrc;

    localStorage.setItem('cultUserName', JSON.stringify(userData));

    data[check.number] = userData;
    localStorage.setItem('cultFitUsers', JSON.stringify(data));

    window.location.href = "userProfile.html"
}

//gender icon
function changeIconColor(value){
    let user = document.getElementById('user-gender');
    user.value = value;

    var male = document.getElementById('male-icon');
    var female = document.getElementById('female-icon');
    var other = document.getElementById('transgender-icon');

    if(value == "Male"){
        male.style.color = "rgb(255, 46, 115)";
        female.style.color = "black";
        other.style.color = "black";
    }
    else if(value == "Female"){
        female.style.color = "rgb(255, 46, 115)";
        male.style.color = "black";
        other.style.color = "black";
    }
    else {
        other.style.color = "rgb(255, 46, 115)";
        female.style.color = "black";
        male.style.color = "black";
    }

    alert("Profile is updated")
}


//logout

function userLogOut() {
console.log(" log out function is clicked ")                
   
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  
    window.location.reload();
    alert("Now you are logged out!! ");
    window.location.replace("../index.html")
   
}


//get user details 
async function userProfile() {
    const re = new RegExp(`(?<=fitaddatoken=)[^;]*`);
    let url = "https://fitadda.onrender.com/api/v1/me/profile";
    let token = document.cookie.match(re)[0]
    token = `Bearer ${token}`
    let response = await fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: {
            'authorization': token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
  
    const data = await response.json();
    console.log("userData: ",data);
    appendDetails(data.user);
}


function appendDetails(user) {
    let name = document.getElementById('user-name')
    name.setAttribute('value', user.name)

    let phone = document.getElementById('user-phone')
    phone.setAttribute('value', user.mobile)

    let mail = document.getElementById('user-email');
    mail.setAttribute('value', user.email);
   
    document.getElementById('save').addEventListener('click',()=>{
        console.log(" edit btn is clicked")
        openForm();
    })

}


function openForm() {
    document.getElementById("infoForm").style.display = "block";
    document.getElementById("right-data-userProfile").style.display = "none";
}


function closeForm(event){
    event.preventDefault();
    let name = document.getElementById("nameVal").value
    let phone = document.getElementById("phnVal").value
    let email = document.getElementById("emailVal").value
    selectElement = document.querySelector("#genderVal");
    let gender = selectElement.value;
    updateProfile(name, phone, email);
    changeIconColor(gender)
    // console.log("form data : ", name, phone, email, gender);
    document.getElementById("infoForm").style.display = "none";
    document.getElementById("right-data-userProfile").style.display = "block";
}

async function updateProfile(newName, newMobile, newEmail) {
    const re = new RegExp(`(?<=fitaddatoken=)[^;]*`);
    let url = "https://fitadda.onrender.com/api/v1/me/update";
    let token = document.cookie.match(re)[0]
    token = `Bearer ${token}`
    let response = await fetch(url, {
        method : "PUT",
        mode: 'cors',
        headers: {
            'authorization': token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            email :newEmail,
            mobile: newMobile,
            name : newName,
        }),
    });
  
    const data = await response.json();
    // console.log("updatedData: ",data);
    userProfile() 
}
