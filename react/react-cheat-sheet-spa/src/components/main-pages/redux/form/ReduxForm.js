import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import BaseForm from './BaseForm';
import FormContainer from './FormContainer';
import reduxFormFlowPic from '../../../../res/reduxFormDiagram.png'

class ReduxForm extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <h1>Redux Form</h1>
          </Col>
          <Col sm={12} className="mt-4 mb-4 p-0">
            <img src={reduxFormFlowPic} alt="Redux Form Flow" width="450px" />
          </Col >
          <Col sm={12}>
            <h3>Base Form</h3>
          </Col>
          <Col sm={6}>
            <BaseForm
              form="base-form"
              disabled={false}
              onSubmit={data => console.log("Submit:", data)}
            />
          </Col>
          <Col sm={12}>
            <h3>Form Container</h3>
          </Col>
          <Col sm={6}>
            <FormContainer formId="redux-form" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReduxForm;