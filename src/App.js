import React from "react";
import "./App.css";
import ListDays from "./components/ListDays";
import LifeCalendarService from "./core/LifeCalendarService";
import { Route, Switch } from "react-router-dom";
import MoodTracker from "./components/Editor";

function App() {
  const lifeCalendarService = new LifeCalendarService();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ListDays days={lifeCalendarService.findDays()} />
        </Route>
        <Route exact path="/trackday">
          <MoodTracker />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
