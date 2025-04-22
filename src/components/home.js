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

function home(props) {
    return (
        <>
        <SearchHeader></SearchHeader>
        {/* <Menuheader></Menuheader> */}
        <FirstSlider></FirstSlider>
        <PopularCategories></PopularCategories>
        <SingleCard></SingleCard>
        <AdvertiseCards></AdvertiseCards>
        <Recommended></Recommended>
        <AboutUs></AboutUs>
        <Bestseller></Bestseller>
        <Testimonial></Testimonial>
        <Footer></Footer>

        </>
    );
}

export default home;