// import React from 'react';
import 'Components/DataContainer/DataContainer.styles.css';

// const DataContainer = () => {
//   return (
//     <div>
//       <div className="title">DataContainer Title</div>
//     </div>

//   );
// };
// export default DataContainer;

import React from 'react';

const Terminal = ({ userData, selected }) => {
  const selectedData = selected === 'All' ? userData : userData[selected];
  const removeRaw = (name, val) => (name === '_raw' ? undefined : val);
  let jsonCode;
  userData !== 'none' ? (jsonCode = JSON.stringify(userData, removeRaw, 4)) : (jsonCode = null);

  return (
    <div className="window">
      <div className="title-bar">
        <div className="buttons">
          <div className="mac-btn close" />
          <div className="mac-btn minimize" />
          <div className="mac-btn zoom" />
        </div>
        <p style={{ textAlign: 'right', margin: '5px 10px' }}>json-terminal</p>
      </div>
      <div className="content">
        <pre>{jsonCode}</pre>
      </div>
    </div>
  );
};

export default Terminal;
