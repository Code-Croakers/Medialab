import logo from './logo.svg';
import './App.css';
import { PrimaryBtn } from './components/atoms/primaryBtn/Component';
import { Header } from "./components/atoms/header/Component";
import { SubmitBtn } from './components/atoms/submitBtn/Component';
import { TextBubble } from './components/atoms/textBubble/Component';

function App() {
  return (
    <div className="App">
        <Header/>
        <main>
          <SubmitBtn/>
          <PrimaryBtn children='Start nieuwe sessie' />
          <TextBubble children='bitch hello'/>
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
        </main>
    </div>
  );
}

export default App;
