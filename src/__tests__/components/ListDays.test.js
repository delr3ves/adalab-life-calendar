import React from "react";
import renderer from "react-test-renderer";
import ListDays from "../../components/ListDays";

describe("ListDays component suite", () => {
  it("should show empty case when no days are found", () => {
    const emptyList = renderer.create(<ListDays days={[]} />).toJSON();
    expect(emptyList).toMatchSnapshot();
  });

  it("should list the emojis when we have some days", () => {
    const emptyList = renderer
      .create(
        <ListDays
          days={[
            {
              date: "2019-11-09",
              mood: "happy",
              comment: "yeeeeah"
            },
            {
              date: "2019-11-08",
              mood: "sad"
            }
          ]}
        />
      )
      .toJSON();
    expect(emptyList).toMatchSnapshot();
  });
});
