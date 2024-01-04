import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import valid from "./updatevalidate";
import Header from "../Header";
import Sidebar from "../Sidebar";

function Userprofile() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('')
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [showBtn, setShowBtn] = useState(false)

    const [values, setValues] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
        mobilenumber: '',
        address: '',
        pincode: '',
        city: '',
        state: '',
        country: '',
    })


    axios.defaults.withCredentials = true;

    useEffect(() => {
        if (values.age && values.age.length && values.gender && values.gender.length) {
            setShowBtn(true);
        } else {
            return;
        }
    }, [values.name, values.email, values.age, values.gender, values.mobilenumber, values.address, values.pincode, values.city, values.state, values.country]);

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    useEffect(() => {
        axios.get('http://localhost:8081')
            .then(res => {
                if (res.data.Status === "Success") {

                } else {
                    navigate('/');
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8081')
            .then(res => {
                if (res.data.Status === "Success") {
                    setName(res.data.name);
                    setEmail(res.data.email);
                    setValues(prev => ({ ...prev, name: res.data.name, email: res.data.email }))
                } else {
                    setAuth(false);
                    setMessage(res.data.Message);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8081/userprofile')
            .then(res => {
                if (res.data.Status === "Update Succesfull") {
                    setAge(res.data.age);
                    setGender(res.data.gender);
                    setMobilenumber(res.data.mobilenumber);
                    setAddress(res.data.address);
                    setPincode(res.data.pincode);
                    setCity(res.data.city);
                    setState(res.data.state);
                    setCountry(res.data.country);
                    setValues(prev => ({ ...prev, age: res.data.age, gender: res.data.gender, mobilenumber: res.data.mobilenumber, address: res.data.address, pincode: res.data.pincode, city: res.data.city, state: res.data.state, country: res.data.country}))
                }
                else{
                    console.log("Error");
                }
            })
            .catch(err => {
                console.log(err);
            })
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        const err = valid(values);
        setErrors(err);
        if (err.name === "" && err.email === "" && err.age === "" && err.gender === "" && err.mobilenumber === "" && err.address === "" && err.pincode === "" && err.city === "" && err.state === "" && err.country === "") {
            axios.post('http://localhost:8081/userprofile', values)
                .then(res => {
                    if (res.data === "Error") {
                        console.log("hie");
                        alert("Update Failed");
                    }
                    else {
                        alert("Update Successfull.")
                        navigate('/Dash')
                    }
                })
                .catch(e => console.log(e))
        }
    }

    return (
        <body>
            <form action="" onSubmit={handleSubmit}>
                <div className='grid-container'>
                    <Header />
                    <Sidebar />
                    <div className="main-container" >
                        <div className="main-title">
                            <h4> Please update the following.</h4>
                        </div>

                        <div className="pb-4">
                            <label className="sc-dCFHLb gxHIdr"> Enter New Username </label>
                            <div className="sc-eeDRCY hapxVj">
                                <div className="sc-koXPp cKXuiA eui-input-container">
                                    <div className="sc-cWSHoV dDXBTB">
                                        <input type="name" value={name} name="name"
                                            onChange={handleInput} className="sc-bmzYkS eUhKiq" />
                                    </div>
                                </div>
                                {errors.name && <span className="text-danger">{errors.name}</span>}
                            </div>
                        </div>

                        <div className="pb-4">
                            <label className="sc-dCFHLb gxHIdr"> Enter New Email </label>
                            <div className="sc-eeDRCY hapxVj">
                                <div className="sc-koXPp cKXuiA eui-input-container">
                                    <div className="sc-cWSHoV dDXBTB">
                                        <input type="email" value={email} name="email"
                                            onChange={handleInput} className="sc-bmzYkS eUhKiq" />
                                    </div>
                                </div>
                                {errors.email && <span className="text-danger">{errors.email}</span>}
                            </div>
                        </div>

                        <div className="pb-4">
                            <label className="sc-dCFHLb gxHIdr"> Enter Your Age(*) </label>
                            <div className="sc-eeDRCY hapxVj">
                                <div className="sc-koXPp cKXuiA eui-input-container">
                                    <div className="sc-cWSHoV dDXBTB">
                                        <input type="age" placeholder="Enter Your Age" value = {age} name="age"
                                            onChange={handleInput} className="sc-bmzYkS eUhKiq" required />
                                    </div>
                                </div>
                                {errors.age && <span className="text-danger">{errors.age}</span>}
                            </div>
                        </div>

                        <div className="pb-4">
                            <div>
                                <h6><label className="sc-dCFHLb gxHIdr" htmlFor="gender">Choose your Gender(*)</label></h6>
                                <select name="gender" onChange={handleInput} required>
                                    <option value="">Please select one…</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="non-binary">Non-binary</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            {errors.gender && <span className="text-danger">{errors.gender}</span>}
                        </div>


                        <div className="pb-4">
                            <label className="sc-dCFHLb gxHIdr"> Enter Your Mobile Number </label>
                            <div className="sc-eeDRCY hapxVj">
                                <div className="sc-koXPp cKXuiA eui-input-container">
                                    <div className="sc-cWSHoV dDXBTB">
                                        <input type="mobilenumber" placeholder="Enter Your Mobile Number" name="mobilenumber"
                                            onChange={handleInput} className="sc-bmzYkS eUhKiq" />
                                    </div>
                                </div>
                                {errors.mobilenumber && <span className="text-danger">{errors.mobilenumber}</span>}
                            </div>
                        </div>

                        <div className="pb-4">
                            <label className="sc-dCFHLb gxHIdr"> Enter Your Complete Address </label>
                            <div className="sc-eeDRCY hapxVj">
                                <div className="sc-koXPp cKXuiA eui-input-container">
                                    <div className="sc-cWSHoV dDXBTB">
                                        <input type="address" placeholder="Enter Your Address" name="address"
                                            onChange={handleInput} className="sc-bmzYkS eUhKiq" />
                                    </div>
                                </div>
                                {errors.address && <span className="text-danger">{errors.address}</span>}
                            </div>
                        </div>

                        <div className="pb-4">
                            <label className="sc-dCFHLb gxHIdr">Enter Your Pincode</label>
                            <div className="sc-eeDRCY hapxVj">
                                <div className="sc-koXPp cKXuiA eui-input-container">
                                    <div className="sc-cWSHoV dDXBTB">
                                        <input type="pincode" placeholder="Enter Your Pincode" name="pincode"
                                            onChange={handleInput} className="sc-bmzYkS eUhKiq" />
                                    </div>
                                </div>
                                {errors.pincode && <span className="text-danger">{errors.pincode}</span>}
                            </div>
                        </div>

                        <div className="pb-4">
                            <label className="sc-dCFHLb gxHIdr"> Enter Your City </label>
                            <div className="sc-eeDRCY hapxVj">
                                <div className="sc-koXPp cKXuiA eui-input-container">
                                    <div className="sc-cWSHoV dDXBTB">
                                        <input type="city" placeholder="Enter Your City" name="city"
                                            onChange={handleInput} className="sc-bmzYkS eUhKiq" />
                                    </div>
                                </div>
                                {errors.city && <span className="text-danger">{errors.city}</span>}
                            </div>
                        </div>

                        <div className="pb-4">
                            <label className="sc-dCFHLb gxHIdr"> Enter Your State </label>
                            <div className="sc-eeDRCY hapxVj">
                                <div className="sc-koXPp cKXuiA eui-input-container">
                                    <div className="sc-cWSHoV dDXBTB">
                                        <input type="state" placeholder="Enter Your State" name="state"
                                            onChange={handleInput} className="sc-bmzYkS eUhKiq" />
                                    </div>
                                </div>
                                {errors.state && <span className="text-danger">{errors.state}</span>}
                            </div>
                        </div>

                        <div className="pb-4">
                            <label className="sc-dCFHLb gxHIdr"> Enter Your Country </label>
                            <div className="sc-eeDRCY hapxVj">
                                <div className="sc-koXPp cKXuiA eui-input-container">
                                    <div className="sc-cWSHoV dDXBTB">
                                        <input type="country" placeholder="Enter Your Country" name="country"
                                            onChange={handleInput} className="sc-bmzYkS eUhKiq" />
                                    </div>
                                </div>
                                {errors.country && <span className="text-danger">{errors.country}</span>}
                            </div>
                        </div>

                        <div className=" mt-3 text-center">
                            <button className={!showBtn ? "" : "abc"} disabled={!showBtn} type='submit' tabindex="5" color="primary">
                                <span> Update Profile </span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </body>
    )
}

export default Userprofile;