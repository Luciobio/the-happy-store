import './App.css';
import {useState} from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  let greeting = {message: 'Welcome to Our Store'};

  let countProps = {
    stock: 10,
    initial: 1,
    onAdd: (count) => {
      if(count > 0) setCartCount(current => current + count);
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
