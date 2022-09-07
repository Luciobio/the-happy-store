import './App.css';
import {useState} from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      <Router>
        <NavBar cartCount = {cartCount}/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:category' element={<ItemListContainer />}/>
          <Route path='/detail/:product' element={<ItemDetailContainer countProps={countProps}/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
