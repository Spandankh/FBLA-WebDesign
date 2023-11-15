import React from "react";


const JoinUsButton = () => {
    const handleClick = () =>{
            
    }
    return (
        <div className="flex items-center">
            <button type="button" className="bg-[#ea352a] text-white py-1 px-5 font-semibold uppercase tracking-wider shadow-md hover:bg-gray-800 transition duration-300" onClick={handleClick}>
                JOIN US!
            </button>
        </div>
    );
};

export default JoinUsButton;
