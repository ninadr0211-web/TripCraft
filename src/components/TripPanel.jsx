import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function TripPanel({ destinations, onRemove, total }) {
  return (
    <section className="trip-panel card">
      <div className="panel-head"><h3>▣ &nbsp; My Trip</h3><Link to="/trips">View All →</Link></div>
      {destinations.length === 0 ? <p className="muted">Add destinations to build your trip.</p> :
        destinations.map((item, index) => (
          <div className="mini-trip" key={item.id}>
            <span className={`dot ${["teal","green","pink","orange","yellow"][index % 5]}`}></span>
            <div><strong>{item.name}, {item.country}</strong><small>{index === 0 ? "12 Nov – 16 Nov 2026" : "20 Nov – 24 Nov 2026"}</small></div>
            <button onClick={() => onRemove(item.id)}>×</button>
          </div>
        ))}
      <div className="trip-total"><span>Total Cost</span><strong>₹ {total.toLocaleString("en-IN")}</strong></div>
      <Link className="gradient-btn" to="/itinerary">View Itinerary →</Link>
    </section>
  );
}
TripPanel.propTypes = { destinations: PropTypes.array.isRequired, onRemove: PropTypes.func.isRequired, total: PropTypes.number.isRequired };