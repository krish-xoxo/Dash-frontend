import React, { useState, useEffect } from "react";
import axios, { formToJSON } from "axios";
import { useNavigate } from "react-router-dom";
import valid from "./updatevalidate";
import Header from "../Header";
import Sidebar from "../Sidebar";

function Userprofile() {

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

    //TO UPLOAD PROFILE PICTURE

    const [file, setFile] = useState();

    const handleFile = (e) => {
        // console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    }

    const handleUpload = () => {
        const formdata = new FormData();
        formdata.append('image', file);
        axios.post('http://localhost:8081/upload', formdata)
            .then(res => {
                if (res.data.Status === "Success") {
                    console.log("Image upload Successfull.");
                }
                else {
                    console.log("Image uploading failed");
                }
            })
            .catch(err => console.log(err))
    }

    //TO DISABLE THE BUTTON 
    useEffect(() => {
        if (values.age && values.age.length) {
            setShowBtn(true);
        } else {
            return;
        }
    }, []);

    //TO ENTER THE NEW VALUES
    const handleInput = (event) => {
        // console.log("input");
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
        console.log(values);
    }

    //TO VALIDATE THE LOGIN[IF USER IS LOGGEDD IN, LOGIN PAGE WILL NOT SHOW]
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

    //TO UPDATE THE USER'S DETAILS IN THE USERPROFILE PAGE
    useEffect(() => {
        axios.get('http://localhost:8081/userdetails')
            .then(res => {
                console.log(res.data.data);
                if (res.data.Status === "Update True") {
                    setValues(res.data.data);
                    setShowBtn(true)
                }
                else {
                    return;
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    //TO SUBMIT THE FORM 
    const handleSubmit = (event) => {
        event.preventDefault();
        const err = valid(values);
        setErrors(err);
        if (err.name === "" && err.email === "" && err.age === "" && err.gender === "" && err.mobilenumber === "" && err.address === "" && err.pincode === "" && err.city === "" && err.state === "" && err.country === "") {
            const formdata = new FormData();
            formdata.append('image', file);
            formdata.append('values', JSON.stringify(values))
            axios.post('http://localhost:8081/userprofile', formdata)
                .then(res => {
                    if (res.data === "Error - Check the age field and try again. The age field cannot be a string.") {
                        console.log("hie");
                        alert("Update Failed");
                    }
                    else {
                        alert("Update Successfull.")
                        navigate('/Userprofile')
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
                                        <input type="text" defaultValue={values.name || ''} name="name"
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
                                        <input type="text" defaultValue={values.email || ''} name="email"
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
                                        <input type="text" required placeholder="Enter your age" defaultValue={values.age || ''} name='age' value={values.age || ''}
                                            onChange={handleInput} className="sc-bmzYkS eUhKiq" />
                                    </div>
                                </div>
                                {errors.age && <span className="text-danger">{errors.age}</span>}
                            </div>
                        </div>

                        <div className="pb-4">
                            <div>
                                <h6><label className="sc-dCFHLb gxHIdr">Choose your Gender</label></h6>
                                <select value={values.gender} name="gender" onChange={handleInput}>
                                    <option> Please select one...  </option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="non-binary">Non-binary</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            {errors.gender && <span className="text-danger">{errors.gender}</span>}
                        </div>

                        <div className="pb-4">
                            <label className="sc-dCFHLb gxHIdr"> Enter New Picture </label>
                            <input type="file" onChange={handleFile} />
                            <img src={file} />
                            {/* <button onClick={handleUpload}>Upload</button> */}
                        </div>

                        <div className="pb-4">
                            <label className="sc-dCFHLb gxHIdr"> Enter Your Mobile Number </label>
                            <div className="sc-eeDRCY hapxVj">
                                <div className="sc-koXPp cKXuiA eui-input-container">
                                    <div className="sc-cWSHoV dDXBTB">
                                        <input type="text" placeholder="Enter your mobile number" defaultValue={values.mobilenumber || ''} name="mobilenumber"
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
                                        <input type="text" placeholder="Enter address" defaultValue={values.address || ''} name="address"
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
                                        <input type="text" placeholder="Enter pincode" defaultValue={values.pincode || ''} name="pincode"
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
                                        <input type="text" placeholder="Enter city" defaultValue={values.city || ''} name="city"
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
                                        <input type="text" placeholder="Enter state" defaultValue={values.state || ''} name="state"
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
                                        <input type="text" placeholder="Enter country" defaultValue={values.country || ''} name="country"
                                            onChange={handleInput} className="sc-bmzYkS eUhKiq" />
                                    </div>
                                </div>
                                {errors.country && <span className="text-danger">{errors.country}</span>}
                            </div>
                        </div>

                        <div className=" mt-3 text-center">
                            <button className={!showBtn ? "" : "abc"} disabled={!showBtn} type='submit' tabIndex="5" color="primary">
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