import { HAPPY, ALLOWED_MOODS } from "./MoodConstants";

class LifeCalendarService {
  constructor() {
    this.storageKey = "life-calendar-days";
  }

  findDays() {
    const fromLocalStore = localStorage.getItem(this.storageKey) || "[]";
    const unsortedDays = JSON.parse(fromLocalStore);
    const sortedDays = unsortedDays.sort((day1, day2) => {
      return new Date(day1.date).getTime() - new Date(day2.date).getTime();
    });
    return sortedDays;
  }

  saveMood(mood) {
    const allDays = this.findDays();
    const violations = this.validateSave(mood, allDays);
    if (Object.keys(violations).length > 0) {
      throw violations;
    }
    allDays.push(mood);
    this.saveAllMoods(allDays);
    return mood;
  }

  saveAllMoods(moods) {
    localStorage.setItem(this.storageKey, JSON.stringify(moods));
  }

  validateSave(mood, allMoods) {
    let violations = {};
    if (!ALLOWED_MOODS.includes(mood.mood)) {
      violations.mood = "Has añadido un estado de ánimo desconocido";
    }
    if (!mood.date) {
      violations.date =
        "Tienes que añadir una fecha para inidicar tu estado de ánimo";
    }
    if (mood.mood !== HAPPY && mood.comment) {
      violations.comment =
        "Solo nos interesan tus mensajitos si estás feliz, sino que te den!!!";
    }
    if (
      allMoods.find(foundMood => {
        return foundMood.date === mood.date;
      })
    ) {
      violations.date = "Solo puedes añadir un estado de ánimo en un mismo día";
    }
    return violations;
  }
}

export default LifeCalendarService;
