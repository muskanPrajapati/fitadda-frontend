let total = 0 ;
function payment(){
    let data = JSON.parse(localStorage.getItem('cartfood'));
    let orderidvalue = Math.floor(1000000 + Math.random() * 9000);
    if(data.length > 0) {
        let orderid = document.getElementById("orderid");
        orderid.innerHTML = orderidvalue;
    }

    //total payable amount 
    data.forEach((el)=>{
        let quan = +el.qty;
        let price = +el.price;
        total += quan * price;
    })

    let amount = document.getElementById("amount");
    amount.innerHTML = ` ${total}`;
    let amount1 = document.getElementById("amount1");
    amount1.innerHTML = ` ${total}`;
}

//for card payment

function checkoutbtn(event) {
       event.preventDefault();
    let form = document.getElementById("myform");
    let name = form.cardname.value;
    let number = form.cardnumber.value;
    let year = form.yy.value;
    let month = form.mm.value;
    let cvv = form.cvv.value;

    if (total == 0) {
        alert("No Item in Cart Add Item To Cart");
    } else if (!name || !number || !year || !month || !cvv) {
        alert("One or More Fields Are Empty");
    } else {
        number = number.split("");
        if (number.length != 16) {
            alert("Enter Correct Card Number");
        } else {
            cvv = cvv.split("");
            if (cvv.length != 3) {
                alert("Enter Correct CVV Number");
            } else if (month <= 0 || month >= 13) {
                alert("Invalid Month");
            } else {
                if (year >= 2023) {
                    // Main
                    //!itme to be removed from cart

                    let store = JSON.parse(localStorage.getItem("cartfood"));
                    store = [];
                    localStorage.setItem("cartfood", JSON.stringify(store));

                    let field = document.getElementById("main-div");
                    let h2 = document.getElementById("h2");

                    h2.innerHTML = null;
                    h2.innerText = "Thankyou For Shopping at Us";
                    field.innerHTML = null;
                    let gif = document.createElement("div");
                    let img = document.createElement("img");
                    img.src = 'https://thumbs.gfycat.com/GracefulImpishFlea-size_restricted.gif'

                    let backBtn = document.createElement("button")
                    backBtn.innerText = "CONTINUE ORDERING!"
                    backBtn.addEventListener("click", () => {
                        window.location.href = '../foodhub/foodhub.html';
                    })
                    gif.append(img, backBtn);

                    field.append(gif);

                } else {
                    alert("Card Is Expired");
                }
            }
        }
    }
}