import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
export default function App(){return <div className="app"><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/products" element={<Products/>}/><Route path="/cart" element={<Cart/>}/><Route path="*" element={<Home/>}/></Routes></main><footer>NovaShop • React assignment</footer></div>}
