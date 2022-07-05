import React from 'react';
import { MenuIcon } from '@heroicons/react/solid'


const navigation = [
    { name : "All", button: "true" },
    { name : "Today's Deal", button: "false" },
    { name : "Customer Service", button: "false"},
    { name : "Registry", button: "false" },
    { name : "Gift Cards", button: "false" },
    { name : "Sell", button: "false" }
]
function BottomHeader(props) {
    return (
        <div className='flex flex-rows border border-black '>
            {
                navigation.map((navigation, index) => {
                    return <div className='flex flex-rows border border-black'>
                            {navigation.button === 'true' ? <MenuIcon/> : "" }{navigation.name}
                         </div> 
                })
            }
        </div>
    );
}

export default BottomHeader;