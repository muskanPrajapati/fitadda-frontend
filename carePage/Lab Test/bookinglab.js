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
    let show_data = document.getElementById('show-data')
    let h1 = document.createElement('h1')
    h1.setAttribute("style", "font-size:30px")
    h1.textContent = "Full Body Health Checkup"
    let p = document.createElement('p')
    p.setAttribute("style", "margin-top:18px;font-size:16px;font-weight:450;color:gray;")
    p.textContent = 'This test will help you understand the status of your key health indicators. It helps in early detection of common chronic & lifestyle health conditions related to thyroid, diabetes, liver, kidney, heart and blood.'
    let p1 = document.createElement('p')
    let p0 = document.createElement('h3')
    p0.id = "custprice"

    p1.textContent = '75 tests'
    p1.setAttribute("style", "margin-top:40px;font-size:18px;font-weight:400;color:gray;")
    let p2 = document.createElement('p')
    p2.setAttribute("style", "margin-top:15px;font-size:14px; color:gray")
    p2.textContent = "Report Ready in 36Hrs"

    show_data.append(h1, p, p0, p1, p2)


    let div = document.createElement('div')
    div.setAttribute("style", "margin-top:10px;font-size:23px;")
    let btn1 = document.createElement('button')

    btn1.id = 'btn1'

    btn1.textContent = 'Book Appointment'
    btn1.onclick = function () {
        fetchAppointmentForm();
    }

    div.append(btn1)
    show_data.append(div)


    let hr = document.createElement('hr')
    hr.setAttribute("style", "margin:15px;height:3px;background-color:gray;width:95%")
    show_data.append(hr)

    let li1 = document.createElement('li')
    li1.textContent = ' Get Flat 20% PhonePe cashback on UPI and wallet transactions or Get Extra 20% Instant Discount on Card Payment'
    li1.setAttribute("style", "margin:15px;color:gray;font-size:14px;font-weight:300")
    show_data.append(li1)

    let li2 = document.createElement('li')
    li2.textContent = ' Get Vitamin Screening test @Rs. 890'
    li2.setAttribute("style", "margin:15px;color:black;font-size:14px;font-weight:300")
    show_data.append(li2)

    let hr1 = document.createElement('hr')
    hr1.setAttribute("style", "margin:15px;height:3px;background-color:gray;width:95%")
    show_data.append(hr1)

    let money;
    function showprice(money) {
        let login = document.getElementById('login-text');
        if(login.innerHTML == "Login"){
            fetchLoginPage();
            return;
        }
        var queryString = "?" + money;
        window.location.href = "../cultFit-FoodStore/checkout.html" + queryString;
    }

    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");
    for (var i = 0; i < queries.length; i++) {
        if (i == 0) {
            let div = document.getElementById("show-img")
            let image = document.createElement('img')
            image.src = queries[i]
            div.append(image)
        }
        if (i == 1) {
            money = queries[i]
            let price = document.getElementById("custprice")
            price.innerHTML = '₹ ' + queries[i]
        }
    }

    // ----------login js--------- \\

    function logout() {
        let currentUser = {
            name: "Login"
        }

        localStorage.setItem('cultUserName', JSON.stringify(currentUser));
        window.location.href = "labtests.html";
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
                    let currentUser = {
                        name: data[phone].name,
                        email: data[phone].email,
                        password: data[phone].password,
                        number: data[phone].number
                    }

                    localStorage.setItem('cultUserName', JSON.stringify(currentUser));
                }
                else {
                    alert("User already logged in");
                }
                window.location.href = "gotoitems.html";
            }
            else {
                alert("Invalid Credentials!");
            }
        }

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
    function notify(msg, status) {
        let notification = document.getElementById('notification')
        let para = document.createElement('p')
        notification.setAttribute('style', "border-radius: 7px;")
        para.innerHTML = msg
        if (status) {
            para.setAttribute('style', "border-radius: 7px;background-color:orange;padding:10px;font-size:20px;font-weight:600;")
            notification.append(para)
            setTimeout(function () {
                notification.innerHTML = null
            }, 2000)
        } else {
            para.setAttribute('style', "border-radius: 7px;background-color:green;padding:10px;font-size:20px;font-weight:600;")
            notification.append(para)
            setTimeout(function () {
                notification.innerHTML = null
            }, 2000)
        }

    }



    function fetchAppointmentForm() {
        var blur = document.getElementById('blur');
        blur.classList.toggle('active');

        var popup = document.querySelector('.appointment-form');
        popup.classList.toggle('active');
    }

    function checkForm1() {
        let userName = document.getElementById('user-name').value;
        let phone  = document.getElementById('user-phone').value;
        let gender = document.getElementById('user-gender').value;
        let email = document.getElementById('user-email').value;

        if(userName == "" || phone == "" || gender == "" || email == ""){
            alert("All fields are important!");
            return;
        }


        let x = document.getElementById('appointment-form2');
        x.style.visibility = "visible";
    }

    function checkform2() {
        let date = document.getElementById('appointment-date').value;
        let time = document.getElementById('appointment-time').value;

        if(date == ""){
            alert("Appointment date is not selected!");
            return;
        }
        else if(time == ""){
            alert("Appointment time is not selected!");
            return;
        }

        let Y = document.getElementById('appointment-success');
        Y.style.visibility = "visible";

        
    }

    function changeGender(value){
        let user = document.getElementById('user-gender');
        user.value = value;

        changeIconColor(value);
    }

    function changeIconColor(value){
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
    }

