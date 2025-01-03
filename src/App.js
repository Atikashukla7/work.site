import "./App.css";
import Component2 from "./Component2";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import Customers from "./Customers";
import Gettingstarted from "./Gettingstarted";
import Resources from "./Resources";
import MyNavbar from "./Navbar";

function App() {
  return (
    <div className="App" id="root">
      <MyNavbar />
      
      
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />

        <Route path="/gettingstarted" element={<Gettingstarted />} />

        <Route path="/resources" element={<Resources />} />
        <Route path="/" element={<Component2 />} />
      </Routes>
      
      
      <Footer />
      
       
    </div>
  );
}

export default App;
