import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import HomeMain from './container/HomeMain';
import SearchHeader from './container/SearchHeader';
import PopularCategories from './container/PopularCategories';
import FirstSlider from './container/FirstSlider';
import SingleCard from './container/SingleCard';
import Menuheader from './components/Menuheader';
import AdvertiseCards from './container/AdvertiseCards';
import Testimonial from './container/Testimonial';
import Recommended from './container/Recommended';
import AboutUs from './container/AboutUs';
import Footer from './container/Footer';
import Bestseller from './container/Bestseller';
import WhyUs from './container/WhyUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* aesha */}
          <Route path="*" element={<Home />} />
          <Route path="/Menuheader" element={<Menuheader />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/HomeMain" element={<HomeMain />} />
          <Route path="/Recommended" element={<Recommended />} />
          <Route path="/WhyUs" element={<WhyUs />} />


          {/* denisha */}
          <Route path="/Searchheader" element={<SearchHeader />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/PopularCategories" element={<PopularCategories />} />

          {/* krupali */}
          <Route path="/Firstslider" element={<FirstSlider />} />
          <Route path="/Singlecard" element={<SingleCard />} />
          <Route path="/Advertisement" element={<AdvertiseCards />} />
          <Route path="/Bestsellers" element={<Bestseller />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
