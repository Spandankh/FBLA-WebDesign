import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
    const[nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="max-w-auto mx-auto px-4 py-.5 h-24 flex items-center justify-between text-white font-equinox-sans">
                <h1 className="w-full text-3xl font-bold">WARIO</h1>
                <ul className="hidden md:flex">
                    <li className="p-4 ">Home</li>
                    <li className="p-4 ">Mission</li>
                    <li className="p-4">Careers</li>
                    <li className="p-4">Contract</li>
                    <li className="p-4">Settings</li>
                </ul>
            {/*SMALLER NAV BAR */}
            <div className='flex md:hidden justify-end' onClick={handleNav}>
                {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}>
                <h1 className="w-full text-3xl font-bold m-4 ">WARIO</h1>
                <ul className="pt-24 uppercase">
                    <li className="p-4 border-b border-gray-600 ">Home</li>
                    <li className="p-4 border-b border-gray-600">Mission</li>
                    <li className="p-4 border-b border-gray-600">Careers</li>
                    <li className="p-4 border-b border-gray-600">Contract</li>
                    <li className="p-4">Settings</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
