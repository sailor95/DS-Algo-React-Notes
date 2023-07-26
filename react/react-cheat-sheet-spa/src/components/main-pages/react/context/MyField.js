import React from 'react';
import { Form } from 'react-bootstrap';

// Use Context here
import LangContext from './LangContext';

class MyField extends React.Component {
  // Use Context here
  static contextType = LangContext;

  render() {
    // Use Context here
    const text = this.context === 'eng' ? 'Name' : '名稱';
    return (
      <Form className="mb-2 border border-danger p-2">
        <Form.Label>{text}</Form.Label>
        <Form.Control type="text" placeholder="Enter Input" />
        <p className="m-1">{'(Child: With Context)'}</p>
      </Form>
    );
  }
};

export default MyField;