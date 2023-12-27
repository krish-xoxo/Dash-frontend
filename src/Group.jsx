import {React, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import Sidebar from './Sidebar';
import Header from './Header';

function Group() {

  const navigate = useNavigate();

  useEffect(() => {
		axios.get('http://localhost:8081')
		.then( res => {
			if(res.data.Status === "Success"){
			}else{
				navigate('/Group');
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
                    <h3> Welcome to Groups.</h3>
                </div>

			</div>
    </div>
  )
}

export default Group