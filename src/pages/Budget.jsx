import React from "react";
import PropTypes from "prop-types";

export default function Budget({ selectedDestinations, selectedActivities, total }) {
  const destinationTotal = selectedDestinations.reduce((s, x) => s + x.cost, 0);
  const activityTotal = selectedActivities.reduce((s, x) => s + x.cost, 0);
  return <section className="inner-page">
    <div className="page-heading"><div><span>BUDGET PLANNER</span><h1>Your Trip Budget</h1><p>Costs update automatically whenever your itinerary changes.</p></div><div className="total-big">₹ {total.toLocaleString("en-IN")}</div></div>
    <div className="budget-cards"><div><small>Destination Cost</small><strong>₹ {destinationTotal.toLocaleString("en-IN")}</strong></div><div><small>Activities</small><strong>₹ {activityTotal.toLocaleString("en-IN")}</strong></div><div className="highlight"><small>Estimated Total</small><strong>₹ {total.toLocaleString("en-IN")}</strong></div></div>
    <div className="cost-panels"><div className="card cost-panel"><h2>Destinations</h2>{selectedDestinations.length ? selectedDestinations.map(d => <div className="cost-line" key={d.id}><span>{d.emoji} {d.name}</span><b>₹ {d.cost.toLocaleString("en-IN")}</b></div>) : <p className="muted">No destinations selected.</p>}</div><div className="card cost-panel"><h2>Activities</h2>{selectedActivities.length ? selectedActivities.map(a => <div className="cost-line" key={a.id}><span>{a.name}<small> {a.destinationName}</small></span><b>₹ {a.cost.toLocaleString("en-IN")}</b></div>) : <p className="muted">No activities selected.</p>}</div></div>
    <div className="hots"><span>HOTS / CASE ANALYSIS</span><h2>How TripCraft keeps the itinerary and budget consistent</h2><p>Selected destinations and activities are stored in shared state in App.jsx. Removing an activity updates that shared state, and the budget total is derived from the current state with useMemo. The Budget page receives the same current data through props, so the removed activity and its cost disappear together.</p></div>
  </section>;
}
Budget.propTypes = { selectedDestinations: PropTypes.array.isRequired, selectedActivities: PropTypes.array.isRequired, total: PropTypes.number.isRequired };