import {
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";
import { Catalog } from "./screen/Catalog";
import { Cart } from './screen/Cart';
import { Login } from "./screen/Login";
import { Home } from './screen/Home';

export function AppRoutes() {
  return(
    <Router>
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route  path="/catalog" element={<Catalog />}/>
        <Route  path="/cart" element={<Cart />}/>
      </Routes>
    </Router>
  )
}