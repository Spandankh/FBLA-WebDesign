import { baseUrl } from "../config";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const [jobOpening, setJobOpening] = useState([]);
  useEffect(() => {
    const fetchJobOpenings = async () => {
      const response = await fetch(`${baseUrl}/job/${id}`);
      if (response.ok) {
        const data = await response.json();
        setJobOpening(data);
      } else {
        console.error("Failed to fetch job openings");
      }
    };

    fetchJobOpenings();
  }, []);
  return (
    <div>
      <h2 className="text-4xl font-bold text-left">{jobOpening.position}</h2>
      <h2 className="text-2xl text-left">{jobOpening.company}</h2>
      <h2 className="text-2xl text-left">{jobOpening.location}</h2>
      {jobOpening.payRange && (
        <div className="bg-gray-200 max-w-fit inline-block pl-2 pr-3 py-2 rounded-sm">
          <p className="text-md text-left">{jobOpening.payRange}</p>
        </div>
      )}
      <div className="text-2 font-light pb-1.5">
        {jobOpening &&
          jobOpening.description &&
          jobOpening.description
            .split("\n")
            .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
    </div>
  );
};

export default JobDetails;
