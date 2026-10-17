import React from "react";
import PropTypes from "prop-types";

export default function MapCard({ destinations }) {
  const pins = [
    { left: "30%", top: "38%", color: "blue" }, { left: "43%", top: "51%", color: "purple" },
    { left: "56%", top: "50%", color: "green" }, { left: "64%", top: "59%", color: "pink" },
    { left: "69%", top: "69%", color: "orange" }
  ];
  return (
    <div className="map-card">
      <div className="map-water">
        <div className="continent c1"></div><div className="continent c2"></div><div className="continent c3"></div>
        {pins.slice(0, Math.max(2, Math.min(pins.length, destinations.length || 2))).map((p, i) =>
          <span key={i} className={`map-pin ${p.color}`} style={{ left: p.left, top: p.top }}>●</span>
        )}
        <div className="zoom"><button>+</button><button>−</button></div>
        <span className="map-label">⌖ &nbsp; View on Map</span>
      </div>
    </div>
  );
}
MapCard.propTypes = { destinations: PropTypes.array.isRequired };