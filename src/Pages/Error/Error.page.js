import React, { useContext } from 'react';
import UserProvider from 'Contexts/UserProvider';
import Terminal from 'Components/DataContainer/DataContainer.component';
import 'Pages/Profile/Profile.styles.css';
import 'Components/Button/Button.styles.css';
import { Link } from 'react-router-dom';

const Error = () => {
  const userData = useContext(UserProvider.context);
  console.log(userData);
  return (
    <>
      <div className="nav-buttons">
        <Link to="/">
          <button>Return Home & Log Out</button>
        </Link>
      </div>
      <div className="container">
        <div className="title">Error with your Data</div>
        <Terminal userData="none" />
      </div>
    </>
  );
};
export default Error;
