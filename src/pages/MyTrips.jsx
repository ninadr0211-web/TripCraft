import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MyTrips({ selectedDestinations, onRemoveDestination }) {
  return <section className="inner-page">
    <div className="page-heading"><div><span>MY TRIPS</span><h1>My Travel Collection</h1><p>Everything you selected for your next adventure.</p></div><Link to="/" className="blue-btn">+ Explore</Link></div>
    {selectedDestinations.length === 0 ? <div className="empty-card">🌍<h2>No destinations yet</h2><p>Go to Explore and add places to your trip.</p><Link to="/" className="blue-btn">Explore Destinations</Link></div> :
      <div className="pretty-list">{selectedDestinations.map((d) => <article className="trip-card-large" key={d.id}><div className={`large-emoji ${d.color}`}>{d.emoji}</div><div><span className="soft-pill">{d.category}</span><h2>{d.name}, {d.country}</h2><p>{d.description}</p></div><div className="large-cost"><strong>₹ {d.cost.toLocaleString("en-IN")}</strong><button onClick={() => onRemoveDestination(d.id)}>Remove</button></div></article>)}</div>}
  </section>;
}
MyTrips.propTypes = { selectedDestinations: PropTypes.array.isRequired, onRemoveDestination: PropTypes.func.isRequired };