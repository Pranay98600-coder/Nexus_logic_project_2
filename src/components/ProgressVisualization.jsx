import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProgressVisualization = () => {
  const data = {
    labels: ["Project 1", "Project 2", "Project 3"],
    datasets: [
      {
        label: "Completion (%)",
        data: [75, 50, 90],
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Project Progress",
      },
    },
  };

  return (
    <div className="card">
      <div className="border">
      <a>Progress Visualization</a></div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProgressVisualization;
