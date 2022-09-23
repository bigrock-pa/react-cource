import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent.jsx";
import ulComponent from "./components/ulComponent.jsx";

function App() {

  const array = [
    {id: 1, content: 'firstElement'},
    {id: 2, content: 'secondElement'},
    {id: 3, content: 'thirdElement'},
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        
        <ulComponent value={array}>
        </ulComponent>
        
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
