import React from "react";
import PropTypes from "prop-types";
import destinations from "../data/destinations";

export default function Itinerary({ selectedDestinations, selectedActivities, onAddActivity, onRemoveActivity }) {
  return <section className="inner-page">
    <div className="page-heading"><div><span>ITINERARY</span><h1>Plan Your Perfect Trip</h1><p>Add activities and keep every stop organized.</p></div><div className="stat-pill">{selectedActivities.length} activities</div></div>
    {selectedDestinations.length === 0 ? <div className="empty-card">🗺️<h2>Your itinerary is empty</h2><p>Add a destination from Explore first.</p></div> :
      <div className="activity-columns">{selectedDestinations.map((d) => <article className="activity-panel" key={d.id}><div className="activity-head"><span className="large-mini">{d.emoji}</span><div><span className="soft-pill">{d.category}</span><h2>{d.name}</h2></div></div>{d.activities.map((a) => { const added = selectedActivities.some((x) => x.id === a.id); return <div className="activity-row" key={a.id}><div><strong>{a.name}</strong><small>{a.duration} • ₹ {a.cost.toLocaleString("en-IN")}</small></div>{added ? <button className="remove-btn" onClick={() => onRemoveActivity(a.id)}>Remove</button> : <button className="add-btn" onClick={() => onAddActivity(d, a)}>Add</button>}</div>; })}</article>)}</div>}
  </section>;
}
Itinerary.propTypes = { selectedDestinations: PropTypes.array.isRequired, selectedActivities: PropTypes.array.isRequired, onAddActivity: PropTypes.func.isRequired, onRemoveActivity: PropTypes.func.isRequired };