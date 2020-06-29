import React from 'react';
import 'Components/LoginCard/LoginCard.styles.css';

const LoginCard = ({ img, name, href, color, colors }) => {
  const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);
  return (
    <div className="card" onClick={() => (window.location = `${href}`)}>
      {name === 'instagram' || name === 'slack' ? (
        <div
          style={{
            borderRadius: '10px',
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
          <div className="login-title">{NAME}</div>

          <div
            className="image-container"
            style={{
              display: 'flex',
              height: 130,
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={img} style={{ width: '50%', float: 'float' }} alt={name} className="btn-icon" />
          </div>
        </div>
      ) : (
        <div
          className="login-button"
          style={{
            borderRadius: '10px',
            height: 150,
            width: 150,
            background: `url("${img}") no-repeat center center / 50% ${color}`,
          }}
        >
          <div className="login-title">{NAME}</div>
        </div>
      )}
    </div>
  );
};
export default LoginCard;
