import React from 'react';
import Header from 'Components/Header/Header.component';
import Footer from 'Components/Footer/Footer.component';
import LoginCardList from 'Components/LoginCardList/LoginCardList.component';
import 'Pages/Homepage/Homepage.styles.css';
// import FBLogin from 'Components/FBLogin/FBLogin.component';

const Homepage = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="title">Login Everywhere From Here</div>
      <a href="http://localhost:5000/auth/twitter">Sign in with Twitter</a>
      {/* <FBLogin /> */}
      <LoginCardList />

      <Footer />
    </div>
  );
};
export default Homepage;
