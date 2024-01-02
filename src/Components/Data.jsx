import { React, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import Layout from './Layout';

function Data() {

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081')
      .then(res => {
        if (res.data.Status === "Success") {
        } else {
          navigate('/Data');
        }
      })
      .catch(err => { console.log(err) })
  }, []);

  return (
    <div className="main-container">
      <div className="main-title">
        <h3> Data Integration .</h3>
      </div>

      <div className="boom text-center">
        <span> No data to integrate yet. Come back after sometime!! </span>
      </div>

    </div>
  )
}

export default Data