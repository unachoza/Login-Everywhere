import React, { useState, useEffect, createContext } from 'react';
const context = createContext(null);
const axios = require('axios');

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchingFromAPI = async () => {
      const result = await axios('/user');
      setUser(result.data);
    };
  }, []);

  return <context.Provider value={user}>{children}</context.Provider>;
};
UserProvider.context = context;
