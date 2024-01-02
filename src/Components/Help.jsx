import React from 'react';
import Layout from './Layout';

function Help() {
  return (
    <Layout>
      <div className="grid-container">
        <div className="main-container">
          <div className="main-title">
            <h3> We are here to help you. </h3>
          </div>

          <div className="boom text-center">
            <span> No tickets found. Raise a ticket if you are having any issues. </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Help