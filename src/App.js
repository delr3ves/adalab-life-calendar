import React from "react";
import "./App.css";
import ListDays from "./components/ListDays";
import { HAPPY, SAD } from "./core/MoodConstants";

function App() {
  return (
    <div className="App">
      <ListDays
        days={[
          {
            date: "2019/11/09",
            mood: HAPPY,
            comment: "This is sparta!!!!"
          },
          {
            date: "2019/11/10",
            mood: SAD,
            comment: ""
          },
          {
            date: "2019/11/11",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/12",
            mood: HAPPY,
            comment: ""
          },
          {
            date: "2019/11/13",
            mood: HAPPY,
            comment: ""
          }
        ]}
      />
    </div>
  );
}

export default App;
