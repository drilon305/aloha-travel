import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import './index.css';
import Destinations from './components/destinations/Destinations';
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
import ImgCarousel from './components/caoursel/ImgCarousel';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className='App'>
    <Navbar />
    <Hero />
    <Destinations />
    <Search />
    <Selects />
    <ImgCarousel />
    <Footer />
    </div>
  );
}

export default App;
