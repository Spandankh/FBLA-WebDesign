import React from "react";

import JoinUsButton from './JoinUsButton';


const HomeText = () => {
    const handleClick = () =>{}
    return(
     <div className="text-white font-equinox-sans ">
        <div className="max-w[500px] mt-[-40px] w-full h-screen mx-auto text-left flex flex-col justify-center px-8">
            <h1 className="text-2xl font-bold">RANDOM TEXT TEXT TEXT TEXT</h1>
            <h1 className="text-2xl font-bold">RANDOM TEXT TEXT TEXT TEXT</h1>
            <p className="text-xs mt-6 mb-4">SAMLLER TEXT TEXT TEXT</p>
            <JoinUsButton/>
        </div>
     </div>   
    )
}
export default HomeText