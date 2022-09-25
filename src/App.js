import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent.jsx";
import UlComponent from "./components/UlComponent.jsx";
import MyInput from "./components/MyInput.jsx";
import React, { useState, useEffect } from 'react';

function App() {

const list = [
  "firstElement",
  "secondElement",
  "thirdElement"
];

  const [searchList, setSearchList] = useState();
  const handleChange = event => {
    setSearchList(event.target.value);
  };

  const results = !searchList
    ? list
    : list.filter(person =>
        person.toLowerCase().includes(searchList.toLocaleLowerCase())
      );
      
      useEffect(() => {
        if (searchList) {
        document.title = `${searchList}`;  
      }
      else {
        document.title = `useEffect hook example`;  
      }
      })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      
      <MyInput placeholder="Поиск" value={searchList} onChange={handleChange} />

      <UlComponent value={results}>
      </UlComponent>

      <MyComponent />

            </header>
    </div>
  );
}

export default App;
