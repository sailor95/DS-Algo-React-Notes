import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import SearchBar from './SearchBar';

class ControlledForm extends React.Component {
  state = {
    receive: ""
  }

  onSearchSubmit = term => {
    this.setState({ receive: term });
  }

  render() {
    return (
      <Container>
        <Row className="mb-3">
          <Col>
            <h1>Form Control</h1>
          </Col>
        </Row>
        <Card>
          <Card.Header>Parent</Card.Header>
          <Card.Body>
            <Row className="mb-3">
              <Col sm="6">
                <Card>
                  <Card.Body>
                    <Card.Title>Parent State</Card.Title>
                    <Card.Text>received: {this.state.receive}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Card bg="dark" text="white">
              <Card.Header>Child</Card.Header>
              <Card.Body>
                <SearchBar onSubmit={this.onSearchSubmit} />
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default ControlledForm;