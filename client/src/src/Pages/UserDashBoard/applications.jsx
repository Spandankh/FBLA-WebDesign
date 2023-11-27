import React from "react";

const Applications = () => {
  // Sample data for demonstration purposes
  const jobApplications = [
    { Name: 1, title: "Software Engineer", company: "ABC Inc." },
    { Name: 2, title: "Marketing Specialist", company: "XYZ Corp." },
    // Add more application data as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <h1 className="text-black text-bold text-3xl px-3 py-2">
        Job Applications
      </h1>
      <div className="w-full px-4 py-4 border rounded-lg bg-white overflow-y-auto">
        {/* Display job applications */}
        {jobApplications.map((application) => (
          <div key={application.id} className="my-3 px-4 py-2 border-b">
            <h2 className="font-semibold">{application.title}</h2>
            <p>{application.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
