import React from 'react';
import Layout from './Layout';

function Analytics() {
  return (
    <Layout>
      <div className="grid-container">
        <div className="main-container">
          <div className="main-title">
            <h3> Your Analytics </h3>
          </div>

          <div className="boom text-center">
            <span> No analytics yet. Come back after sometime. </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Analytics