import React from 'react';

const UserOption = props => {
  return (
    <option key={props.myKey} value={props.value}>
      {props.content}
    </option>
  );
};

export default UserOption;
