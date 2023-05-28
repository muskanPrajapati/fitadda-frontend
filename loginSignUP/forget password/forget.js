async function sendMail() {
    let email = document.getElementById("email").value;
    console.log(email)
    let url = "https://fitadda.onrender.com/api/v1/password/forgot";
    
    let response = await fetch(url, {
        method : "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            email 
        }),
    });

    const data = await response.json();
    console.log(data)
    if(data.success == true){
        const today = new Date()
            let tomorrow = new Date()
            tomorrow.setDate(today.getDate() + 1)

            let expires = "expires=" + tomorrow;
            document.cookie = 'fitaddaResetToken' + "=" + data.resetToken + ";" + expires + ";path=/";
        document.getElementById("result").innerText = `${data.message}`
        
    }
    else{
        document.getElementById("result").innerText = `${data.message}`
    }
}
