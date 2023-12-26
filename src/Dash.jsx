import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css'
import Sidebar from './Sidebar'
import Ghar from './Ghar'
import Header from './Header'
import './styles.css'

function Dash() {

  const [auth,setAuth] = useState(false);
  const [message,setMessage] = useState('');
  const [name,setName] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  
	useEffect(() => {
    console.log('calling twice')
		axios.get('http://localhost:8081')
		.then( res => {
			if(res.data.Status === "Success"){
				setAuth(true);
				setName(res.data.name);
			}else{
				setAuth(false);
				setMessage(res.data.Message);
				navigate('/');
			}
		})
		.catch(err => { console.log(err)})
	},[]);

  return (

    <div>
      <div className='grid-container'>
        <Header /> 
        <Sidebar />
        <Ghar />
      </div>
    </div>
  )
}

export default Dash

