import React from "react";
import HomePage from "./Pages/HomePage";
import Mission from "./Pages/Mission";
import NoPage from "./Pages/NoPage";
import NavBar from "./components/homepage/NavBar";
import Career from "./Pages/Careers";
import CareerCreate from "./Pages/CareerCreate";
import JobDetails from "./Pages/JobDetails";
import Footer from "./components/Footer";
import Applications from "./Pages/UserDashBoard/applications";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDashBoard from "./Pages/UserDashBoard/UserDashBoard";
import JobPoster from "./Pages/UserDashBoard/JobPoster";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/:id" element={<JobDetails />} />
          <Route path="/contract" element={<CareerCreate />} />

          <Route path="/dashboard" element={<UserDashBoard />}>
            <Route path="applications" element={<Applications />} />
            <Route path="jobposter" element={<JobPoster />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
