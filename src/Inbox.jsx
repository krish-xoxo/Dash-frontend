import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

function Inbox() {
  return (
    <div className="grid-container">
        <Header />
        <Sidebar />
        <div className="main-container">
            <div className="main-title">
                <h3> Your Inbox </h3>
            </div>

            <div className="boom text-center">
                <span> No messages yet. Start a new chat now. </span>
            </div>
        </div>
    </div>
  )
}

export default Inbox