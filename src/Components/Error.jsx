import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

function Error() {
  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <div className="error">
        <h1>Error 404 - Page Not Found</h1>
        <p>Sorry, check the URL once again.</p>
      </div>
    </div>
  )
}

export default Error