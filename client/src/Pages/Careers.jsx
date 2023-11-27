import React, { useEffect, useState } from "react";
import BoxStyle from "../components/Careers/CareerBox";
import SearchBar from "../components/Careers/CareerSearch";
import { baseUrl } from "../config";

const Career = () => {
  /* const jobOpening = [{
    company:"Example Company",
    position:  "Software Engineer",
    location: "New York",
    description: "Conubia mus praesent viverra primis. Sit ipsum sapien condimentum cursus non. Porta cursus, dictumst sagittis morbi feugiat ullamcorper euismod. Urna gravida habitant fringilla sagittis interdum bibendum mi. Maecenas tincidunt tempus ultricies morbi suscipit platea ridiculus egestas placerat rutrum? Ac volutpat mi primis fusce phasellus netus sociis aliquet viverra posuere! Mollis fermentum justo sem nullam et adipiscing augue imperdiet curae; ipsum cursus dictum! Curae; dictumst bibendum molestie, congue.",
  },
  {
    company:"Example Company",
    position:  "Software Engineer",
    location: "New York",
    description: "Conubia mus praesent viverra primis. Sit ipsum sapien condimentum cursus non. Porta cursus, dictumst sagittis morbi feugiat ullamcorper euismod. Urna gravida habitant fringilla sagittis interdum bibendum mi. Maecenas tincidunt tempus ultricies morbi suscipit platea ridiculus egestas placerat rutrum? Ac volutpat mi primis fusce phasellus netus sociis aliquet viverra posuere! Mollis fermentum justo sem nullam et adipiscing augue imperdiet curae; ipsum cursus dictum! Curae; dictumst bibendum molestie, congue.",
  },
  {
    company:"Example Company",
    position:  "Software Engineer",
    location: "New York",
    description: "Conubia mus praesent viverra primis. Sit ipsum sapien condimentum cursus non. Porta cursus, dictumst sagittis morbi feugiat ullamcorper euismod. Urna gravida habitant fringilla sagittis interdum bibendum mi. Maecenas tincidunt tempus ultricies morbi suscipit platea ridiculus egestas placerat rutrum? Ac volutpat mi primis fusce phasellus netus sociis aliquet viverra posuere! Mollis fermentum justo sem nullam et adipiscing augue imperdiet curae; ipsum cursus dictum! Curae; dictumst bibendum molestie, congue.",
  },
  {
    company:"Example Company",
    position:  "Software Engineer",
    location: "New York",
    description: "Conubia mus praesent viverra primis. Sit ipsum sapien condimentum cursus non. Porta cursus, dictumst sagittis morbi feugiat ullamcorper euismod. Urna gravida habitant fringilla sagittis interdum bibendum mi. Maecenas tincidunt tempus ultricies morbi suscipit platea ridiculus egestas placerat rutrum? Ac volutpat mi primis fusce phasellus netus sociis aliquet viverra posuere! Mollis fermentum justo sem nullam et adipiscing augue imperdiet curae; ipsum cursus dictum! Curae; dictumst bibendum molestie, congue.",
  },
  {
    company:"Example Company",
    position:  "Software Engineer",
    location: "New York",
    description: "Conubia mus praesent viverra primis. Sit ipsum sapien condimentum cursus non. Porta cursus, dictumst sagittis morbi feugiat ullamcorper euismod. Urna gravida habitant fringilla sagittis interdum bibendum mi. Maecenas tincidunt tempus ultricies morbi suscipit platea ridiculus egestas placerat rutrum? Ac volutpat mi primis fusce phasellus netus sociis aliquet viverra posuere! Mollis fermentum justo sem nullam et adipiscing augue imperdiet curae; ipsum cursus dictum! Curae; dictumst bibendum molestie, congue.",
  },
  {
    company:"Example Company",
    position:  "Software Engineer",
    location: "New York",
    description: "Conubia mus praesent viverra primis. Sit ipsum sapien condimentum cursus non. Porta cursus, dictumst sagittis morbi feugiat ullamcorper euismod. Urna gravida habitant fringilla sagittis interdum bibendum mi. Maecenas tincidunt tempus ultricies morbi suscipit platea ridiculus egestas placerat rutrum? Ac volutpat mi primis fusce phasellus netus sociis aliquet viverra posuere! Mollis fermentum justo sem nullam et adipiscing augue imperdiet curae; ipsum cursus dictum! Curae; dictumst bibendum molestie, congue.",
  },
  {
    company:"Example Company",
    position:  "Software Engineer",
    location: "New York",
    description: "Conubia mus praesent viverra primis. Sit ipsum sapien condimentum cursus non. Porta cursus, dictumst sagittis morbi feugiat ullamcorper euismod. Urna gravida habitant fringilla sagittis interdum bibendum mi. Maecenas tincidunt tempus ultricies morbi suscipit platea ridiculus egestas placerat rutrum? Ac volutpat mi primis fusce phasellus netus sociis aliquet viverra posuere! Mollis fermentum justo sem nullam et adipiscing augue imperdiet curae; ipsum cursus dictum! Curae; dictumst bibendum molestie, congue.",
  },
]; */

  const [jobOpenings, setJobOpening] = useState([]);
  useEffect(() => {
    const fetchJobOpenings = async () => {
      try {
        const response = await fetch(`${baseUrl}/job`);
        if (response.ok) {
          const data = await response.json();
          setJobOpening(data);
        } else {
          throw new Error("Failed to fetch job openings");
        }
      } catch (error) {
        throw new Error("Failed to fetch job openings", error);
      }
    };

    fetchJobOpenings();
  }, []);
  return (
    <div className="text-black font-equinox-sans bg-[#e6e6e5] bg-cover">
      <SearchBar />
      {jobOpenings.map((company, index) => (
        <BoxStyle key={index} jobOpening={company} />
      ))}
    </div>
  );
};

export default Career;
