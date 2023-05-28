function adduser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number= document.getElementById("number").value;
    let password= document.getElementById("password").value;
    let img = "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png";

    let lowercaseLetter = /[a-z]/g;
    let uppercaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if(name.length == 0 ){
        alert('Please fill in name');
    }
    else if(email.length == 0){
        alert('Please fill in email');
    }
    else if(number.length == 0){
        alert('Please fill in number');
    }
    else if(password.length == 0){
        alert('Please fill in password');
    }
    else if(name.length == 0 &&email.length == 0 && number.length == 0 && password.length == 0 ){
        alert('Please fill in the requiered Details');
    }
    else if(name.length < 3 ){
        alert('Name length should be greater than 3 characters')
    }
    else if (number.length > 0 && number.length < 10){
        alert('Phone number must be at least 10 characters')
    }
    else if (password.length < 8){
        alert('Password should be at least 8 characters')
    }
    else if(!password.match(numbers)){
        alert('please add one number');
    }
    else if(!password.match(uppercaseLetter)){
        alert('please add one uppercase letter');
    }
    else if(!password.match(lowercaseLetter)){
        alert('please add one lowercase letter');
    }
    else{   

        fetch('https://fitadda.onrender.com/api/v1/register', {
            method: 'post',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password,
                mobile: number
            }),
        }).then(response => response.json())
            .then(data => {
                console.log("data", data)
                // userData(data.user);
                if (data.success === true) {
                    window.location.replace("login.html");
                }else{
                    alert("Error!! Could not make account. Try changing the email")
                }
            })
    }
}


function navigateToLomePage(){
    window.location.replace("login.html");
}

// function userData(data) {
//     let userArray = [];
//     userArray.push(data.name);
//     userArray.push(data.email);
//     userArray.push(data.mobile);
//     return(userArray)
// }
  
// export default userData;