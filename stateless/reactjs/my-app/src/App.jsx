import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login Page (ReactJS)</h2>
      <form onSubmit={handleSubmit}>
        Username: <input value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <input type="submit" value="Login" />
      </form>
      {submitted && <p>Welcome, {username}!</p>}
    </div>
  );
}

export default App;
