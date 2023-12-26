function valid(values){
    let error={};
    const email_patt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pass_patt = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{5,}$/;    
    if(values.name === ""){
        error.name = "Name field cannot be empty";
    }
    else{
        error.name = "";
    }
    if(values.email === ""){
        error.email = "Email field cannot be empty";
    }else if(!email_patt.test(values.email)){
        error.email = "Email did not match the required pattern";
    }
    else{
        error.email = "";
    }
    if(values.password === ""){
        error.password = "Password field cannot be empty";
    }else if(!pass_patt.test(values.password)){
        alert("The password should be of mininum 5 letters and should contain atleast a Uppercase letter and a Lowercase letter");
    }
    else{
        error.password = "";
    }
    return error;
}

export default valid;