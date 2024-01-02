import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

function Plans() {

    const navigate = useNavigate();
    const [name, setName] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8081')
            .then(res => {
                if (res.data.Status === "Success") {
                    setName(res.data.name);
                    console.log(setName);
                } else {
                    navigate('/Plans');
                }
            })
            .catch(err => { console.log(err) })
    }, [navigate]);

    return (
        <Layout>
            <div className="grid-container">
                <div className="main-container">
                    <div className="main-title">
                        <h3> Your plans </h3>
                    </div>
                    <div className="boom text-center">
                        <span> Looks like you have no plans yet. Create one {name}!! </span>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Plans;