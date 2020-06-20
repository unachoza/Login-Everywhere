import React from 'react';
import Header from 'Components/Header/Header.component';
import Footer from 'Components/Footer/Footer.component';
import 'Pages/Homepage/Homepage.styles.css';

const Homepage = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="title">Login Everywhere From Here</div>
      <Footer />
    </div>
  );
};
export default Homepage;
