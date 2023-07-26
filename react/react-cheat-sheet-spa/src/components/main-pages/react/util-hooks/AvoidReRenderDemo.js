import React from 'react';
import { Card } from 'react-bootstrap';

import MemoImg from '../../../../res/memo.png';

const Counter = props => (
  <div>
    <h1>{props.count}</h1>
  </div>
);

class Button extends React.Component {
  // Use life-cycle hook to limit the re-render.
  // Only re-render when nextProps changes.
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.padding !== nextProps.padding) {
      return true;
    }
    return false;
  }

  render() {
    const { children, onClick, padding } = this.props;
    return (
      <button onClick={onClick} style={{ padding }}>
        {children}
      </button>
    );
  }
}

class PureButton extends React.PureComponent {
  render() {
    const { children, onClick, padding } = this.props;
    return (
      <button onClick={onClick} style={{ padding }}>
        {children}
      </button>
    );
  }
}

class AvoidReRenderDemo extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Header>
            With "shouldComponentUpdate"
          </Card.Header>
          <Card.Body>
            <Counter count={this.state.count} />
            <Button
              onClick={this.increment}
              padding={8}
            >
              Increment
            </Button>
            <Button
              onClick={this.decrement}
              padding={8}
            >
              Decrement
            </Button>
            <div className="pt-1 pb-1">
              Buttons won't re-render when count changes.
            </div>
          </Card.Body>
        </Card>
        <hr />
        <Card>
          <Card.Header>
            With PureComponent
          </Card.Header>
          <Card.Body>
            <Counter count={this.state.count} />
            <PureButton
              onClick={this.increment}
              padding={8}
            >
              Increment
            </PureButton>
            <PureButton
              onClick={this.decrement}
              padding={8}
            >
              Decrement
            </PureButton>
            <div className="pt-1 pb-1">
              Buttons won't re-render when count changes.
            </div>
          </Card.Body>
        </Card>
        <hr />
        <img src={MemoImg} alt="Memo hooks" width="50%" />
      </div>
    );
  }
}

export default AvoidReRenderDemo;