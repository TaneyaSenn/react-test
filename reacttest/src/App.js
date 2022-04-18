// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const variables for global
  const [items, setItems] = useState([]);

  // functions and hooks

  return (
    <>
    <ItemList items={items} />
    
    
    </>
  )

}

export default App;
