import { React, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

function Settings() {

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8081')
            .then(res => {
                if (res.data.Status === "Success") {
                } else {
                    navigate('/Settings');
                }
            })
            .catch(err => { console.log(err) })
    }, []);

    return (
        <Layout>
            <div className="grid-container">
                <div className="main-container">
                    <div className="main-title">
                        <h3> Settings</h3>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Settings;