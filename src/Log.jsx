import {React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import axios from 'axios';
import Sidebar from './Sidebar';
import Header from './Header';

function Log() {

  const navigate = useNavigate();

  useEffect(() => {
		axios.get('http://localhost:8081')
		.then( res => {
			if(res.data.Status === "Success"){
			}else{
				navigate('/Log');
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
                    <h3> Welcome to Logs</h3>
                </div>

			</div>
    </div>
  )
}

export default Log