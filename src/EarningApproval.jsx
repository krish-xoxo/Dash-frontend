import {React, useEffect} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

function EarningApproval() {

  const navigate = useNavigate();

  useEffect(() => {
		axios.get('http://localhost:8081')
		.then( res => {
			if(res.data.Status === "Success"){
			}else{
				navigate('/EarningApproval');
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
                    <h3> Welcome to your Earning Approval</h3>
                </div>

			</div>
    </div>
  )
}

export default EarningApproval