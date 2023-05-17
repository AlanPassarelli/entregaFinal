import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';

function App() {
  return (
  <>
 
  <BrowserRouter>
  <Navbar />
  <Routes>

    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
    <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>


  </Routes>
  
  
  </BrowserRouter>

  </>
  );
}

export default App;
