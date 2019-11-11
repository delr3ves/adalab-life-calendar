import { HAPPY, SAD } from "../../core/MoodConstants";

export default function moodToEmoji(mood) {
  if (mood === HAPPY) {
    return "😊";
  } else if (mood === SAD) {
    return "😪";
  } else {
    return "🙃";
  }
}
