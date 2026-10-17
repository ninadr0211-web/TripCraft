import React from "react";
import PropTypes from "prop-types";

export default function DestinationRow({ destination, selected, onAdd, onRemove }) {
  return (
    <div className="destination-row">
      <span className={`pin ${destination.color}`}>●</span>
      <div className="row-name"><strong>{destination.name}</strong><small>{destination.country}</small></div>
      <strong className="row-price">₹ {destination.cost.toLocaleString("en-IN")}</strong>
      {selected
        ? <button className="round-btn" onClick={() => onRemove(destination.id)}>×</button>
        : <button className="round-btn" onClick={() => onAdd(destination)}>›</button>}
    </div>
  );
}
DestinationRow.propTypes = {
  destination: PropTypes.object.isRequired, selected: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired, onRemove: PropTypes.func.isRequired
};