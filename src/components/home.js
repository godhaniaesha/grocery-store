import React from 'react';
import SearchHeader from '../container/SearchHeader';
import Menuheader from './Menuheader';
import FirstSlider from '../container/FirstSlider';
import PopularCategories from '../container/PopularCategories';
import SingleCard from '../container/SingleCard';
import AdvertiseCards from '../container/AdvertiseCards';
import AboutUs from '../container/AboutUs';
import Footer from '../container/Footer';
import Recommended from '../container/Recommended';
import Testimonial from '../container/Testimonial';
import Bestseller from '../container/Bestseller';
import WhyUs from '../container/WhyUs';
import Subscribe from '../container/Subscribe';

function home(props) {
    return (
        <>
        <SearchHeader></SearchHeader>
        {/* <Menuheader></Menuheader> */}
        <FirstSlider></FirstSlider>
        <PopularCategories></PopularCategories>        
        <Bestseller></Bestseller>
        <AdvertiseCards></AdvertiseCards>
        <SingleCard></SingleCard>      
        {/* <AboutUs></AboutUs> */}
        <WhyUs></WhyUs>
        <Recommended></Recommended>        
        <Testimonial></Testimonial>
        <Subscribe></Subscribe>
        
        <Footer></Footer>

        </>
    );
}

export default home;