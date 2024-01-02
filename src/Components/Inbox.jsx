import React from 'react';
import Layout from './Layout';

function Inbox() {
  return (
    <Layout>
      <div className="grid-container">
        <div className="main-container">
          <div className="main-title">
            <h3> Your Inbox </h3>
          </div>

          <div className="boom text-center">
            <span> No messages yet. Start a new chat now. </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Inbox