import React from 'react';

const UserInput = props => {

  let userInput;
  if (props.type === 'select') {
    userInput = (
      <select {...props}>
        {props.children}
      </select>
    );
  } else userInput = <input {...props} />;

  return (
    <div className={props.className}>
      {userInput}
    </div>
  );
};

export default UserInput;
