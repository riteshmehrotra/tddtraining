import logo from './logo.svg';
import './App.css';
import Button from './Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button text="Click me" clickLimit={5}></Button>
      </header>
    </div>
  );
}

export default App;
