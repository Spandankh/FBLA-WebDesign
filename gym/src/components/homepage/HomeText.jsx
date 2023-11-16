import React from "react";
import Typed from 'react-typed';
import { useNavigate } from 'react-router-dom';


const JoinUsButton = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/career');             
    }

    return (
        <div className="">
            <button type="button" className="border-4 border-red-500 text-white py-1.5 px-10 font-semibold uppercase tracking-wider shadow-md hover:bg-red-800 transition duration-300 rounded-full" onClick={handleClick}>
                JOIN US!
            </button>
        </div>
    );
};


const HomeText = () => {
    return(
     <div className="text-white font-equinox-sans ">
        <div className="max-w-auto m-auto w-full h-screen text-center flex flex-col justify-center px-8 md:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold md:py-6 ">RANDOM TEXT TEXT TEXT TEXT</h1>
            <Typed className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3.5" strings={['COOL LOOKING TEXT', 'FBLA GYM FR', "WOW COOL FBLA!"]} typeSpeed={75} backSpeed={70} loop></Typed>
            <JoinUsButton/>
        </div>
     </div>   
    )
}
export default HomeText