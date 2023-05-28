function changePassword(){
    let newPasword = document.getElementById('new-password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    console.log(newPasword,confirmPassword );
    resetpassword(newPasword, confirmPassword );
}

async function resetpassword(password, confirmPassword) {
    const re = new RegExp(`(?<=fitaddaResetToken=)[^;]*`);
    let token = document.cookie.match(re)[0]
console.log("token :", token)

    let url = `https://fitadda.onrender.com/api/v1/password/reset/${token}`;

    let response = await fetch(url, {
        method : "PUT",
        mode: 'cors',
        headers: {
            
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            password,
            confirmPassword
        }),
    });
  
    const data = await response.json();
    console.log("userData: ",data);
   if(data.success == false){
    document.getElementById("result").innerText= `${data.message}`
   }
   else{
    document.getElementById("result").innerText= `Password is updated successfully!! Now go back and again login to the website.`
    alert("Password is updated successfully")
    window.location.replace('../loginSignUP/login.html')
   }
    
}
