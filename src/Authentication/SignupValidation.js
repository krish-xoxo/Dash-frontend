function valid(values) {
    let error = {};
    const namePattern = /^[A-Za-z\s]{1,21}$/;
    const email_patt = /^[a-zA-Z0-9]+@[^\s@]+\.[^\s@]+$/;
    const pass_patt = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{5,}$/;
    if (values.name === "") {
        error.name = "Name field cannot be empty";
    }else if (!namePattern.test(values.name)) {
        error.name = "Name should not contain special characters and should be less than 20 characters";
    }
    else {
        error.name = "";
    }
    if (values.email === "") {
        error.email = "Email field cannot be empty";
    } else if (!email_patt.test(values.email)) {
        error.email = "Oops sorry !! Email did not match the required pattern";
    }
    else {
        error.email = "";
    }
    if (values.password === "") {
        error.password = "Password field cannot be empty";
    } else if (!pass_patt.test(values.password)) {
        error.password = "The password should be of mininum 5 letters and should contain atleast a Uppercase letter, a Lowercase letter and should not contain special characters";
    }
    else {
        error.password = "";
    }
    return error;
}

export default valid;