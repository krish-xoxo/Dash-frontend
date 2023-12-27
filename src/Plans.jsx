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
                    <h3> Your plans </h3>
                </div>
                <div className="boom text-center">
                    <span> Looks like you have no plans yet. Create one!! </span>
                </div>
			</div>
        </div>
    )
}

export default Plans;