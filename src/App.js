import React, { useState, useEffect } from 'react';
import './App.css';
import ContactCard from './components/ContactCard';

function App() {
//Array of data
  const contacts = [
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Peter pan",
      email: "peter.pan@anythin.com",
      age: 25
    },
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Paul walker",
      email: "p.walker@anythin.com",
      age: 35 
    },
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "xhaka",
      email: "white.xahka@anythin.com",
      age: 29 
    }]

    const [results, setResults] = useState([]);

    useEffect(()=>{
      fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => { 
        setResults(data.results)
    });
    }, [])
    

  return (
    <div>
      {results.map((result, index)=>{
        return(
          <ContactCard 
          Key={index} 
          avatarUrl={result.picture.large} 
          name={result.name.first} 
          email={result.email} 
          age={result.dob.age} />
        )
      })}
    </div>
  );
}

export default App;
