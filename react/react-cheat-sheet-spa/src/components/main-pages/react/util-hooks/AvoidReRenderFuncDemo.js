import React, { useState, memo, useCallback } from 'react';
import { Card } from 'react-bootstrap';

const Counter = ({ count }) => (
  <div>
    <h1>{count}</h1>
  </div>
);

const Button = memo(({ children, onClick, padding }) => (
  <button onClick={onClick} style={{ padding }}>
    {children}
  </button>
));

const AvoidReRenderFunctDemo = () => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);

  const setIncrementMemo = useCallback(() => setCount(count + 1), [count]);
  const setDecrementMemo = useCallback(() => setCount(count - 1), [count]);

  return (
    <div>
      <Card className="mt-3">
        <Card.Header>
          Memo with hook
      </Card.Header>
        <Card.Body>
          <Counter count={count} />
          <Button onClick={setIncrementMemo} padding={8}>
            Increment
          </Button>
          <Button onClick={setDecrementMemo} padding={8}>
            Decrement
      </Button>
        </Card.Body>
      </Card>
      <hr />
      <Card className="mt-3">
        <Card.Header>
          No Memo
      </Card.Header>
        <Card.Body>
          <Counter count={anotherCount} />
          <Button onClick={() => setAnotherCount(anotherCount + 1)} padding={8}>
            Increment
          </Button>
          <Button onClick={() => setAnotherCount(anotherCount - 1)} padding={8}>
            Decrement
      </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AvoidReRenderFunctDemo;