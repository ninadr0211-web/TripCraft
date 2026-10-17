import React, { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Explore from "./pages/Explore";
import MyTrips from "./pages/MyTrips";
import Itinerary from "./pages/Itinerary";
import Budget from "./pages/Budget";

export default function App() {
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);

  const addDestination = (destination) => {
    setSelectedDestinations((current) =>
      current.some((item) => item.id === destination.id) ? current : [...current, destination]
    );
  };

  const removeDestination = (destinationId) => {
    setSelectedDestinations((current) => current.filter((item) => item.id !== destinationId));
    setSelectedActivities((current) => current.filter((item) => item.destinationId !== destinationId));
  };

  const addActivity = (destination, activity) => {
    setSelectedActivities((current) =>
      current.some((item) => item.id === activity.id)
        ? current
        : [...current, { ...activity, destinationId: destination.id, destinationName: destination.name }]
    );
  };

  const removeActivity = (activityId) => {
    setSelectedActivities((current) => current.filter((item) => item.id !== activityId));
  };

  const total = useMemo(
    () =>
      selectedDestinations.reduce((sum, item) => sum + item.cost, 0) +
      selectedActivities.reduce((sum, item) => sum + item.cost, 0),
    [selectedDestinations, selectedActivities]
  );

  return (
    <div className="app">
      <Sidebar tripCount={selectedDestinations.length} />
      <div className="workspace">
        <Topbar />
        <main className="content">
          <Routes>
            <Route path="/" element={
              <Explore selectedDestinations={selectedDestinations} selectedActivities={selectedActivities}
                onAddDestination={addDestination} onRemoveDestination={removeDestination} total={total} />
            } />
            <Route path="/trips" element={
              <MyTrips selectedDestinations={selectedDestinations} onRemoveDestination={removeDestination} />
            } />
            <Route path="/itinerary" element={
              <Itinerary selectedDestinations={selectedDestinations} selectedActivities={selectedActivities}
                onAddActivity={addActivity} onRemoveActivity={removeActivity} />
            } />
            <Route path="/budget" element={
              <Budget selectedDestinations={selectedDestinations} selectedActivities={selectedActivities} total={total} />
            } />
          </Routes>
        </main>
        <footer className="footer">TripCraft • BCSE203E Web Programming • Digital Assignment X</footer>
      </div>
    </div>
  );
}