import './App.css';
import ContactCard from './components/ContactCard';

function App() {

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

  return (
    <div>
      {contacts.map((contact, index)=>{
        return(
          <ContactCard Key={index}
          avatarUrl={contact.avatarUrl}
          name={contact.name}
          email={contact.email}
          age={contact.age} 
      />
        )
      })}
    </div>
  );
}

export default App;
