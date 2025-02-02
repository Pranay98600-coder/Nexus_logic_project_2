import React from "react";

const ProjectOverview = () => {
  const projects = [
    { name: "Project A", startDate: "2024-01-01", endDate: "2024-03-01", status: "In Progress" },
    { name: "Project B", startDate: "2024-01-15", endDate: "2024-04-15", status: "Not Started" },
  ];

  return (
    <div className="card">
      <div className="border">
      <a>Project Overview</a></div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.startDate}</td>
              <td>{project.endDate}</td>
              <td>{project.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectOverview;
