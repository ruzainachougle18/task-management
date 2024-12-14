import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/homePage";
import Login from "./user authentication/login";
import Register from "./user authentication/Register";
import VisualHighlights from "./components/Features";
import PricingSection from "./components/Pricing";
import AboutSection from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./pages/footer";
import { TaskProvider } from "./context/TaskContext";
import GetStarted from "./pages/GetStarted";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // State for sidebar

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);  // Toggle sidebar open/close
  };

  return (
    <Router>
      <TaskProvider>
        <Header handleSidebarToggle={handleSidebarToggle} />
        
        {/* Sidebar, open/close based on state */}
        <Navbar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/features" element={<VisualHighlights />} />
          <Route path="/pricing" element={<PricingSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contactform" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
        <Footer />
      </TaskProvider>
    </Router>
  );
}

export default App;
