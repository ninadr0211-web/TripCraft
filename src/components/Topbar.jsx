import React from "react";
import { useLocation } from "react-router-dom";

export default function Topbar() {
  const location = useLocation();
  const title = location.pathname === "/" ? "Explore" : location.pathname.slice(1).replace("-", " ");
  return (
    <header className="topbar">
      <div className="mobile-title">TripCraft</div>
      <div className="top-search"><span>⌕</span><input placeholder={`Search ${title}...`} /></div>
      <div className="top-actions"><button className="icon-btn">♧</button><div className="avatar">R</div></div>
    </header>
  );
}