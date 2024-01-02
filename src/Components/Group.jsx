import { React, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import Layout from './Layout';

function Group() {

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081')
      .then(res => {
        if (res.data.Status === "Success") {
        } else {
          navigate('/Group');
        }
      })
      .catch(err => { console.log(err) })
  }, []);

  return (
    <Layout>
      <div className="grid-container">
        <div className="main-container">
          <div className="main-title">
            <h3> Active Groups.</h3>
          </div>

          <div className="boom text-center">
            <span> No groups yet. Go and create one!! </span>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Group