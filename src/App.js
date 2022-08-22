import './App.css';
import {useState} from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [stock, setStock] = useState(10);

  let greeting = {message: 'Welcome to Our Store'};

  let countProps = {
    stock: stock,
    initial: 1,
    onAdd: (count) => {
      (count > 0)? 
        setStock(current => current - count) : 
        setCartCount(current => current + count);
    }
  };

  return (
    <div className="App">
      <NavBar cartCount = {cartCount}/>
      <ItemListContainer countProps={countProps} greeting={greeting} />
    </div>
  );
};

export default App;
