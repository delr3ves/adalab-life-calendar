import React from "react";
import '../stylesheets/Editor.scss';
import { Link } from "react-router-dom";

class MoodTracker extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        editor: {
          date: "",
          emotic: "",
          message: "",
          moodFace: []
        }
      };
      this.chooseDate = this.chooseDate.bind(this);
      this.getEmotic = this.getEmotic.bind(this);
      this.writeMessage = this.writeMessage.bind(this);
      this.getClick = this.getClick.bind(this);
    }
  
  
    chooseDate(event) {
      const date = event.target.value;
      this.setState(prevState => {
        return {
          editor: {
            ...prevState.editor,
            ...this.state.date,
            date
          }
        };
      });
    }
  
    getEmotic(event) {
      const emotic = event.target.value;
      const checked = event.target.checked;
      if (checked === true) {
        return this.setState(prevState => {
          return {
            editor: {
              ...prevState.editor,
              ...this.state.emotic,
              emotic
            }
          };
        });
      } else {
        return checked === false;
      }
    }
  
    writeMessage(event) {
      const message = event.target.value;
  
      this.setState(prevState => {
        return {
          editor: {
            ...prevState.editor,
            ...this.state.message,
            message
          }
        };
      });
    }
  
  
    getClick(event) {
      event.preventDefault();
      this.saveData = true;
    }
  
  render() {
    const { editor, date, emotic, message } = this.state;
    if (this.saveData === true) {
      return (
        <div>
          <p>{editor.moodFace}</p>
          <Link to="/" className="back">
            <button className="back__button" onClick={this.getBack}>Volver</button>
          </Link>
        </div>
      );
    }

    return (

      <div className="form__container">
        <form className="form" id="idForm">

          <label className="title__date" htmlFor="date">Fecha</label>
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
          <fieldset className="mood__emotic-form">Estado


            <input
              id="happy"
              className="emotic__happy"
              onChange={this.getEmotic}
              value=":)"
              type="checkbox"
              checked={emotic}
            />
            <label className="happy__emotic-form" htmlFor="happy"> {":)"} </label>

            <input
              id="sad"
              className="emotic__sad"
              onChange={this.getEmotic}
              type="checkbox"
              value=":("
              checked={emotic}
            />
            <label htmlFor="sad"> {":("} </label>
          </fieldset>

          <label className={this.state.editor.emotic === ":)" ? "" : "hidden"} htmlFor="message">
            Mensaje
              <input
              id="message"
              type="text"
              className={this.state.editor.emotic === ":)" ? "" : "hidden"}
              onChange={this.writeMessage}
              value={message}
              placeholder="Hoy es un buen día porque..."
            />
          </label>
          <div className="save__container">
            <button className="save__button" onClick={this.getClick}>
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

export default MoodTracker;
