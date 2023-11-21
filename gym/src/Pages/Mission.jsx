import React, { useEffect, useState } from "react";
import { baseUrl } from "../config";

// Import the CareerBox component if needed

const Mission = () => {
    const [jobOpenings, setJobOpening] = useState([]);
    useEffect(() => {
        const fetchJobOpenings = async () => {
            const response = await fetch(`${baseUrl}/job`);
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
        <>
                {jobOpenings.map((job) => (
                    <p>{job.company}</p>
                ))}
        </>
    );
};

export default Mission;
