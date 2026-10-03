import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/feed";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root URL to /feed or /create-post */}
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} /> 
      </Routes>
    </Router>
  );
}

export default App;