import React from 'react';
import LoginCard from 'Components/LoginCard/LoginCard.component';
import { data } from 'Constants';
import 'Components/LoginCardList/LoginCardList.styles.css';

const LoginCardList = () => {
  return (
    <div>
      <div className="title">LoginCardList Title</div>
      {data.map((app) => (
        <Card {...app} key={app.name} />
      ))}
    </div>
  );
};
export default LoginCardList;
