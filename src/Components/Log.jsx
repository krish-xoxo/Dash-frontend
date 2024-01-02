import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import axios from 'axios';
import Layout from './Layout';

function Log() {

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081')
      .then(res => {
        if (res.data.Status === "Success") {
        } else {
          navigate('/Log');
        }
      })
      .catch(err => { console.log(err) })
  }, []);


  return (
    <Layout>
      <div className="grid-container">
        <div className="main-container">
          <div className="main-title">
            <h3> Your Logs</h3>
          </div>
          <div className="boom text-center">
            <span> No logs yet. Create one !! </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Log