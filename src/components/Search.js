import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/solid';
import React from 'react';
import "../styles/header.css"


const categories = [
    {
        value : 'all',
        name : 'All categories'
    },

    {
        value : 'automotive',
        name : 'Automotive'
    },

    {
        value : 'baby',
        name : 'Baby'
    },

    {
        value : 'beauty',
        name : 'Beauty and Personal Care'
    },

    {
        value : 'health',
        name : 'Health and Household'
    },
]
function Search(props) {
    return (
        <div className='flex flex-rows'>
            <select name="categories" className='text-gray-600 w-11 bg-gray-200' >
                {
                    categories.map((category, index) => {
                        return <option value={category.value}>{category.name}</option>
                    })
                }
            </select>

            <input type="search" name="search" id='search' className=''/>
            <div className='border border-white p-2 bg-bgSearch '>
                <SearchIcon className='w-7 text-black'/>
            </div>

            
        </div>
    );
}

export default Search;