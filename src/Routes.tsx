import {
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";
import { Home } from './screen/Home';
import  New from './screen/New';

export function AppRoutes() {
  return(
    <Router>
      <Routes>
        <Route path="" element={<New />}/>
        {/* <Route path="" element={<Home />}/> */}
        {/* <Route path="/login" element={<Login />}/>
        <Route  path="/catalog" element={<Catalog />}/>
        <Route  path="/cart" element={<Cart />}/> */}
      </Routes>
    </Router>
  )
}