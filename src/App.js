import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import CartContainter from './Components/CartContainer/CartContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';

function App() {

  return (
    <div className="App">
      <CartProvider>
        <Router>
          <NavBar cartCount={0} />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer/>} />
            <Route path='/detail/:product' element={<ItemDetailContainer/>} />
            <Route path='cart' element={<CartContainter/>}/>
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
};

export default App;
