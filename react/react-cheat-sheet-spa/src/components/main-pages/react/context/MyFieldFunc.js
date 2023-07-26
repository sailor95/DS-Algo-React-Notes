import React from 'react';
import { Form } from 'react-bootstrap';

// Use Context here
import { Consumer } from './LangContext';

const MyField = () => (
  <Form className="mb-2 border border-danger p-2">
    <Consumer>
      {
        value =>
          value === 'eng' ?
            <Form.Label>Name</Form.Label> :
            <Form.Label>名稱</Form.Label>
      }
    </Consumer>
    <Form.Control type="text" placeholder="Enter Input" />
    <p className="m-1">{'(Child: With Context)'}</p>
  </Form>
);

export default MyField;