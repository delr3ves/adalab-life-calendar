import React, { Component } from "react";
import PropTypes from "prop-types";
import { HAPPY, SAD } from "../core/MoodConstants";
import "../stylesheets/ListDays.scss";
import ReactTooltip from "react-tooltip";

const dayShape = PropTypes.shape({
  date: PropTypes.date,
  mood: PropTypes.string,
  comment: PropTypes.string
});

const SingleDay = props => {
  function moodToEmoji(mood) {
    if (mood === HAPPY) {
      return "😊";
    } else if (mood === SAD) {
      return "😪";
    } else {
      return "🙃";
    }
  }
  const { day } = props;
  const moodType = day.mood === HAPPY ? "success" : "warning";
  return (
    <div>
      <p data-tip data-for={day.date}>
        {moodToEmoji(day.mood)}
      </p>
      <ReactTooltip id={day.date} type={moodType} effect="solid">
        <h1>{day.date}</h1>
        <p>{day.comment}</p>
      </ReactTooltip>
    </div>
  );
};

SingleDay.propTypes = {
  day: dayShape
};

class ListDays extends Component {
  listOfDays(days) {
    return (
      <ul className="list_days__list">
        {days.map(day => (
          <li key={day.date} className="list_days__mood_item">
            <SingleDay day={day} />
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { days } = this.props;
    const list =
      days.length > 0 ? this.listOfDays(days) : <p>qué tal ha ido tu día</p>;
    return (
      <div className="list_days__container">
        <h1 className="list_days__title">Life - Calendar</h1>
        {list}
      </div>
    );
  }
}

ListDays.propTypes = {
  days: PropTypes.arrayOf(dayShape)
};

export default ListDays;
