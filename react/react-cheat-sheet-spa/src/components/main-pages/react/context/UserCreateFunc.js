import React from 'react';

import MyFieldFunc from './MyFieldFunc';
import MyButtonFunc from './MyButtonFunc';

const UserCreate = () => {
  return (
    <div className="border border-primary p-2">
      <p>{'(Parent: Without Context)'}</p>
      <MyFieldFunc />
      <MyButtonFunc />
    </div>
  );
}

export default UserCreate;