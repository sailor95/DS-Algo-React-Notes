import { useState } from 'react';

import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault(); // prevent page refresh
    setMessages([...messages, chatInput]);
    setChatInput('');
  };

  return (
    <div className="App">
      <header className="App-header">
        {messages.map((m, index) => {
          return <div key={index}>{m}</div>;
        })}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={chatInput}
            onChange={e => setChatInput(e.target.value)}
          />
        </form>
      </header>
    </div>
  );
}

export default App;
