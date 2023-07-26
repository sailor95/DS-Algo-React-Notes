import React from 'react';
import { Button } from 'react-bootstrap';

// Use Context here
import LangContext from './LangContext';

class MyButton extends React.Component {
  // Use Context here
  static contextType = LangContext;

  render() {
    // Use Context here
    const text = this.context === 'eng' ? 'Submit' : '提交';
    return (
      <div className="border border-danger p-2">
        <Button>
          {text}
        </Button>
        <p className="m-1">{'(Child: With Context)'}</p>
      </div>
    );
  }
};

export default MyButton;