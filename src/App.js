import './App.css';
import Header from './components/Header/Header';
import Brands from './components/Customers/Brands';
import Testimonials from './components/Testimonials/Testimonials';
import Feactures from './components/Feactures/Feactures'
import Footer from './components/Footer/Footer'
import BannerCTA from './components/BannerCTA/BannerCTA';


function App() {
  return (
    <>
    <div className="">
      <Header />
      <Brands />
      <Testimonials />
      <Feactures />
      <BannerCTA />
      <Footer />
    </div>
      
    </>
  );
}

export default App;
