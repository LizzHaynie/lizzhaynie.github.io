import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/index';
import ProjectList from './components/projectList';
import SkeletonLoaders from './components/projectTemplates/skeletonLoaders';

function App() {
  return (
    <Router>
      <div className="header-container">
        <div className="header-links header-left-links">Welcome</div>
        <div className="right-link-container">
          <Link to="/" className="header-links header-right-links">Home</Link>
          <Link to="/projects" className="header-links header-right-links">Projects</Link>
        </div>
      </div>
        
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/projects" element={ <ProjectList /> } />
        <Route path="/projects/skeleton-loaders" element={ <SkeletonLoaders /> } />
      </Routes>
    </Router>

  );
}

export default App;
