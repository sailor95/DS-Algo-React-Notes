import React from 'react';
import { Form, Button, Row, Col, Card, InputGroup } from 'react-bootstrap';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <>
        <Row>
          <Col sm="6">
            <Form onSubmit={this.onFormSubmit}>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter term..."
                  value={this.state.term}
                  onChange={e => this.setState({ term: e.target.value })}
                />
                <InputGroup.Append>
                  <Button type="submit">Search!</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <Card text="dark">
              <Card.Body>
                <Card.Title>Child State</Card.Title>
                <Card.Text>term: {this.state.term}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
};

export default SearchBar;