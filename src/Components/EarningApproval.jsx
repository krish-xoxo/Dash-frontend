import { React, useEffect } from 'react';
import Layout from './Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

function EarningApproval() {

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081')
      .then(res => {
        if (res.data.Status === "Success") {
        } else {
          navigate('/EarningApproval');
        }
      })
      .catch(err => { console.log(err) })
  }, []);

  return (
    <Layout>
      <div className="grid-container">
        <div className="main-container">
          <div className="main-title">
            <h3> Your Earning Approval</h3>
          </div>

          <div className="boom text-center">
            <span> No approval required yet. Come back after sometime! </span>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default EarningApproval