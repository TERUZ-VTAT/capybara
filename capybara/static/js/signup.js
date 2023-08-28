function CheckPassword(confirm){
    var input1 = password.value;
    var input2 = confirmpassword.value;
    var input3 = username.value;

    if (input1 == "" || input2 == "" || input3 == "") {
        passworderrortext.style.display = "none";
        userinfomationerrortext.style.display="block";
    } else {
        userinfomationerrortext.style.display="none";
        if (input1 !== input2) {
            passworderrortext.style.display="block";

        } else{
            passworderrortext.style.display="none";
            document.signup_form.submit();
        }
    }
}