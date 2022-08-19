import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

let message = 'Item List';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={message}/>
    </div>
  );
};

export default App;
