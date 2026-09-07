
// problem 01

const describeValue = (value) => {
  return `${typeof(value)} | ${value ? 'truthy' : 'falsy'}`;
}

// problem 02

const getDayType = (day) => {
  const dayName = day.toLowerCase();

  switch (dayName) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }
}

// problem 03

const validateUsername = (username) => {
  if (username.length < 4) return "Too Short";
  if (username.includes(" ")) return "No Space Allowed";
  if (username.toLowerCase().includes("admin")) return "Reserved Word";

  return "Available";
}

// problem 04

const getCngFare = (distance, isNight = false, waitingMinutes = 0) => {
  if (distance <= 2) {
    if (isNight) return (50 + waitingMinutes * 2) * 1.2;
    return 50 + (waitingMinutes*2);
  }

  let km = distance - 2;
  let calcFare = 50 + (km * 15) + (waitingMinutes * 2);

  return isNight ? calcFare * 1.2 : calcFare;
}

// problem 05

const getChaseVerdict = (target, scored, ballsLeft) => {
  if (scored >= target) return "Won";
  if (ballsLeft < 1) return "Lost";
  
  const runsNeeded = target - scored;
  const requiredRate = (runsNeeded / ballsLeft) * 6;

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${requiredRate <= 6 ? 'Comfortable': requiredRate <= 12 ? 'Tough' : 'Almost Impossible'}`;  
}
