import React from 'react';
import 'Components/LoginCard/LoginCard.styles.css';

const LoginCard = ({ img, name, href, color }) => {
  const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);
  return (
    <div
      className="card"
      style={{ border: `solid ${color}`, borderRadius: 2 }}
      onClick={() => (window.location = href)}
    >
      <div className="login-title">{NAME} LoginCard </div>
      <div style={{ height: 80, width: 80, background: `url("${img}") no-repeat center center / 50% ${color}` }}></div>
    </div>
  );
};
export default LoginCard;
