// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import BlogPost from "./components/BlogPost";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // Simulated authentication state
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        
        {/* Protected Route with Nested Routes */}
        <Route 
          path="profile" 
          element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Profile />} />}
        >
          <Route path="details" element={<ProfileDetails />} />
        </Route>
        
        {/* Dynamic Routing for Blog Posts */}
        <Route path="blog/:id" element={<BlogPost />} />
        
        {/* Public Route for Login */}
        <Route path="login" element={<Login />} />
        
        {/* Catch-All Route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
