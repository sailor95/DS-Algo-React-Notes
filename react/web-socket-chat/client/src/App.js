import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import './App.css';

const socket = io('http://localhost:8080');

function App() {
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');

  useEffect(() => {
    const name = prompt("What's your name?");
    socket.emit('new-user', name);

    socket.on('chat-msg', data => {
      setMessages(prev => [
        ...prev,
        {
          from: data.from,
          text: data.text,
        },
      ]);
    });
  }, []);

  const handleSubmit = e => {
    e.preventDefault(); // prevent page refresh

    setMessages(prev => [
      ...prev,
      {
        from: 'Me',
        text: chatInput,
      },
    ]);
    socket.emit('send-msg', chatInput);
    setChatInput('');
  };

  return (
    <div className="App">
      <header className="App-header">
        {messages.map((m, index) => {
          return (
            <div key={index}>
              {m.from}:{m.text}
            </div>
          );
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
