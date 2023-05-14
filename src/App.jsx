import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/NavBar/Navbar';


function App() {
  return (
  <>
  <Navbar />
  

<ItemListContainer/>
<ItemDetailContainer/>

  </>
  );
}

export default App;
