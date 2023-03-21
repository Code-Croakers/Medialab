import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PrimaryBtn } from './components/atoms/primaryBtn/Component';
import { SubmitBtn } from './components/atoms/submitBtn/Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SubmitBtn/>
        <PrimaryBtn children='Start nieuwe sessie' />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
