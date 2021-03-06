import React, { useContext } from 'react';
import UserProvider from 'Contexts/UserProvider';
import Terminal from 'Components/DataContainer/DataContainer.component';
import 'Pages/Profile/Profile.styles.css';
import 'Components/Button/Button.styles.css';
import { Link } from 'react-router-dom';

const Profile = () => {
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
        <div className="title">Discover Your Data</div>
        <Terminal userData={userData} />
      </div>
    </>
  );
};
export default Profile;
