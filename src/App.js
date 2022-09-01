import './App.css';
import {useState} from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  let countProps = {
    stock: 10,
    initial: 1,
    onAdd: (count) => {
      if(count > 0) setCartCount(cartCount + count);
    }
  };

  return (
    <div className="App">
      <NavBar cartCount = {cartCount}/>
      <ItemListContainer />
      <ItemDetailContainer countProps={countProps}/>
    </div>
  );
};

export default App;
