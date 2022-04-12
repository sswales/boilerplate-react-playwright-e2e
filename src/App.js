import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo" />
        <p>
          Use this boilerplate package to e2e test your React app.
        </p>
        <a className="App-link" href="https://github.com/sswales/boilerplate-react-playwright-e2e" target="_blank">
          E2E Boilerplate for React
        </a>
      </header>
    </div>
  );
}

export default App;
