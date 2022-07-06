import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/index';
import ProjectList from './components/projectList';
import Project from './components/projectTemplates/index';
import Header from './components/header'

function App() {

  return (
    <Router>
      <Header />
        
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/projects" element={ <ProjectList /> } />
        <Route path="/projects/:slug" element={ <Project /> } />
      </Routes>
    </Router>

  );
}

export default (App);
