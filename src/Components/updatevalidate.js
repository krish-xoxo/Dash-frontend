function valid(values){
    let error={};
    const namePatt = /^[A-Za-z\s]{1,20}$/;
    const email_patt = /^[a-zA-Z0-9]+@[^\s@]+\.[^\s@]+$/;
    const pinPattern = /^\d{1,6}$/;
    const agePattern = /^\d{1,2}$/;
    const numPattern = /^\d{1,10}$/;
    const namePattern = /^[A-Za-z\s]+$/;

    if(values.name === ""){
        error.name = "";
    }else if(!namePatt.test(values.name)){
        error.name = "Name should not contain special characters and should be less than 20 characters";
    }
    else{
        error.name = "";
    }

    if(values.email === ""){
        error.email = "";
    }else if(!email_patt.test(values.email)){
        error.email = "Oops sorry !! Email should not contain special characters";
    }
    else{
        error.email = "";
    }
    if(values.age === ""){
        error.age = "";
    }else if(values.age === null){
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
    }else if(values.mobilenumber === null){
        error.mobilenumber = "";
    }else if(!numPattern.test(values.mobilenumber)){
        error.mobilenumber = "Mobile Number cannot be a string and should be 10 digits";
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
    }else if(values.pincode === null){
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
        error.city = "City field cannot be a interger and should not contain special character";
    }   
    else{
        error.city = "";
    }
    if(values.state === ""){
        error.state = "";
    }else if(!namePattern.test(values.state)){
        error.state = "State field cannot be a interger and should not contain special character";
    }
    else{
        error.state = "";
    }
    if(values.country === ""){
        error.country = "";
    }else if(!namePattern.test(values.country)){
        error.country = "Country field cannot be a interger and should not contain special character";
    }
    else{
        error.country = "";
    }   
    return error;
}

export default valid;