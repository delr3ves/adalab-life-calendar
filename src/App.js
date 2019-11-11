import React from "react";
import "./App.css";
import ListDays from "./components/ListDays";
import LifeCalendarService from "./core/LifeCalendarService";
import { Link, Route, Switch } from "react-router-dom";
import MoodTracker from "./components/MoodTracker";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.lifeCalendarService = new LifeCalendarService();
    this.state = {
      calendar: []
    };
    this.updateCalendar = this.updateCalendar.bind(this);
  }

  componentDidMount() {
    this.updateCalendar();
  }

  updateCalendar() {
    this.setState(state => ({
      ...state,
      calendar: this.lifeCalendarService.findDays()
    }));
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/trackday">
            <MoodTracker
              lifeCalendarService={this.lifeCalendarService}
              notifyCreation={this.updateCalendar}
            />
          </Route>
          <Route>
            <Link to="/trackday">
              <button className="app__track_day" alt="trackear mi día">
                {" "}
                +{" "}
              </button>
            </Link>
            <ListDays days={this.state.calendar} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
