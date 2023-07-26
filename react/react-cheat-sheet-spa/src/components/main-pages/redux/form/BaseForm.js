import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap'
import { reduxForm, Field } from 'redux-form';

const renderFormControl = ({
  input,
  disabled,
  type,
  value,
  placeholder
}) => {
  return (
    <Form.Control
      {...input}
      disabled={disabled}
      type={type}
      placeholder={placeholder}
      value={value}
    />
  );
}

const BaseForm = props => {
  console.log(props);

  const [data, setData] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit(data);
  }

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup className="mb-3">
        <Field
          name="input"
          disabled={props.disabled}
          type="text"
          placeholder="Input data..."
          onChange={e => setData(e.target.value)}
          component={renderFormControl}
        />
        <InputGroup.Append>
          <Button
            disabled={props.disabled}
            type="submit"
          >
            Submit!
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default reduxForm({
  // The actual form name will be passed as 'formId' from parent
  form: ""
})(BaseForm);