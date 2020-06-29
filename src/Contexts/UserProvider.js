import React, { useState, useEffect, createContext } from 'react';
const context = createContext(null);
const axios = require('axios');

const UserProvider = ({ children }) => {
  console.log(children);
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   const fetchingFromAPI = async () => {
  //     try {
  //       const result = await axios.get('/user');
  //       console.log(result, 'please do not be empty');
  //       setUser(result.data);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   fetchingFromAPI();
  // }, []);

  useEffect(() => {
    console.log('fetching');

    fetch('/user')
      .then((res) => res.json())

      .then((res) => setUser(res))
      .catch((err) => {
        console.log(err);
      });
    console.log('please do not be emplty', user);
  }, []);

  return <context.Provider value={user}>{children}</context.Provider>;
};

UserProvider.context = context;

export default UserProvider;
// useEffect(() => {
//   console.log('gogoggo detch');
//   fetch('/user')
//     .then((res) => res.json())
//     .then((res) => setUser(res))
//     .catch((err) => {
//       console.log(err);
//     });
// }, []);
