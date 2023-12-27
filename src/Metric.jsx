import {React, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import Header from './Header';
import Sidebar from './Sidebar';

function Metric() {

  const navigate = useNavigate();

  useEffect(() => {
		axios.get('http://localhost:8081')
		.then( res => {
			if(res.data.Status === "Success"){
			}else{
				navigate('/Metric');
			}
		})
		.catch(err => { console.log(err)})
	},[]);

  return (
    <div className="grid-container">
            <Header />
            <Sidebar />
            <div className="main-container">
                <div className="main-title">
                    <h3> Metric .</h3>
                </div>

                <div className="boom text-center">
                    <span> No metrices to show. Create one !!</span>
                </div>

			      </div>
    </div>
  )
}

export default Metric