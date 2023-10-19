function validateForm(evt){
    evt.preventDefault();

    let email = evt.target[0].value;
    let password = evt.target[1].value;

    if (email.includes("@") == false || email.includes(".") == false){
        alert("Email must include @ and .");
    }

    if (password.length < 8){
        alert("Password too short");
    }
}