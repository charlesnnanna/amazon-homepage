import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';
import '../styles/carousel.css'

const images = [
    {
        src : "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
        alt : "shop-for-toys",
        id : "toys-image",
    },

    {
        src : "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
        alt : "shipping-all-over-the-world",
        id : "shop-image",
    },

    {
        src : "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
        alt : "computers-and-tech",
        id : "computer-image",
    },

    {
        src : "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
        alt : "fashion-and-makeups",
        id : "fashion-image",
    },
]
function Carousel(props) {
    return (
        <div className='absolute z-0 w-full border border-black h-96 overflow-hidden' id = "not-visible">
            <div className='absolute flex justify-center border border-black' id = "left-arrow">
                <ChevronLeftIcon className='w-7'/>
            </div>

            <div className='carousel border border-black absolute  flex-rows flex-nowrap'>
                {
                    images.map((image, index) => {
                        return <img className='w-screen border border-black absolute' id = {image.id} src = {image.src} alt = {image.alt} />
                    })
                }
            </div>

            <div className='absolute flex justify-center border border-black' id = "right-arrow">
                <ChevronRightIcon className='w-7'/>
            </div>
        </div>
    );
}

export default Carousel;