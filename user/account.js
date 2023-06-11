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


//logout
function userLogOut() {
    console.log(" log out function is clicked ")                
       
        document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
      
        window.location.reload();
        alert("Now you are logged out!! ");
        window.location.replace("../index.html")
       
}

async function updatePassword(){
    let oldPassword = document.getElementById("old-password").value
    let newPassword = document.getElementById('new-password').value
    let confirmPassword = document.getElementById('confirm-password').value;

    console.log(newPassword);
    console.log(confirmPassword);

    const re = new RegExp(`(?<=fitaddatoken=)[^;]*`);
    let url = "https://fitadda.onrender.com/api/v1/me/password/update";
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
            newPassword,
            confirmPassword,
            oldPassword
        }),
    });
  
    const data = await response.json();
    console.log("password status: ",data);
    if(data.success == true){
        alert("password is reset!! Please login back with updated password")
        userLogOut()
        window.location.href = "../loginSignUP/login.html"
    }
    else{
        alert("error!! ");
    }
}

