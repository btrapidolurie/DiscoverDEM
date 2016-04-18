function validateForm() {
    var valid = 1;
    var $email = $('#email').val();
    var $name = $('#name').val();
    var $msg = $('#message').val();

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (name.value === "") {
        valid = 0;
        name_validation.innerHTML = "Field Required";
        name_validation.style.display = "block";
        name_validation.parentNode.style.backgroundColor = "#FFDFDF";
    }

    if (message.value === "") {
        valid = 0;
        message_validation.innerHTML = "Field Required";
        message_validation.style.display = "block";
        message_validation.parentNode.style.backgroundColor = "#FFDFDF";
    } else {
        message_validation.style.display = "none";
        message_validation.parentNode.style.backgroundColor = "transparent";
    }

    if (email.value === "") {
        valid = 0;
        email_validation.innerHTML = "Field Required";
        email_validation.style.display = "block";
        email_validation.parentNode.style.backgroundColor = "#FFDFDF";
    } else {
        email_validation.style.display = "none";
        email_validation.parentNode.style.backgroundColor = "transparent";
    }

    if (!filter.test(email.value)) {
        valid = 0;
        email_validation.innerHTML = "Invalid email address";
        email_validation.style.display = "block";
        email_validation.parentNode.style.backgroundColor = "#FFDFDF";
    } else {
        email_validation.style.display = "none";
        email_validation.parentNode.style.backgroundColor = "transparent";
    }
    if (!valid)
        return false;
}
