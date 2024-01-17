import React, { useEffect, useState } from "react";
import { BsSearch, BsJustify } from 'react-icons/bs';
import axios from "axios";

function Header() {

    let profileDropdownList = document.querySelector(".profile-dropdown-list");
    let btn = document.querySelector(".profile-dropdown-btn");

    const toggle = () => {
        profileDropdownList.classList.toggle("active");
        window.addEventListener("click", function (e) {
            if (!btn.contains(e.target)) profileDropdownList.classList.remove("active")
        })
    }

    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [pic, setPic] = useState('');

    axios.defaults.withCredentials = true;

    //TO UPLOAD PROFILE PICTURE
    useEffect(() => {
        axios.get('http://localhost:8081/userdetails')
            .then(res => {
                // console.log(res.data.data);
                if (res.data.Status === "Update True") {
                    if(res.data.data.image === ''){
                        setPic("http://localhost:8081/images/pic.png");    
                    }
                    else{
                    setPic("http://localhost:8081/images/".concat(res.data.data.image));
                    }
                }
                else {
                    return;
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    useEffect(() => {
        axios.get('http://localhost:8081')
            .then(res => {
                if (res.data.Status === "Success") {
                    setName(res.data.name);
                } else {
                    setMessage(res.data.Message);
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
            .then(res => {
                if (res.data.Status === "Success") {
                    window.location.reload(true);
                }
                else {
                    alert("error");
                }
            }).catch(err => console.log(err))
    }

    return (
        <header className='header'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
            <div className="menu-icon">
                <BsJustify className="icon" />
            </div>
            <div className="header-left">
                <BsSearch className="icon" />
            </div>

            <div className="profile-dropdown">
                <div className="profile-dropdown-btn " onClick={toggle}>
                    <div className="profile-img">
                        <img className="profile-img" src={pic}></img>
                        <i className="fa-solid fa-circle"> </i>
                    </div>
                    <span>
                        {/* user */}
                        {name}
                        <i className="fa-solid fa-angle-down"></i>
                    </span>

                    <ul className="profile-dropdown-list">
                        <li className="profile-dropdown-list-item">
                            <a href="/Userprofile">
                                <i className="fa-regular fa-user"></i>
                                Edit Profile
                            </a>
                        </li>

                        <li className="profile-dropdown-list-item">
                            <a href="/Inbox">
                                <i className="fa-regular fa-envelope"></i>
                                Inbox
                            </a>
                        </li>

                        <li className="profile-dropdown-list-item">
                            <a href="/Analytics">
                                <i className="fa-solid fa-chart-line"></i>
                                Analytics
                            </a>
                        </li>

                        <li className="profile-dropdown-list-item">
                            <a href="/Settings">
                                <i className="fa-solid fa-sliders"></i>
                                Settings
                            </a>
                        </li>

                        <li className="profile-dropdown-list-item">
                            <a href="/Help">
                                <i className="fa-regular fa-circle-question"></i>
                                Help & Support
                            </a>
                        </li>
                        <hr />
                        <li className="profile-dropdown-list-item">
                            <a onClick={handleLogout}>
                                <i className="fa-solid fa-arrow-right-from-bracket" ></i>
                                Log Out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    )

}

export default Header;