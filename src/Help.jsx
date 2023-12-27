import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

function Help() {
  return (
    <div className="grid-container">
        <Header />
        <Sidebar />
        <div className="main-container">
            <div className="main-title">
                <h3> We are here to help you. </h3>
            </div>

            <div className="boom text-center">
                <span> No tickets found. Raise a ticket if you are having any issues. </span>
            </div>
        </div>
    </div>
  )
}

export default Help