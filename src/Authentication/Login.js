import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./LoginValidation";
import axios from "axios";
import '../css/styles.css';

function Login() {

    const [values, setValues] = useState({
        email: '',
        password: '',

    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [showBtn, setShowBtn] = useState(false);

    //TO DISABLE BUTTON UNTILL ALL FIELDS ARE FILLED
    useEffect(() => {
        if (values.email && values.email.length && values.password && values.password.length) {
            setShowBtn(true)
        } else {
            return;
        }
    }, [values.email, values.password]);

    //TO ENTER THE NEW VALUES
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    //TO RECIEVE THE DATA FROM AXIOS REQUEST
    axios.defaults.withCredentials = true;

    //TO VALIDATE THE LOGIN[IF USER IS LOGGEDD IN, LOGIN PAGE WILL NOT SHOW]
    useEffect(() => {
        axios.get('http://localhost:8081')
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/Dash')
                } else {
                    navigate('/')
                }
            })
            .catch(err => {
                console.log(err)
                alert("Error")
            })
    }, []);

    //TO SUBMIT THE FORM 
    const handleSubmit = (event) => {
        event.preventDefault();
        const err = validation(values);
        setErrors(err)
        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if(res.data.Status === "Success") {
                        navigate('/Dash');
                    }  
                    else{
                        alert("Oops!! No record found. Create an account to login.")
                    }   
                })
                .catch(err => {
                    console.log(err);
                    alert("Oops!! Logging failed.");
                });
        }
    }

    return (
        <body>
            <div className='back d-flex justify-content-center align-items-center bg-primary vh-100'>
                <div className=' bg-white p-3 rounded w-25'>
                    <div>
                        <h2 className="pb-4">Login</h2>
                    </div>
                    <form id="loginForm" action="" onSubmit={handleSubmit} name="login">

                        <div className="pb-4">
                            <label className="sc-dCFHLb gxHIdr"> Your Work Email </label>
                            <div className="sc-eeDRCY hapxVj">
                                <div className="sc-koXPp cKXuiA eui-input-container">
                                    <div className="sc-cWSHoV dDXBTB">
                                        <input type="email" placeholder="Enter Work Email" name="email"
                                            onChange={handleInput} className="sc-bmzYkS eUhKiq" />
                                    </div>
                                </div>
                                {errors.email && <span className="text-danger">{errors.email}</span>}
                                <div className="sc-dtBdUo hHvdph">
                                    <div className="sc-kOHTFB dZoPQT"></div>
                                </div>
                            </div>
                        </div>

                        <div className="pb-4">
                            <label className="sc-dCFHLb gxHIdr"> Your Password </label>
                            <div className="sc-eeDRCY hapxVj">
                                <div className="sc-koXPp cKXuiA eui-input-container">
                                    <div className="sc-cWSHoV dDXBTB">
                                        <input type="password" placeholder="Enter Password" name="password"
                                            onChange={handleInput} className="sc-bmzYkS eUhKiq" />
                                    </div>
                                </div>
                                {errors.password && <span className="text-danger">{errors.password}</span>}
                                <div className="sc-dtBdUo">
                                    <div className="sc-kOHTFB dZoPQT"></div>
                                </div>
                            </div>
                        </div>

                        <div className=" mt-3 text-center">
                            <button id="submit" className={!showBtn ? "" : "abc"} disabled={!showBtn} type='submit' tabIndex="5" color="primary">
                                <span> Log In </span>
                            </button>
                        </div>

                        <div className=" mt-3 text-center">
                            <Link to='/signup'>
                                <span> Create New Account</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
}

export default Login;