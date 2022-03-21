
import './App.css';
import About from './pages/About';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Subscribe from './components/Subscribe';
import Services from './pages/Services';
import Trip from './components/Trip';
import Reviws from './pages/Reviws';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <About />
     <Subscribe />
     <Services />
     <Trip />
     <Reviws />
    </div>
  );
}

export default App;
