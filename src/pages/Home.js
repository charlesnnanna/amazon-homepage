import React from 'react';
import Carousel from '../components/Carousel';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductScroll from '../components/ProductScroll';

function Home(props) {
    return (
        <>
            <Header/>
            <Carousel/>
            <div className='relative overflow-hidden w-full border border-black flex mt-60 flex-rows'>
                <Category/>
                <Category/>
                <Category/>
                <Category/>
            </div>
            <ProductScroll/>
            <Footer/>
        </>
    );
}

export default Home;