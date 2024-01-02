import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/App.css'
import Ghar from './Ghar'
import '../css/styles.css'
// import Layout from './Layout';
import Sidebar from '../Sidebar';
import Header from '../Header';

function Dash() {

  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:8081')
      .then(res => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          setMessage(res.data.Message);
          navigate('/');
        }
      })
      .catch(err => { console.log(err) })
  }, []);

  return (
    // <Layout>
      <div>
        <div className='grid-container'>
          <Sidebar />
          <Header />
          <Ghar />
        </div>
      </div>
    // </Layout>
  )
}

export default Dash

