import {
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";
import { Home } from './screen/Home';

export function AppRoutes() {
  return(
    <Router>
      <Routes>
        <Route path="" element={<Home />}/>
        {/* <Route path="/login" element={<Login />}/>
        <Route  path="/catalog" element={<Catalog />}/>
        <Route  path="/cart" element={<Cart />}/> */}
      </Routes>
    </Router>
  )
}