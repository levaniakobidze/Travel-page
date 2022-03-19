
import './App.css';
import About from './pages/About';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Subscribe from './components/Subscribe';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <About />
     <Subscribe />
     <Services />
    </div>
  );
}

export default App;
