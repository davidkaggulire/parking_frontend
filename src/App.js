import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
