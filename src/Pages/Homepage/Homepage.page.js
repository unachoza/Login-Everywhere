import React from 'react';
import LoginCardList from 'Components/LoginCardList/LoginCardList.component';
import 'Pages/Homepage/Homepage.styles.css';

const Homepage = () => {
  return (
    <div className="app-container">
      <div className="title" style={{ color: 'white' }}>
        Login Everywhere From Here
      </div>
      <LoginCardList />
    </div>
  );
};
export default Homepage;
