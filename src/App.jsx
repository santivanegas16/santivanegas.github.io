import Navbar from './components/navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Proyect from './pages/Proyect';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Proyect />
      <Contact />
      
    </>
  )
}