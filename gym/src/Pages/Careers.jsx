import React from "react";
import BoxStyle from "../components/Careers/CareerBox";

const Career = () => {
  const jobOpening = [{
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
];

  return (
    <div className="text-black font-equinox-sans bg-[#f6f7fa] bg-cover">
        {jobOpening.map((company, index) =>(
            <BoxStyle key={index} jobOpening={company}/>
        ))}
    </div>
  );
};

export default Career;
