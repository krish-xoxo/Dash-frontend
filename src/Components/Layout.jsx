import React,{useEffect} from 'react';
import Header from '../Header';
import {
    useLocation
  } from "react-router-dom";
import Sidebar from '../Sidebar';

const Layout = ({ children }) => {
    let location = useLocation();
    useEffect((req,res) => {
        // console.log('aaa', location.pathname)
    })

    const paths = ['/Dash'];
    
    // console.log("message",window.location.pathname);
    
    
    return (
        <>
            {paths.includes(window.location.pathname) ? <div className='grid-container'>
                <Header />
                <Sidebar />
                {children}
            </div> : <div>{children}</div>}
        </>
    )
}

export default Layout