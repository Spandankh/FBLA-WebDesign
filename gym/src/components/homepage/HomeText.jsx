import React from "react";
import Typed from 'react-typed';
import JoinUsButton from './JoinUsButton';


const HomeText = () => {
    const handleClick = () =>{}
    return(
     <div className="text-white font-equinox-sans ">
        <div className="max-w-auto m-auto w-full h-screen text-center flex flex-col justify-center px-8 md:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold md:py-6 ">RANDOM TEXT TEXT TEXT TEXT</h1>
            <Typed className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3.5" strings={['COOL LOOKING TEXT', 'FBLA GYM FR', "WOW COOL FBLA!"]} typeSpeed={75} backSpeed={70} loop></Typed>
            <JoinUsButton />
        </div>
     </div>   
    )
}
export default HomeText