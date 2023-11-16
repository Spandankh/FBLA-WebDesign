import React from "react";
import TestPng from "../images/gym.png"

const BoxStyle = () => {
    return(
        <div className="w-full py-2 px-4 bg-[#f6f7fa]">
            <div className="max-w-[1240px] mx-auto grid md:grid-col-3 gap-10 bg-">
                <div className="border-2 border-gray-600 w-full shadow-xl  outline-2 flex flex-col p-4 rounded-lg ">
                    <h2 className="text-4xl font-bold text-left pb-auto">Job Postion</h2>
                    <h2 className="text-3xl font-bold text-left">Company Name</h2>
                    <h2 className="text-2xl font-bold text-left">Location,Location</h2>
                    <p class="text-2 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>
                </div>
                <div className="border-2 border-gray-600 w-full shadow-xl  outline-2 flex flex-col p-4 rounded-lg">
                    <h2 className="text-4xl font-bold text-left pb-auto">Job Postion</h2>
                    <h2 className="text-3xl font-bold text-left">Company Name</h2>
                    <h2 className="text-2xl font-bold text-left">Location,Location</h2>
                    <p class="text-2 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>
                </div>
                <div className="border-2 border-gray-600 w-full shadow-xl  outline-2 flex flex-col p-4 rounded-lg">
                    <h2 className="text-4xl font-bold text-left pb-auto">Job Postion</h2>
                    <h2 className="text-3xl font-bold text-left">Company Name</h2>
                    <h2 className="text-2xl font-bold text-left">Location,Location</h2>
                    <p class="text-2 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>
                </div>
            </div>                
        </div>
    )
}

const Career = () => {
    return(
     <div className="text-black font-equinox-sans bg-[#d6d4d4] bg-cover">
        <BoxStyle/>
     </div>   
    )
}
export default Career