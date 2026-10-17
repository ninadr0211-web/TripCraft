import React from "react";
import PropTypes from "prop-types";

export default function BudgetOverview({ total }) {
  const spent = total || 68000;
  const percent = total ? Math.min(100, Math.round((spent / Math.max(spent + 32000, 1)) * 100)) : 68;
  return (
    <section className="budget-overview card">
      <div className="panel-head"><h3>▥ &nbsp; Budget Overview</h3></div>
      <div className="budget-flex">
        <div className="donut" style={{ "--pct": `${percent}%` }}><strong>{percent}%</strong></div>
        <div><small>Spent</small><strong>₹ {spent.toLocaleString("en-IN")}</strong><small>Remaining</small><strong>₹ {Math.max(0, 100000-spent).toLocaleString("en-IN")}</strong></div>
      </div>
    </section>
  );
}
BudgetOverview.propTypes = { total: PropTypes.number.isRequired };