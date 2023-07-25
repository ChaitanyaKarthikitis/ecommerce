import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart.jsx'
import Shop from './pages/shop/Shop.jsx'
import ShopContextProvider from './context/shop-context';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
     </ShopContextProvider>
    </div>
  );
}

export default App;
