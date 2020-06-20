import React from 'react';
import 'Components/LoginCard/LoginCard.styles.css';

const LoginCard = ({ img, name, href, color }) => {
  const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);
  return (
    <div
      className="Card"
      style={{ border: `solid ${color}`, borderRadius: 2 }}
      onClick={() => (window.location = href)}
    >
      <div className="title">{NAME} LoginCard </div>
      <div
        style={{ height: 200, width: 200, background: `url("${img}") no-repeat center center / 50% ${color}` }}
      ></div>
    </div>
  );
};
export default LoginCard;
