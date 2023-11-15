import React from "react";

import HomeText from './HomeText';
import NavBar from './NavBar';
const HomePage = () => {
    return (
        <div className="bg-gym1 bg-cover bg-center h-screen">
            <NavBar /> 
            <HomeText/>
        </div>
    );
};

export default HomePage;
