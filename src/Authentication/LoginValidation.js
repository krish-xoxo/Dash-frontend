function validation(values) {
    let error = {};
    const email_patt = /^[a-zA-Z0-9]+@[^\s@]+\.[^\s@]+$/;
    const pass_patt = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{5,}$/;
    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_patt.test(values.email)) {
        error.email = "Oops sorry!! Wrong email input";
    }
    else {
        error.email = "";
    }
    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!pass_patt.test(values.password)) {
        error.password = "Oops sorry!! Password did not match";
    }
    else {
        error.password = "";
    }
    return error;

}

export default validation;