import React from 'react';
import SearchHeader from '../container/SearchHeader';
import Menuheader from './Menuheader';
import FirstSlider from '../container/FirstSlider';
import PopularCategories from '../container/PopularCategories';
import SingleCard from '../container/SingleCard';

function home(props) {
    return (
        <>
        <SearchHeader></SearchHeader>
        <Menuheader></Menuheader>
        <FirstSlider></FirstSlider>
        <PopularCategories></PopularCategories>
        <SingleCard></SingleCard>

        </>
    );
}

export default home;