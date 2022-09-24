import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent.jsx";
import UlComponent from "./components/UlComponent.jsx";

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
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        
        <UlComponent value={array}>
        </UlComponent>
        
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
