import React from "react";

const TaskTracking = () => {
  const tasks = [
    { name: "Task 1", description: "Design mockup", deadline: "2024-01-20", status: "In Progress" },
    { name: "Task 2", description: "Database setup", deadline: "2024-01-25", status: "Pending" },
  ];

  return (
    <div className="card">
      <div className="border">
      <a>Task Tracking</a></div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.deadline}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTracking;
