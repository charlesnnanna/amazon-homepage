import { LocationMarkerIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import React from 'react';
import Search from './Search';
import flag from '../images/united.svg';

function TopHeader(props) {
    return (
        <div className='flex flex-rows border border-black bg-bgTopHead p-2 text-white'>
            <div className='border border-white p-2'>
                 <img className='w-28' src = "https://pngshare.com/wp-content/uploads/2021/06/Amazon-Smile-Logo-Vector-7.png"/>
            </div>
            <div className='border border-white flex flex-rows pr-2 pl-2'>
                <LocationMarkerIcon className='w-7 text-white'/>
                <p className='text-xs leading-6'>Delivery to <span className='block leading-3 font-bold text-base'>Nigeria</span></p>
            </div>
            <Search/>
            <div className=' border border-white p-2'>
             <img className='w-11' src = {flag} />
            </div>
            <div className='border border-white p-2'>
                <p className='text-xs leading-6' >Hello, Sign in  <span className='block leading-3 font-bold text-base'>Accounts & Lists</span></p>
            </div>
            <div className='border border-white p-2'>
             <p className='text-xs leading-6'>Returns <span className='block leading-3 font-bold text-base'>& Orders</span></p>
            </div>
            <div className='border border-white p-2  flex flex-rows'>
                <ShoppingCartIcon className='w-10 inline'/>
                <span className='block pt-6 leading-3 font-bold text-base'>Cart</span>
            </div>
        </div>
    );
}

export default TopHeader;
