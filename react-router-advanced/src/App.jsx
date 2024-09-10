
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
  
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        
       
        <Route path="profile" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Profile />} />}>
          <Route path="details" element={<ProfileDetails />} />
        </Route>
        
       
        <Route path="blog/:id" element={<BlogPost />} />
        
      
        <Route path="login" element={<Login />} />
        
       
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
