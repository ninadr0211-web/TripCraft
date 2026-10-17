import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import destinations from "../data/destinations";
import DestinationRow from "../components/DestinationRow";
import TripPanel from "../components/TripPanel";
import MapCard from "../components/MapCard";
import BudgetOverview from "../components/BudgetOverview";
import { Link } from "react-router-dom";

export default function Explore({ selectedDestinations, onAddDestination, onRemoveDestination, total }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=13.08&longitude=80.27&current=temperature_2m&timezone=auto")
      .then((r) => r.json()).then((d) => setTemperature(d.current?.temperature_2m ?? null)).catch(() => {});
  }, []);

  const categories = ["All", ...new Set(destinations.map((d) => d.category))];
  const filtered = useMemo(() => destinations.filter((d) =>
    (category === "All" || d.category === category) &&
    (!query || `${d.name} ${d.country}`.toLowerCase().includes(query.toLowerCase()))
  ), [query, category]);

  return (
    <div>
      <section className="welcome">
        <div><h1>Explore Dream <span>Destinations</span></h1><p>Plan your trip, discover new places and create unforgettable memories ✨</p></div>
        {temperature !== null && <div className="weather-chip">☀ {temperature}°C &nbsp; Chennai</div>}
      </section>

      <div className="category-tabs">
        {categories.map((c) => <button key={c} className={category === c ? "chosen" : ""} onClick={() => setCategory(c)}>{c}</button>)}
      </div>

      <div className="dashboard-grid">
        <section className="destination-list card">
          <div className="card-title"><h3>Popular Destinations</h3><span>{filtered.length} places</span></div>
          <div className="search-inline"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search destinations..." /></div>
          {filtered.map((d) => <DestinationRow key={d.id} destination={d} selected={selectedDestinations.some((x) => x.id === d.id)} onAdd={onAddDestination} onRemove={onRemoveDestination} />)}
        </section>

        <div className="center-column">
          <MapCard destinations={selectedDestinations} />
          <Link to="/itinerary" className="plan-banner">
            <span className="plan-icon">▦</span><div><strong>Plan Your Perfect Trip</strong><small>Discover. Plan. Travel.</small></div><span className="plan-arrow">›</span>
          </Link>
        </div>

        <div className="right-column">
          <TripPanel destinations={selectedDestinations} onRemove={onRemoveDestination} total={total} />
          <BudgetOverview total={total} />
        </div>
      </div>
    </div>
  );
}
Explore.propTypes = {
  selectedDestinations: PropTypes.array.isRequired, onAddDestination: PropTypes.func.isRequired,
  onRemoveDestination: PropTypes.func.isRequired, total: PropTypes.number.isRequired
};