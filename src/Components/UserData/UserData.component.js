import React from 'react';
import 'Components/UserData/UserData.styles.css';

const UserData = ({ userData, selected }) => {
  const selectedData = selected === 'all' ? userData : userData[selected];
  return (
    <div>
      <div className="title">UserData Title</div>
      <div className="content">{selectedData}</div>
    </div>
  );
};
export default UserData;
