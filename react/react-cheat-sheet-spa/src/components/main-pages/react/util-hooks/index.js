import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AvoidReRenderDemo from './AvoidReRenderDemo';
import AvoidReRenderFuncDemo from './AvoidReRenderFuncDemo';

const UtilHooks = () => (
  <Container>
    <h1>Avoid Re-render</h1>
    <Row>
      <Col>
        <AvoidReRenderDemo />
      </Col>
    </Row>
    <Row>
      <Col>
        <AvoidReRenderFuncDemo />
      </Col>
    </Row>
  </Container>
);

export default UtilHooks;