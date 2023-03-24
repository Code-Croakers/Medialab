import './App.css';
import { Header } from './components/atoms/header/Component';
import { Hero } from './components/molecules/hero/Component';
import { FormComponent } from './components/molecules/formComponent/Component';
import { ChatBox } from './components/molecules/chatBox/Component';


function App() {
  return (
    <div className="App">
      <div className='Navbar'>
        <Header />
        <Hero variant='success'/>
      </div>
      <main>

        <ChatBox />
        <FormComponent/>
      </main>
    </div>
  );
}

export default App;
