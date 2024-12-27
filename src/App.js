import "./App.css";
import Component2 from "./Component2";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {
  Routes,
  Route,
} from "react-router-dom";
import Products from "./Products";
import Customers from "./Customers";
import Gettingstarted from "./Gettingstarted";
import Resources from "./Resources";


function App() {
  
  return (
    <div className="App" id="root">
     <Navbar/>
      <Routes>
        <Route path="/products" element={<Products />} /> 
        <Route path="/customers" element={<Customers />} /> 
        <Route path="/gettingstarted" element={<Gettingstarted />} /> 
        <Route path="/resources" element={<Resources />} /> 
        
      </Routes>
      <main>
        <Component2 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
