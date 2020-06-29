import React from 'react';
import 'Components/LoginCard/LoginCard.styles.css';

const LoginCard = ({ img, name, href, color, colors }) => {
  const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);
  console.log('href', href);
  return (
    <div className="card" onClick={() => (window.location = `${href}`)}>
      <div className="login-title">{NAME} </div>
      {name === 'instagram' || name === 'slack' ? (
        <div
          style={{
            borderRadius: '4px',
            height: 150,
            width: 150,
            background: `radial-gradient(circle farthest-corner at 35% 90%, ${colors.leftBot}, transparent 50%),
        radial-gradient(circle farthest-corner at 0 140%, ${colors.leftBot}, transparent 50%),
        radial-gradient(ellipse farthest-corner at 0 -25%, ${colors.leftTop}, transparent 50%),
        radial-gradient(ellipse farthest-corner at 20% -50%, ${colors.leftTop}, transparent 50%),
        radial-gradient(ellipse farthest-corner at 100% 0, ${colors.rightTop}, transparent 50%),
        radial-gradient(ellipse farthest-corner at 60% -20%, ${colors.rightTop}, transparent 50%),
        radial-gradient(ellipse farthest-corner at 100% 100%, ${colors.rightBot}, transparent),
        ${colors.baseCoat}`,
          }}
        >
          <div
            className="image-container"
            style={{
              display: 'flex',
              height: 150,
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={img} style={{ width: '50%' }} alt="instagram" className="btn-icon" />
          </div>
        </div>
      ) : (
        <div
          className="login-button"
          style={{
            borderRadius: '4px',
            height: 150,
            width: 150,
            background: `url("${img}") no-repeat center center / 50% ${color}`,
          }}
        ></div>
      )}
    </div>
  );
};
export default LoginCard;
