import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

//schema 
import person from './model/Person';

const App = () => {

  useEffect(()=>{
    console.log(greeter('rony'));
    console.log(greeterWithSchema({name: 'rushhour3'}))

  });

  return (
    <div className="App">
      Hi
    </div>
  );

  function greeter(Movie:string):number{
    console.log(`Hi ${Movie}`);
    return Movie.length;
  }

  function greeterWithSchema(movie:Movie): string {
    return `Hi ${Movie.name}`
  }
  

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
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
