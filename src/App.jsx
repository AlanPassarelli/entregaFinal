import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './Components/Cart/Cart';

function App() {
  return (
  <>
 
  <BrowserRouter>

  <CarritoProvider>
  <Navbar />
  <Routes>

    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
    <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
    <Route path='/cart' element = { <Cart/> } />
    <Route path='*' element={<h2>Sitio en Construcción</h2>} />


  </Routes>
  </CarritoProvider>
  
  
  
  </BrowserRouter>

  </>
  );
}

export default App;
