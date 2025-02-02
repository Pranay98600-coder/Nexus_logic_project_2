import React from "react";
import ProjectOverview from "./components/ProjectOverview.jsx";
import TaskTracking from "./components/TaskTracking.jsx";
import ProgressVisualization from "./components/ProgressVisualization.jsx";
import BudgetMonitoring from "./components/BudgetMonitoring.jsx";
import "./App.css";

const App = () => {
  return (
    <><div className="title"> 
    <div className="title_name">
      <a>Project Management Dashboard</a></div>
    </div>
    <div className="dashboard">
        <div className="section">
          <ProjectOverview />
          <TaskTracking />
        </div>
        
          <div className="section">
          <ProgressVisualization /></div>
          <div className="section">
          <BudgetMonitoring />
          </div>
          
      </div></>
  );
};

export default App;
