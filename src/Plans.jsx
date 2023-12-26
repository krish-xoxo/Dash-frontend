import {React,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Plans(){

    const navigate = useNavigate();

    useEffect(() => {
		axios.get('http://localhost:8081')
		.then( res => {
			if(res.data.Status === "Success"){
			}else{
				navigate('/Plans');
			}
		})
		.catch(err => { console.log(err)})
	},[]);


    return(
        <div className="grid-container">
            <Header />
            <Sidebar />
            <div className="main-container">
                <div className="main-title">
                    <h3> Welcome to your plans.</h3>
                </div>

			</div>
        </div>
    )
}

export default Plans;