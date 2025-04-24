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
import Subscribe from './container/Subscribe';
import Shop from './container/Shop';

import ProductDetail from './container/ProductDetail';
import SimilarProduct from './container/SimilarProduct';
import Cart from './container/Cart';
import Wishlist from './components/Wishlist';
import ContactUs from './container/ContactUs';
import CheckOut from './container/CheckOut';
import CustomCursor from './components/CustomCursor';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import MyAccount from './components/MyAccount';
import Order from './container/Order';
import Register from './container/Register';
function App() {
  return (
   <>
   
    <BrowserRouter>
          <CustomCursor />
    <SearchHeader></SearchHeader>
      <Routes>
        {/* aesha */}
        <Route path="*" element={<Home />} />
        <Route path="/Menuheader" element={<Menuheader />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/HomeMain" element={<HomeMain />} />
        <Route path="/Recommended" element={<Recommended />} />        
        <Route path="/WhyUs" element={<WhyUs />} />
        <Route path="/Subscribe" element={<Subscribe />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/CheckOut" element={<CheckOut />} />



        {/* denisha */}
        <Route path="/Searchheader" element={<SearchHeader />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/PopularCategories" element={<PopularCategories />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/SimilarProduct" element={<SimilarProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/Order" element={<Order />} />


        {/* krupali */}
        <Route path="/Firstslider" element={<FirstSlider />} />
        <Route path="/Singlecard" element={<SingleCard />} />
        <Route path="/Advertisement" element={<AdvertiseCards />} />
        <Route path="/Bestsellers" element={<Bestseller />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
   </>
  );
}

export default App;
