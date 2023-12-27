import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

function Analytics() {
  return (
    <div className="grid-container">
        <Header />
        <Sidebar />
        <div className="main-container">
            <div className="main-title">
                <h3> Your Analytics </h3>
            </div>

            <div className="boom text-center">
                <span> No analytics yet. Come back after sometime. </span>
            </div>
        </div>
    </div>
  )
}

export default Analytics