import React from 'react';
import 'Components/LoginCard/LoginCard.styles.css';

const LoginCard = ({ img, name, href, color }) => {
  const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);
  return (
    <div className="card" onClick={() => (window.location = `${href}`)}>
      <div className="login-title">{NAME} </div>
      <div
        className="login-button"
        style={{
          borderRadius: '4px',
          height: 150,
          width: 150,
          background: `url("${img}") no-repeat center center / 50% ${color}`,
        }}
      ></div>
    </div>
  );
};
export default LoginCard;
