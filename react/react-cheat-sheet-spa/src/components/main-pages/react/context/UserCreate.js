import React from 'react';

import MyField from './MyField';
import MyButton from './MyButton';

const UserCreate = () => {
  return (
    <div className="border border-primary p-2">
      <p>{'(Parent: Without Context)'}</p>
      <MyField />
      <MyButton />
    </div>
  );
}

export default UserCreate;