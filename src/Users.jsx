import {React,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Users(){
    
    const navigate = useNavigate();

    useEffect(() => {
		axios.get('http://localhost:8081')
		.then( res => {
			if(res.data.Status === "Success"){
			}else{
				navigate('/Users');
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
                    <h3> Users</h3>
                </div>
                <div className="boom text-center">
                <span> No users added. Add users to see details. </span>
            </div>
			</div>
        </div>
    )
}

export default Users;