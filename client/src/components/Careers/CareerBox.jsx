import { Link } from "react-router-dom";
import { IoCashOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { BiBuildingHouse } from "react-icons/bi";
import { IoTimerOutline } from "react-icons/io5";
import { AiFillClockCircle } from "react-icons/ai";

const BoxStyle = ({ jobOpening }) => {
  return (
    <div className="w-full py-2 px-4 bg-[#e6e6e5] ">
      <div className="max-w-[1240px] mx-auto grid md:grid-col-3 gap-10">
        <div className="border-2 border-gray-600 w-full shadow-xl  outline-2 flex flex-col p-4 rounded-lg bg-[#f6f7fa]">
          <h2 className="text-4xl font-bold text-left">
            {jobOpening.position}
          </h2>
          <h2 className="text-2xl text-left">
            <BiBuildingHouse className="inline-block mr-1" />
            {jobOpening.company}
          </h2>
          <h2 className="text-2xl text-left">
            <GrLocation className="inline-block mr-1" />
            {jobOpening.location}
          </h2>

          <p className="text-2xl text-left flex items-center">
            {jobOpening.payRange && (
              <>
                <IoCashOutline className="inline-block mr-1" />
                {jobOpening.payRange}
              </>
            )}
            {jobOpening.payRange && <AiFillClockCircle className="ml-2" />}
          </p>

          <h2 className="text-1xl font-light line-clamp-5 pb-1.5">
            {jobOpening.description}
          </h2>
          <div className="">
            <Link
              onClick={alert}
              className="bg-[#164081] text-white max-w-[120px] py-2 px-2 mr-10 whitespace-nowrap font-semibold  tracking-wider hover:bg-[#132c53] transition duration-300 rounded">
              Apply Now
            </Link>
            <Link
              to={`/career/${jobOpening._id}`}
              className="bg-[#16814f] text-white max-w-[120px] py-2 px-2 whitespace-nowrap font-semibold  tracking-wider hover:bg-[#1e4d29] transition duration-300 rounded">
              View Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxStyle;
