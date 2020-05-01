import React from 'react';

import './UserInput.css';

const UserInput = props => {

  let userInput;
  if (props.type === 'select') {
    userInput = (
      <select {...props}>
        {props.children}
      </select>
    );
  } else {
    userInput = <input {...props} />
  };

  return (
    <div className="UserInput">
      {userInput}
    </div>
  );
};

export default UserInput;
