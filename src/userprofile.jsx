import React,{useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import valid from "./updatevalidate";

function Userprofile(){

    const [email, setEmail] = useState('');
    const [name,setName] = useState('')
	const [message,setMessage] = useState('')
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
		axios.get('http://localhost:8081')
		.then( res => {
			if(res.data.Status === "Success"){
			}else{
				navigate('/');
			}
		})
		.catch(err => { console.log(err)})
	},[]);
    
    useEffect(() => {
        if(values.name && values.name.length && values.email && values.email.length && values.age && values.age.length && values.gender && values.gender.length && values.mobilenumber && values.mobilenumber.length && values.address && values.address.length && values.pincode && values.pincode.length && values.city && values.city.length && values.state && values.state.length && values.country && values.country.length){
            setShowBtn(true);
        }else{
            return;
        }
    },[values.name, values.email, values.age,values.gender,values.mobilenumber, values.address, values.pincode, values.city, values.state,values.country]);

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    useEffect(() => {
		axios.get('http://localhost:8081')
		.then( res => {
			if(res.data.Status === "Success"){
				setName(res.data.name);
                setEmail(res.data.email);
			}else{
				setAuth(false);
				setMessage(res.data.Message);
			}
		})
		.catch(err => { 
			console.log(err)
		})
	},[]);

    const handleSubmit = (event) => {
            event.preventDefault();
            const err = valid(values);
            setErrors(err);
            if(err.name === "" && err.email === ""&& err.age === "" && err.gender === "" && err.mobilenumber === "" && err.address === "" && err.pincode === "" && err.city === "" && err.state === "" && err.country === "" ){
                axios.post('http://localhost:8081/userprofile', values)
                .then(res => {
                    if(res.data === "Error"){
                        alert("Update Failed");
                    }
                    else{
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
            <div className="grid-container">
                <Sidebar />
                <Header />
                <div className="main-container" >
                    <div className="main-title">
                        <h4> Please update the following.</h4>
                    </div>

                    <div class="pb-4">
                        <label className="sc-dCFHLb gxHIdr"> Enter New Username </label>
                        <div className="sc-eeDRCY hapxVj">
                            <div className="sc-koXPp cKXuiA eui-input-container">
                                <div className="sc-cWSHoV dDXBTB">
                                    <input type="name" placeholder={name} name="name"
                                    onChange={handleInput} className="sc-bmzYkS eUhKiq"/>
                                    {errors.name && <span className="text-danger">{errors.name}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pb-4">
                        <label className="sc-dCFHLb gxHIdr"> Enter New Email </label>
                        <div className="sc-eeDRCY hapxVj">
                            <div className="sc-koXPp cKXuiA eui-input-container">
                                <div className="sc-cWSHoV dDXBTB">
                                    <input type="email" placeholder={email} name="email"
                                    onChange={handleInput} className="sc-bmzYkS eUhKiq"/>
                                    {errors.email && <span className="text-danger">{errors.email}</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pb-4">
                        <label className="sc-dCFHLb gxHIdr"> Enter Your Age </label>
                        <div className="sc-eeDRCY hapxVj">
                            <div className="sc-koXPp cKXuiA eui-input-container">
                                <div className="sc-cWSHoV dDXBTB">
                                    <input type="age" placeholder= "Enter your age" name="age"
                                    onChange={handleInput} className="sc-bmzYkS eUhKiq"/>
                                    {errors.age && <span className="text-danger">{errors.age}</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="input sidebar-list-item">
                        <h6><label for="gender">Gender</label></h6>
                        <select name="gender" onChange={handleInput}>
                            <option value="">Please select one…</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="non-binary">Non-binary</option>
                            <option value="other">Other</option>
                            {errors.gender && <span className="text-danger">{errors.gender}</span>}
                        </select>
                    </div>


                    <div class="pb-4">
                        <label className="sc-dCFHLb gxHIdr"> Enter Your Mobile Number </label>
                        <div className="sc-eeDRCY hapxVj">
                            <div className="sc-koXPp cKXuiA eui-input-container">
                                <div className="sc-cWSHoV dDXBTB">
                                    <input type="mobilenumber" placeholder="Enter Your Mobile Number" name="mobilenumber"
                                     onChange={handleInput} className="sc-bmzYkS eUhKiq"/>
                                    {errors.mobilenumber && <span className="text-danger">{errors.mobilenumber}</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pb-4">
                        <label className="sc-dCFHLb gxHIdr"> Enter Your Complete Address </label>
                        <div className="sc-eeDRCY hapxVj">
                            <div className="sc-koXPp cKXuiA eui-input-container">
                                <div className="sc-cWSHoV dDXBTB">
                                    <input type="address" placeholder="Enter Your Address" name="address"
                                     onChange={handleInput} className="sc-bmzYkS eUhKiq"/>
                                     {errors.address && <span className="text-danger">{errors.address}</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pb-4">
                        <label className="sc-dCFHLb gxHIdr">Enter Your Pincode </label>
                        <div className="sc-eeDRCY hapxVj">
                            <div className="sc-koXPp cKXuiA eui-input-container">
                                <div className="sc-cWSHoV dDXBTB">
                                    <input type="pincode" placeholder="Enter Your Pincode" name="pincode"
                                     onChange={handleInput} className="sc-bmzYkS eUhKiq"/>
                                     {errors.pincode && <span className="text-danger">{errors.pincode}</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pb-4">
                        <label className="sc-dCFHLb gxHIdr"> Enter Your City </label>
                        <div className="sc-eeDRCY hapxVj">
                            <div className="sc-koXPp cKXuiA eui-input-container">
                                <div className="sc-cWSHoV dDXBTB">
                                    <input type="city" placeholder="Enter Your City" name="city"
                                     onChange={handleInput} className="sc-bmzYkS eUhKiq"/>
                                     {errors.city && <span className="text-danger">{errors.city}</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pb-4">
                        <label className="sc-dCFHLb gxHIdr"> Enter Your State </label>
                        <div className="sc-eeDRCY hapxVj">
                            <div className="sc-koXPp cKXuiA eui-input-container">
                                <div className="sc-cWSHoV dDXBTB">
                                    <input type="state" placeholder="Enter Your State" name="state"
                                     onChange={handleInput} className="sc-bmzYkS eUhKiq"/>
                                     {errors.state && <span className="text-danger">{errors.state}</span>}
                                </div>  
                            </div>
                        </div>
                    </div>

                    <div class="pb-4">
                        <label className="sc-dCFHLb gxHIdr"> Enter Your Country </label>
                        <div className="sc-eeDRCY hapxVj">
                            <div className="sc-koXPp cKXuiA eui-input-container">
                                <div className="sc-cWSHoV dDXBTB">
                                    <input type="country" placeholder="Enter Your Country" name="country"
                                     onChange={handleInput} className="sc-bmzYkS eUhKiq"/>
                                     {errors.country && <span className="text-danger">{errors.country}</span>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" mt-3 text-center">
                        <button className={!showBtn ? "": "abc"} disabled={!showBtn} type='submit' tabindex="5" color="primary">
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