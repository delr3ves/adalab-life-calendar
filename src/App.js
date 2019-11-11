import React from "react";
import "./App.css";
import ListDays from "./components/ListDays";
import LifeCalendarService from "./core/LifeCalendarService";

function App() {
  const lifeCalendarService = new LifeCalendarService();
  return (
    <div className="App">
      <ListDays days={lifeCalendarService.findDays()} />
    </div>
  );
}

export default App;
