import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="max-w-auto bg-[#333333] mx-auto h-auto flex items-center justify-between text-white font-equinox-sans">
      <h1 className="w-full text-3xl font-bold px-2">WARIO</h1>
      <ul className="hidden md:flex mr-auto">
        <Link className="p-4" to="/home">
          Home
        </Link>
        <Link className="p-4" to="/mission">
          Mission
        </Link>
        <Link className="p-4" to="/career">
          Careers
        </Link>
        <Link className="p-4" to="/contract">
          Contract
        </Link>
        <Link className="p-4" to="/dashboard">
          DashBoard
        </Link>
      </ul>
      {/*SMALLER NAV BAR */}
      <div className="flex flex-col md:hidden justify-end" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
        }>
        <h1 className="w-full text-3xl font-bold m-4 ">WARIO</h1>
        <ul className="pt-24 uppercase">
          <li className="p-4 border-b border-gray-600">
            <Link to="/home">HOME</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/mission">MISSION</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/career">CAREERS</Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/contract">CONTRACT</Link>
          </li>
          <li className="p-4 border-b border-gray-600"> Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
