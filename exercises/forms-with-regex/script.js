function validateForm(evt){
    evt.preventDefault();

    let email = evt.target[0].value;
    let password = evt.target[1].value;

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){
        alert("Ange en giltig e-post");
    }

    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\!@#\]\[\)\(]).{12,}$/.test(password) == false){
        alert("Ange ett giltigt lösenord");
    }
}
