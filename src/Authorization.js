import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const withAuthorization = (OriginalComponent) => {
  return function WithAuthorization(props) {
    const [currentUserRole, setCurrentUserRole] = useState('');

    axios.defaults.withCredentials = true;

    useEffect(() => {
      axios.get('http://localhost:8081')
        .then(res => {
          if (res.data.Status === "Success") {
            setCurrentUserRole("Success");
          } else {
            setCurrentUserRole(''); 
          }
        })
        .catch(err => {
          console.log(err);
          setCurrentUserRole(''); 
        });
    }, []);

    return (
      currentUserRole !== 'Success' ? null : <OriginalComponent {...props} />
    );
  };
};
