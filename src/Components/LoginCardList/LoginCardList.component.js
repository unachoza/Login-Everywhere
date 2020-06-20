import React from 'react';
import LoginCard from 'Components/LoginCard/LoginCard.component';
import { data } from 'Constants/data';
import 'Components/LoginCardList/LoginCardList.styles.css';

const LoginCardList = () => {
  return (
    <div style={{ height: '100', width: 100 }}>
      <div className="list-title">LoginCardList Title</div>
      {data.map((app) => (
        <LoginCard {...app} key={app.name} />
      ))}
    </div>
  );
};
export default LoginCardList;
