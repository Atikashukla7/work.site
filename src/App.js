
import './App.css';
import Component2 from './Component2';
import Footer from './Footer';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App" id='root'>
      <Navbar/>
      <main>
        <Component2 />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
