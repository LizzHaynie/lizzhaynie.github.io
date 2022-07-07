import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import './App.css';
import Home from './components/index';
import ProjectList from './components/projectList';
import Project from './components/projectTemplates/index';
import Header from './components/header'

function App() {

  return (
    <HashRouter>
      <Header />
        
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/projects" element={ <ProjectList /> } />
        <Route path="/projects/:slug" element={ <Project /> } />
      </Routes>
    </HashRouter>

  );
}

export default (App);
