import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Sidebar({ tripCount }) {
  const item = ({ isActive }) => `side-link ${isActive ? "active" : ""}`;
  return (
    <aside className="sidebar">
      <NavLink to="/" className="logo">
        <span className="logo-plane">✈</span><span>TripCraft</span>
      </NavLink>
      <nav className="side-nav">
        <NavLink to="/" className={item}><span>◉</span> Explore</NavLink>
        <NavLink to="/trips" className={item}><span>▣</span> My Trips <b>{tripCount}</b></NavLink>
        <NavLink to="/itinerary" className={item}><span>◫</span> Itinerary</NavLink>
        <NavLink to="/budget" className={item}><span>◔</span> Budget</NavLink>
      </nav>
      <div className="sidebar-art">
        <div className="paper-plane">✈</div>
        <div className="mountain one"></div><div className="mountain two"></div>
      </div>
    </aside>
  );
}
Sidebar.propTypes = { tripCount: PropTypes.number.isRequired };