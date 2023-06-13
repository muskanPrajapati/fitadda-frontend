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


    let fooddata = document.getElementById("viewpart")
    let localFoodData = [
        {
            description: "Banaras is a food lover’s paradise as it is home to a number of delicious dishes. This place is famous all over the country for its food and the recipe that we have for you too has its roots in Banaras. If this dish had to be described in just a sentence, it would be something on the lines of fried baby potatoes submerged in a thick, rich tomato gravy but that wouldn’t do justice as the deliciousn",
            id: 6,
            image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/diy/a3ee50d2-8281-4cc6-9efc-f460054d4262",
            name: "Banarasi Dum Aloo",
            price: "780",
            rating: "5",
            time: "00:35"
        },
        {
            description: "A simple and flavourful side dish loved across India - Bharwa Bhindi, stuffed okra or ladies’ finger is comfort food. Pair it with hot fluffy tawa phulkas, wheat flour parathas or serve it with kadhi chawal as a side dish. The dry sabzi is relished across the country with each home having its own variation and twist to the dish. Loved by children and adults alike, ",
            id: 0,
            image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/diy/d006b4e3-ad79-4cee-85df-b0b6235591d7",
            name: "Bharwa Bhindi",
            price: "480",
            rating: "5",
            time: "00:20"
        },
        {
            description: "Generally, non-vegetarian food is loaded with too many calories. But if you know the correct way and portion of vegetables and poultry products to include, it can work wonders. So, here we bring to you a bowl full of nutrition and will work magically on your palette. It is called the egg ramen bowl. It looks cute, contains well-managed portions and there is no compromise on taste! You can have you",
            id: 1,
            image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/diy/ee056697-5793-43c0-9ec9-c30d7bd086fd",
            name: "Egg Ramen Bowl",
            price: "250",
            rating: "4.9",
            time: "00:30"
        },
        {
            description: "Be it brunch, lunch, or dinner; Veg Hakka noodles are a hot favorite at the dining table. The vibrant colours of the vegetables and the silky soft noodles coated with a light sauce and spicier than the regular noodles making this dish irresistible. With Veg Hakka noodles calories around 500 and a meal by itself, it is far healthier than its non-veg counterparts like chicken or shrimp or beef Hakka ... ",
            id: 2,
            image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/diy/b4deb130-5a33-41ee-91dc-a039c76fdc24",
            name: "Veg Hakka Noodles",
            price: "220",
            rating: "4.8",
            time: "00:25"
        },
        {
            description: "Did you know that a South Indian breakfast is considered to be one of the healthiest in the whole world? This delicious rawa idli recipe is a part of South Indian cuisine and lends a tasty twist to the classic rice and lentil cakes. Combining the goodness of pulses, granulated wheat, and spices, rawa idli has gained popularity from the tiffin centres of Karnataka as this instant recipe bypasses th ... ",
            id: 3,
            image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/diy/f36ce169-811e-4ac2-ae97-f6a44edf8990",
            name: "Rawa Idli",
            price: "380",
            rating: "5",
            time: "00:35"
        },
        {
            description: "A delicious starter is always a lovely way to begin a family lunch or dinner. There is no better way to start a meal than with a delicacy like a plate full of tempting Chilli Baby Corn in front that is too good to resist. The ingredients for preparing this Chilli Baby Corn are many but are easily available at home or in the nearby market. A plain Chilli Baby Corn description is that it is a popula ",
            id: 4,
            image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/diy/5f15068e-eed1-4a7d-b8fa-8df3b8e438c0",
            name: "Chilli Baby Corn",
            price: "270",
            rating: "4.8",
            time: "00:30"
        },
        {
            description: "If you grew up in the 80s and 90s in India, you'd find that cuisines were not that varied like how it is today. Indian restaurants were popular and served Malai Kofta on menus a lot. The Kofta falls under the family of Lebanon meatballs and actually originates from the Indian subcontinent. Malai Kofta is a vegetarian version of those meatballs and made by deep-frying a blend of paneer and mashed p ... ",
            id: 5,
            image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/diy/c5ebb267-04f6-4302-b6c3-efe0f916d9b3",
            name: "Malai Kofta",
            price: "580",
            rating: "5",
            time: "00:45"
        },
        {
            description: "Gatte Ki Sabzi hails from Rajasthani cuisine where chickpea dumplings are dunked in a spicy and tangy yogurt-based gravy. Gram flour is used to make the coating for the dumplings and the dish is served mostly during big events, family gatherings, and wedding parties. Gatte Ki Sabzi is best served with parathas and rotis. For those days when you don't have a lot of vegetables lying around the house ... ",
            id: 6,
            image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/diy/bd1bf9fe-c233-43db-a5a4-cb2f08c0408a",
            name: "Gatte ki Sabzi",
            price: "420",
            rating: "4.9",
            time: "00:45"
        },
        {
            description: "This is one lip-smacking dish that is sure to take you down through the memory lane. It is amazingly easy and quick to make a vegetarian recipe. Served with sweet-spicy chutney, matar kulcha taste all the more delectable. White peas are used to make this dish. It is full of taste and flavor that seems to be bursting in the mouth. It is an extremely versatile dish and is paired with Kulcha, a leave ",
            id: 7,
            image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/diy/5715a831-0aba-4cca-bcfb-d225ebf94a3d",
            name: "Matar Kulcha",
            price: "650",
            rating: "5",
            time: "00:50"
        },
        {
            description: "Healthy Chicken Manchow Soup is an Indo-Chinese soup served famously in Indian streets. It falls under the category of thick soup which uses corn flour as a thickening agent. An all-time favorite it is an excellent starter for any meal. The sharp flavors of ginger and garlic blend beautifully with the tangy flavor of soya sauce in this soup. A hot pot of Healthy Chicken Manchow Soup is not just a  ... ",
            id: 8,
            image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/diy/61293418-0431-49a5-a63a-451bc2a41ad3",
            name: "Healthy Chicken Manchow Soup",
            price: "95",
            rating: "5",
            time: "00:10"
        },
        {
            description: "A famous Maharashtrian recipe, Misal Pav is a delectable cocktail of sprouts, tangy gravy and savouries. Nutritious, healthy and wholesome it is a combination of tasty sprouts cooked in tangy tomatoes and pungent onions gravy. What adds to the flavour is the addition of spice powders and the coconut and onion based misal masala. This is further enhanced with the addition of chivda, potatoes and ot ... ",
            id: 9,
            image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/diy/86d82875-224c-4495-a1fb-47072aad5aef",
            name: "Misal, Pav",
            price: "75,",
            rating: "4,.8",
            time: "00:30"
        },
        {
            description: "You must already be familiar with this dish that we have for you as it is one of the most popular Spinach dishes that is made from time to time in households all over India and even some other Southeast Asian countries. This Aloo Palak Ki Sabzi recipe that we have is pretty similar to the traditional recipe but with a few tweaks to make it as healthy as possible without compromising on  taste so t ... ",
            id: 11,
            image: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/diy/68d5b7a7-05dc-48c1-9516-5e90d50062a8",
            name: "Aloo Palak ki Sabzi",
            price: "750",
            rating: "5",
            time: "00:25"
        }
    ];

    let showdata = JSON.parse(localStorage.getItem("fooddata"));
    if(showdata == null){
        localStorage.setItem('fooddata', JSON.stringify(localFoodData));
        showdata = localFoodData;
    }

    let par = document.getElementById("viewpart")
    if (showdata != null) {
        showdata.forEach(element => {
            let cdiv = document.createElement('div')
            cdiv.setAttribute('class', "foodbox")

            let image = document.createElement('div')
            image.style.backgroundImage = `url("${element.image}")`
            image.setAttribute("class", "foodimg")
            // image.src = element.image
            let ditels = document.createElement('div')
            ditels.setAttribute("class", "ditels")

            let price = document.createElement('div')
            price.innerHTML = `&nbspPrice <i class="fas fa-rupee-sign"></i>${element.price} `

            let rating = document.createElement('div')
            rating.innerHTML = `Rating  ${element.rating}<i class="fas fa-star"></i>`

            let time = document.createElement('div')
            time.innerHTML = `<i class="far fa-clock"></i> ${element.time} min`
            time.setAttribute("claaa", "time")


            let adcartbtn = document.createElement('button')
            adcartbtn.innerHTML = "Add To cart"
            adcartbtn.onclick = function () {
                adincart(element);
            }
            ditels.append(price, rating, time, adcartbtn)
            cdiv.append(image, ditels)

            par.append(cdiv)


        });
    }

    function adincart(el) {

        let ar = localStorage.getItem('cartfood')
        if (ar == null) {
            ar = []
        } else {
            ar = JSON.parse(ar)
        }
        let alradyadd = false
        for (let k = 0; k < ar.length; k++) {
            if (ar[k].id == el.id) {
                ar[k].qty = ar[k].qty + 1;
                alert("Item alrady added please visit cart")
                alradyadd = true;
                break
            }

        }
        if (!alradyadd) {
            el.qty = 1;
            ar.push(el);
            alert(`${el.name} added in cart sucessfully`)
        }


        localStorage.setItem('cartfood', JSON.stringify(ar));

    }

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
        window.location.href = "foodHub.html";
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
                window.location.href = "foodhub.html";
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
        // var cart = document.querySelector('.Cart-container');
        // cart.style.display = "inherit";
        window.location.href = "cart.html"
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