import React, { useState, useEffect, createContext } from 'react';
const context = createContext(null);
const axios = require('axios');

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   console.log('gogoggo detch');
  //   fetch('/user')
  //     .then((res) => res.json())
  //     .then((res) => setUser(res))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    console.log('fetching');
    const fetchingFromAPI = async () => {
      try {
        const result = await axios.get('/user');
        console.log(result);
        setUser(result.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchingFromAPI();
  }, []);

  return <context.Provider value={user}>{children}</context.Provider>;
};

UserProvider.context = context;

export default UserProvider;
