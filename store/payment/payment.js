async function checkcart() {
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
                payment(data.orders)
            })
    }

    catch {
        console.log("is-cookie-doesn't-exist")
    }
   //data of one product
}
checkcart();
let total = 0 ; 
function payment(data) {
    let orderidvalue = Math.floor(1000000 + Math.random() * 9000);
    if(data.length > 0) {
        let orderid = document.getElementById("orderid");
        orderid.innerHTML = orderidvalue;
    }

    //total payable amount 
   
    data.forEach((el)=>{
        let quan = +el.quantity;
        let price = +el.product.discountedPrice
        total += quan * price;
    })

    let amount = document.getElementById("amount");
    amount.innerHTML = ` ${total}`;
    let amount1 = document.getElementById("amount1");
    amount1.innerHTML = ` ${total}`;
}


   //to remove all data 


   async function removeAllItem(){
    const re = new RegExp(`(?<=fitaddatoken=)[^;]*`);
    try {
        let token = document.cookie.match(re)[0]
        token = `Bearer ${token}`
        fetch(`https://fitadda.onrender.com/api/v1/orders/delivered`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'authorization': token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
           
        }).then(response => response.json())
            .then( 
                console.log("all data is removed")
            )
    }

    catch {
        console.log("is-cookie-doesn't-exist")
    }
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
                                window.location.href = "../store.html";
                            })
                            gif.append(img, backBtn);

                            field.append(gif);

                            //!itme to be removed from cart
                        removeAllItem();
                        
                    } else {
                        alert("Card Is Expired");
                    }
                }
            }
        }
    }


 