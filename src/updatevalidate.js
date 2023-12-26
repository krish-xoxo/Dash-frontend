function valid(values){
    let error={};
    const email_patt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numericPattern = /^\d{1,6}$/;
    const agePattern = /^\d{1,2}$/;

    if(values.name === ""){
        error.name = "Gender cannot be null";
    }
    else{
        error.name = "";
    }

    if(values.email === ""){
        error.email = "Email should not be empty";
    }else if(!email_patt.test(values.email)){
        error.email = "Email did not match";
    }
    else{
        error.email = "";
    }
    if(values.age === ""){
        error.age = "Age cannot be null";
    }else if(!agePattern.test(values.age)){
        error.age = "Age cannot be a string and should be < 100";
    }
    else{
        error.age = "";
    }
    if(values.gender === ""){
        error.gender = "Gender cannot be null";
    }
    else{
        error.gender = "";
    }
    if(values.mobilenumber === ""){
        error.mobilenumber = "Mobile Number cannot be empty";
    }
    else{
        error.mobilenumber = "";
    }
    if(values.address === ""){
        error.address = "Address field cannot be empty";
    }
    else{
        error.address = "";
    }
    if(values.pincode === ""){
        error.pincode = "Pincode cannot be null";
    }else if(!numericPattern.test(values.pincode)){
        error.pincode = "Pincode cannot be a string and should be equal to 6 digits";
    }
    else{
        error.pincode = "";
    }
    if(values.city === ""){
        error.city = "City field cannot be empty";
    }
    else{
        error.city = "";
    }
    if(values.state === ""){
        error.state = "State field cannot be empty";
    }
    else{
        error.state = "";
    }
    if(values.country === ""){
        error.country = "Country field cannot be empty";
    }
    else{
        error.country = "";
    }
    return error;
}

export default valid;