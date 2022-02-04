import contactsJSON from "./contacts.json";
import "./App.css";
import { useState } from "react";
import trophy from "./logo.svg";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={()=>{
        const randomContact=contactsJSON[Math.floor(Math.random()*contactsJSON.length)];

        setContacts(
          prev=>{
            
            return [...prev,randomContact];
          }
        );
      }}>Add Random Contact</button>
     
      <button
      onClick={()=>{
        const sortedContacts= contacts.sort(
          (a,b)=>{
            if(a.popularity<b.popularity){
              return -1;
            }
            if(a.popularity>b.popularity){
              return 1;
            }
            return 0;
          }
        );

        setContacts([...sortedContacts]);
      }}
      >
        Sort by popularity
      </button>
     
      <button
      onClick={()=>{
        const sortedContacts= contacts.sort(
          (a,b)=>{
            if(a.name<b.name){
              return -1;
            }
            if(a.name>b.name){
              return 1;
            }
            return 0;
          }
        );
        setContacts([...sortedContacts]);
      }}
      >
        Sort by name
      </button>
      
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            const { name, pictureUrl, popularity, id, wonOscar, wonEmmy } =
              contact;
            return (
              <tr key={id}>
                <td>
                  <img src={pictureUrl} alt={name} />
                </td>
                <td>{name}</td>
                <td>{popularity}</td>
                <td>{wonOscar && <img src={trophy} />}</td>
                <td>{wonEmmy && <img src={trophy} />}</td>
                <td>
                  <button
                   onClick={()=>{
                     setContacts(prev=>prev.filter(element=>element.id!==id));
                   }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
