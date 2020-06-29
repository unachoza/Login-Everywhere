import React, { useState, useEffect, createContext } from 'react';
const context = createContext(null);
const axios = require('axios');

const UserProvider = ({ children }) => {
  console.log(children);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchingFromAPI = async () => {
      try {
        const result = await axios.get('/user');
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
