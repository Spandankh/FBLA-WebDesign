
const BoxStyle = ({ jobOpening }) => {
    return (
      <div className="w-full py-2 px-4 bg-[#f6f7fa] ">
        <div className="max-w-[1240px] mx-auto grid md:grid-col-3 gap-10">
          <div className="border-2 border-gray-600 w-full shadow-xl  outline-2 flex flex-col p-4 rounded-lg ">
            <h2 className="text-4xl font-bold text-left">{jobOpening.position}</h2>
            <h2 className="text-2xl text-left">{jobOpening.company}</h2>
            <h2 className="text-2xl text-left">{jobOpening.location}</h2>
            {jobOpening.payRange && (
              <div className="bg-gray-200 max-w-fit inline-block pl-2 pr-3 py-2 rounded-sm">  
                <p className="text-md text-left">{jobOpening.payRange}</p>
              </div>)}
            <p className="text-2 font-light line-clamp-3 pb-1.5">{jobOpening.description}</p>
            <div className="">
              <button className="bg-[#164081] text-white max-w-[120px] py-2 px-2 mr-10 whitespace-nowrap font-semibold  tracking-wider hover:bg-[#132c53] transition duration-300 rounded">Apply Now</button>
              <button className="bg-[#16814f] text-white max-w-[120px] py-2 px-2 whitespace-nowrap font-semibold  tracking-wider hover:bg-[#1e4d29] transition duration-300 rounded">View Job</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BoxStyle;
  