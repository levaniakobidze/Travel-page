
import './App.css';
import About from './pages/About';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Subscribe from './components/Subscribe';
import Services from './pages/Services';
import Trip from './components/Trip';
import Reviws from './pages/Reviws';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

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
     <Blog />
     <Contact />  
    </div>
  );
}

export default App;
