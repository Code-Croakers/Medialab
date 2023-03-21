import logo from './logo.svg';
import './App.css';
import { PrimaryBtn } from './components/atoms/primaryBtn/Component';
import { Header } from "./components/atoms/header/Component";
import { SubmitBtn } from './components/atoms/submitBtn/Component';
import { LinkSubject } from './components/atoms/linkSubject/Component';
import { TextBubble } from './components/atoms/textBubble/Component';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LinkSubject children="klik om meerdere onderwerpen te genereren" />
        <SubmitBtn />
        <PrimaryBtn children='Start nieuwe sessie' />
        <div>
          <TextBubble children='bitch hello' sender='app' />
          <TextBubble 
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum." 
            sender='user' />
        </div>
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
