function valid(values){
    let error={};
    const email_patt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pinPattern = /^\d{1,6}$/;
    const agePattern = /^\d{1,2}$/;
    const numPattern = /^\d{1,13}$/;
    const namePattern = /^[A-Za-z\s]+$/;

    if(values.name === ""){
        error.name = "";
    }
    else{
        error.name = "";
    }

    if(values.email === ""){
        error.email = "";
    }else if(!email_patt.test(values.email)){
        error.email = "Email did not match";
    }
    else{
        error.email = "";
    }
    if(values.age === ""){
        error.age = "";
    }else if(!agePattern.test(values.age)){
        error.age = "Age cannot be a string and should be < 100";
    }
    else{
        error.age = "";
    }
    if(values.gender === ""){
        error.gender = "";
    }
    else{
        error.gender = "";
    }
    if(values.mobilenumber === ""){
        error.mobilenumber = "";
    }else if(!numPattern.test(values.mobilenumber)){
        error.mobilenumber = "Mobile Number cannot be a string";
    }
    else{
        error.mobilenumber = "";
    }
    if(values.address === ""){
        error.address = "";
    }
    else{
        error.address = "";
    }
    if(values.pincode === ""){
        error.pincode = "";
    }else if(!pinPattern.test(values.pincode)){
        error.pincode = "Pincode cannot be a string and should be equal to 6 digits";
    }
    else{
        error.pincode = "";
    }
    if(values.city === ""){
        error.city = "";
    }else if(!namePattern.test(values.city)){
        error.city = "City field cannot be a interger";
    }
    else{
        error.city = "";
    }
    if(values.state === ""){
        error.state = "";
    }else if(!namePattern.test(values.state)){
        error.state = "State filed cannot be a interger";
    }
    else{
        error.state = "";
    }
    if(values.country === ""){
        error.country = "";
    }else if(!namePattern.test(values.country)){
        error.country = "Country field cannot be a interger";
    }
    else{
        error.country = "";
    }
    return error;
}

export default valid;