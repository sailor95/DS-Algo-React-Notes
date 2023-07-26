import React from 'react';
import { Button } from 'react-bootstrap';

// Use Context here
import { Consumer } from './LangContext';

const MyButton = () => (
  <div className="border border-danger p-2">
    <Consumer>
      {
        value =>
          value === 'eng' ?
            <Button>Submit</Button> :
            <Button>提交</Button>
      }
    </Consumer>
    <p className="m-1">{'(Child: With Context)'}</p>
  </div>
);

export default MyButton;