function password1(str){

    var constant = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_,-,#,&,*,@]).{8}$/;
    return constant.test(str);
}




function check(form){
    
    for (var i = 0; i <= 8; i++) {
        if (form.password.value[i] == " ") {
            alert("White spaces are not allowed in password");
            form.password.focus();

            return false;
        }
        else { continue; }
    }


    if (form.password.value[0] >= 'A' && form.password.value[0] <= 'Z') {
        i = 0;

    }
    else {
        alert("You must start Your password with an Upper Case letter");
        form.password.focus();
        return false;
    }




    if (form.password.value != "" && form.password.value == form.confirm_password.value) {
        if (!password1(form.password.value)) {
            alert("Password is not valid!, It Must be exactly 8 characters with capital and small case letters, digits and special charachters");
            form.password.focus();
            return false;
        }
    }


    else {
        alert("Passwords Don't Match");
        form.password.focus();
        return false;
    }
    return alert("Congratulation Sir, You became now One of Us❤️🙈😉🤩😇💎🌸🎁");



}

function check1(form) {
    if (form.subject.value == "") {
        alert("Enter Your Message ..... ");
        form.subject.focus();
        return false;
    }
    return alert("We've received your message and will replay as fast as we can😁😇❤️")
}
