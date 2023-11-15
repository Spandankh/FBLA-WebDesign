import React from "react";

import JoinUsButton from './JoinUsButton';


const HomeText = () => {
    const handleClick = () =>{}
    return(
     <div className="text-white font-equinox-sans ">
        <div className="max-w-auto m-auto w-full h-screen mx-auto text-center flex flex-col justify-center px-8 md:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">RANDOM TEXT TEXT TEXT TEXT</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3.5">RANDOM TEXT TEXT TEXT TEXT</h1>
            <p className="text-xl md:text-2xl lg:text-3xl mt-1 mb-2">SMALLER TEXT TEXT TEXT</p>
            <JoinUsButton />
        </div>
     </div>   
    )
}
export default HomeText