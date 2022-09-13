import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider } from './Context/CartContext';

function App() {
  const [cartNum, setCartNum] = useState(0);

  const onAdd2 = (count) => {
    if (count > 0) setCartNum(cartNum + count);
  }

  return (
    <div className="App">
      <CartProvider>
        <Router>
          <NavBar cartCount={cartNum} />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/detail/:product' element={<ItemDetailContainer onAdd2={onAdd2} />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
};

export default App;
