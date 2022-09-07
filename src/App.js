import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import './index.css';
import Destinations from './components/destinations/Destinations';

function App() {

  return (
    <div className='App'>
    <Navbar />
    <Hero />
    <Destinations />
    </div>
  );
}

export default App;
