import { useEffect } from "react";
import { useState } from "react";
import { baseUrl } from "../config";


// https://pastebin.com/raw/xdLmcpTU
const CareerCreate = () => {
  const [company, setCompanyName] = useState();
  const [companyPosition, setPosition] = useState();
  const [companLocation, setLocation] = useState();
  const [companyDescription, setDescription] = useState();
  const [payRange, setPayRange] = useState();

  const handleSumbit = async (event) =>{
    event.preventDefault()
    try{
      const response = await fetch(`${baseUrl}/job`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "company": company,
          "position": companyPosition,
          "location": companLocation,
          "description": companyDescription,
          "payRange": payRange,
        })
      })
      if(response.ok) {
        alert('Job posted');
        // Reset form fields after successful submission (if needed)
        setCompanyName('');
        setPosition('');
        setLocation('');
        setDescription('');
        setPayRange('');
      } else {
        // Handle other cases if needed
        console.log('Job posting failed');
      }
    } catch (erorr){
      console.log("Got error ", erorr)
    }
  }
  return(
      <div className="py-2 mx-auto flex flex-col max-w-lg">
        <form className="border-2 border-gray-300 shadow-xl outline-1 flex flex-col justify-start gap-2 px-2 py-2 rounded-lg" onSubmit={handleSumbit}>
          <p className="flex border-b-2 border-black">Job Creator</p>
          <label className="text-md">Company Name</label>
          <input onChange={e => setCompanyName(e.target.value)} className="bg-gray-300 border border-gray-300 rounded-md focus:bg-white"/>
          <label className="text-md" htmlFor="companyName">Job Postion</label>
          <input onChange={e => setPosition(e.target.value)} className="bg-gray-300 border border-gray-300 rounded-md focus:bg-white"/>
          <label className="text-md" htmlFor="companyName">Job Location</label>
          <input onChange={e => setLocation(e.target.value)} className="bg-gray-300 border border-gray-300 rounded-md focus:bg-white"/>
          <label className="text-md" htmlFor="companyName">Job Description</label>
          <textarea onChange={e => setDescription(e.target.value)} className="bg-gray-300 border border-gray-300 rounded-md focus:bg-white"/>
          <label className="text-md" htmlFor="companyName">Pay Range</label>
          <input onChange={e => setPayRange(e.target.value)} className="bg-gray-300 border border-gray-300 rounded-md focus:bg-white"/>
        
          <button className="bg-blue-700 font-bold border border-slate-300 text-white rounded-md" onSubmit={handleSumbit} type="sumbit">Sumbit</button>
        </form>
      </div>
  );
};

export default CareerCreate;
