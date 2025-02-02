import React from "react";

const BudgetMonitoring = () => {
  const sales = 50000;
  const budget = 80000;
  const expenses = 30000;

  return (
    <div className="card">
      <div className="border">
      <a>Budget Monitoring</a></div>
      <p>Total Sales: ${sales}</p>
      <p>Total Budget: ${budget}</p>
      <p>Total Expenses: ${expenses}</p>
    </div>
  );
};

export default BudgetMonitoring;
