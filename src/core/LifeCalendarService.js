class LifeCalendarService {
  findDays() {
    const fromLocalStore = localStorage.getItem("life-calendar-days") || "[]";
    const unsortedDays = JSON.parse(fromLocalStore);
    const sortedDays = unsortedDays.sort((day1, day2) => {
      return new Date(day1.date).getTime() - new Date(day2.date).getTime();
    });
    return sortedDays;
  }
}

export default LifeCalendarService;
