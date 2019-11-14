import LifeCalendarService from "../../../src/core/LifeCalendarService";

function givenSomeDaysAreStored(localStorage) {
  return localStorage.setItem(
    "life-calendar-days",
    '[{"date": "2019-11-09", "mood": "happy", "comment": "I just hacked the app :)"}, {"date": "2019-11-08", "mood": "sad"}, {"date": "2019-11-10", "mood": "sad"}]'
  );
}

describe("LifeCalendarService findAll suite", () => {
  const lifeCalendarService = new LifeCalendarService();
  it("should return an empty list when no data is stored in localStorage", () => {
    expect(lifeCalendarService.findDays()).toStrictEqual([]);
  });

  it("should return an sorted list when data is stored in localStorage", () => {
    givenSomeDaysAreStored(localStorage);
    const expectedSortedDays = [
      {
        date: "2019-11-08",
        mood: "sad"
      },
      {
        comment: "I just hacked the app :)",
        date: "2019-11-09",
        mood: "happy"
      },
      {
        date: "2019-11-10",
        mood: "sad"
      }
    ];
    const foundDays = lifeCalendarService.findDays();
    expect(foundDays).toStrictEqual(expectedSortedDays);
    localStorage.removeItem("life-calendar-days");
  });

  it("should return a 404 error when data doesn't exist", () => {
    givenSomeDaysAreStored(localStorage);
    return localStorage === undefined;
  });
});
