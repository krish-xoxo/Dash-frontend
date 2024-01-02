// import React, {useEffect, useState} from "react";
// import axios from "axios";
// import {Link, useNavigate} from "react-router-dom";
// import './styles.css';

// function Home(){
// 	const [name,setName] = useState('')
// 	const [auth,setAuth] = useState(false)
// 	const [message,setMessage] = useState('')

// 	const navigate = useNavigate();
	// axios.defaults.withCredentials = true;
	// useEffect(() => {
	// 	axios.get('http://localhost:8081')
	// 	.then( res => {
	// 		if(res.data.Status === "Success"){
	// 			setAuth(true);
	// 			setName(res.data.name);
	// 		 	navigate('/Dash')
	// 		}else{
	// 			setAuth(false);
	// 			setMessage(res.data.Message);
	// 		 	//navigate('/')
	// 		}
	// 	})
	// 	.catch(err => {
	// 		console.log(err)
	// 	})
	// },[]);

// 	const handleLogout = () => {
// 		axios.get('http://localhost:8081/logout')
// 		.then( res => {
// 			if(res.data.Status === "Success"){
// 				window.location.reload(true);
// 			}
// 			else{
// 				alert("error");
// 			}
// 		}).catch(err => console.log(err))
// 	}
// 	return (
// 		<div className="back d-flex justify-content-center align-items-center bg-primary vh-100">
// 			<div className="bg-white bg-primary p-4 rounded xyz">
	 		// {
			// 		auth ?
			// 		<div>
			// 			<h3 className="pb-4"> Welcome, {name} !!</h3>
			// 			<button className="abc" onClick={handleLogout}> Logout</button>
						
			// 		</div>
			// 		:	
			// 		<div>
			// 			<h3>{message}</h3>
			// 			<h3>Login Now</h3>
			// 			<Link to='/' className="xyz">Login</Link>
			// 		</div>
			// }
// 			</div>
// 		</div>
// 	)	
// }

// export default Home;
