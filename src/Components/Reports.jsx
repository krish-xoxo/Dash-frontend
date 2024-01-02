import { React, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import Layout from './Layout';

function Reports() {

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081')
      .then(res => {
        if (res.data.Status === "Success") {
        } else {
          navigate('/Reports');
        }
      })
      .catch(err => { console.log(err) })
  }, []);

  return (
    <Layout>
      <div className="grid-container">
        <div className="main-container">
          <div className="main-title">
            <h3> Reports</h3>
          </div>

          <div className="boom text-center">
            <span> Looks like you have no reports ready yet. Create one!! </span>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Reports