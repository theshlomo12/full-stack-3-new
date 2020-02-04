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
  


  );
}

export default App;
