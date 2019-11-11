import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/MoodTracker.scss";
import { Link } from "react-router-dom";
import moodToEmoji from "./utils/MoodToEmoji";
import { HAPPY, SAD } from "../core/MoodConstants";

class MoodTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: {
        date: "",
        emotic: "",
        message: ""
      },
      saveData: false,
      violations: {}
    };
    this.chooseDate = this.chooseDate.bind(this);
    this.getEmotic = this.getEmotic.bind(this);
    this.writeMessage = this.writeMessage.bind(this);
    this.trackMood = this.trackMood.bind(this);
  }

  chooseDate(event) {
    const date = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      editor: {
        ...prevState.editor,
        date
      }
    }));
  }

  getEmotic(emotic) {
    this.setState(prevState => ({
      ...prevState,
      editor: {
        ...prevState.editor,
        emotic
      }
    }));
  }

  writeMessage(event) {
    const message = event.target.value;

    this.setState(prevState => {
      return {
        ...prevState,
        editor: {
          ...prevState.editor,
          message
        }
      };
    });
  }

  trackMood(event) {
    const { date, emotic, message } = this.state.editor;
    event.preventDefault();
    try {
      this.props.lifeCalendarService.saveMood({
        date: date,
        mood: emotic,
        comment: emotic === HAPPY ? message : null
      });
      this.setState(state => ({ ...state, saveData: true }));
      this.props.notifyCreation();
    } catch (violations) {
      this.setState(state => ({ ...state, violations }));
    }
  }

  render() {
    const { editor, saveData } = this.state;
    const { date, emotic, message } = editor;

    if (saveData === true) {
      return (
        <div>
          <Link to="/" className="back">
            <button className="back__button">Volver</button>
          </Link>
        </div>
      );
    }
    const happyFaceCustomStyle =
      emotic === HAPPY ? "" : "mood_tracker__disabled_face";
    const sadFaceCustomStyle =
      emotic === SAD ? "" : "mood_tracker__disabled_face";
    return (
      <div className="form__container">
        <form className="form" id="idForm">
          <p className="mood_tracket__error_field">
            {this.state.violations.date}
          </p>
          <label className="title__date" htmlFor="date">
            Fecha
          </label>
          <div className="date__container">
            <input
              id="date"
              type="date"
              className="form__date"
              onChange={this.chooseDate}
              value={date}
              placeholder="date"
            />
          </div>
          <p className="mood_tracket__error_field">
            {this.state.violations.mood}
          </p>
          <div>
            <p className="mood_tracket__error_field">
              {this.state.violations.comment}
            </p>
            <span
              onClick={() => this.getEmotic(HAPPY)}
              className={`mood_tracker__face ${happyFaceCustomStyle}`}
            >
              {moodToEmoji(HAPPY)}
            </span>
            <span
              onClick={() => this.getEmotic(SAD)}
              className={`mood_tracker__face ${sadFaceCustomStyle}`}
            >
              {moodToEmoji(SAD)}
            </span>
          </div>
          <label
            className={this.state.editor.emotic === HAPPY ? "" : "hidden"}
            htmlFor="message"
          >
            Mensaje
            <textarea
              id="message"
              type="text"
              className={this.state.editor.emotic === HAPPY ? "" : "hidden"}
              onChange={this.writeMessage}
              value={message}
              placeholder="Hoy es un buen día porque..."
            />
          </label>
          <div className="save__container">
            <button className="save__button" onClick={this.trackMood}>
              Guardar
            </button>
          </div>
          <Link to="/" className="cancel">
            <button className="cancel__button">Cancelar</button>
          </Link>
        </form>
      </div>
    );
  }
}

MoodTracker.propTypes = {
  lifeCalendarService: PropTypes.object,
  notifyCreation: PropTypes.func
};

MoodTracker.defaultProps = {
  notifyCreation: () => {}
};

export default MoodTracker;
