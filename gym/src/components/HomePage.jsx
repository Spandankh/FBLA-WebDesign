import React from "react";

import HomeText from './HomeText';
import NavBar from './NavBar';
const HomePage = () => {
    return (
        <div className="bg-gym2 bg-cover bg-center h-scree m-auto">
            <NavBar /> 
            <HomeText/>
        </div>
    );
};

export default HomePage;
