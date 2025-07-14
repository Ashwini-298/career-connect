import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import UploadPage from "./pages/UploadPage";
import Login from "./pages/Login";
import CandidateDashboard from "./pages/CandidateDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs/:id" element={<JobDetail />} />

        <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
