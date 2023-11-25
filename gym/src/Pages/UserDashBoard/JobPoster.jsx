import { useState } from "react";
import { baseUrl } from "../../config";

const JobPoster = () => {
  const [company, setCompanyName] = useState();
  const [companyPosition, setPosition] = useState();
  const [companLocation, setLocation] = useState();
  const [companyDescription, setDescription] = useState();
  const [payRange, setPayRange] = useState();

  const handleSumbit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/job`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: company,
          position: companyPosition,
          location: companLocation,
          description: companyDescription,
          payRange: payRange,
        }),
      });
      if (response.ok) {
        alert("Job posted");
        // Reset form fields after successful submission (if needed)
        setCompanyName("");
        setPosition("");
        setLocation("");
        setDescription("");
        setPayRange("");
      } else {
        // Handle other cases if needed
        console.log("Job posting failed");
      }
    } catch (erorr) {
      console.log("Got error ", erorr);
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <div className="py-2 px-10 flex flex-col mx-auto min-h-screen w-[800px] ">
        <form
          className="border-2 border-gray-300 shadow-xl outline-1 flex flex-col gap-2 px-2 py-2 rounded-lg"
          onSubmit={handleSumbit}>
          <p className="flex border-b-2 border-black text-3xl">Job Creator</p>
          <label className="text-md">Company Name</label>
          <input
            onChange={(e) => setCompanyName(e.target.value)}
            className="bg-gray-300 border border-gray-300 rounded-md focus:bg-white"
          />
          <label className="text-md" htmlFor="companyName">
            Job Postion
          </label>
          <input
            onChange={(e) => setPosition(e.target.value)}
            className="bg-gray-300 border border-gray-300 rounded-md focus:bg-white"
          />
          <label className="text-md" htmlFor="companyName">
            Job Location
          </label>
          <input
            onChange={(e) => setLocation(e.target.value)}
            className="bg-gray-300 border border-gray-300 rounded-md focus:bg-white"
          />
          <label className="text-md" htmlFor="companyName">
            Job Description
          </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-300 border border-gray-300 rounded-md focus:bg-white"
          />
          <label className="text-md" htmlFor="companyName">
            Pay Range
          </label>
          <input
            onChange={(e) => setPayRange(e.target.value)}
            className="bg-gray-300 border border-gray-300 rounded-md focus:bg-white"
          />

          <button
            className="bg-blue-700 font-bold border border-slate-300 text-white rounded-md"
            onSubmit={handleSumbit}
            type="sumbit">
            Sumbit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobPoster;
