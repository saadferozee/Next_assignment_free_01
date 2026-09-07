
// problem 01

const describeValue = (value) => {
  return `${typeof(value)} | ${value ? 'truthy' : 'falsy'}`;
}

// problem 02

const getDayType = (day) => {
  const weekendDays = "friday, saturday";
  const workingDays = "sunday, monday, tuesday, wednesday, thursday";

  if (weekendDays.includes(day.lowercase())) {
    return "Weekend";
  } else if (workingDays.includes(day.lowercase())) {
    return "Working Day";
  } else {
    return "Invalid Day";
  }
}

// problem 03

const validateUsername = (username) => {
  if (username.length < 4) return "Too Short";
  if (username.includes(" ")) return "No Space Allowed";
  if (username.toLowercase().includes("admin")) return "Reserved Word";

  return "Available";
}

// problem 04

const getCngFare = (distance, isNight = false, waitingMinutes = 0) => {
  if (distance <= 2) {
    if (isNight) return (50 + witingMinutes * 2) * 1.2;
    return 50 + (waitingMinutes*2);
  }

  let km = distance - 2;
  let calcFare = 50 + (km * 15) + (waitingMinutes * 2);

  return isNight ? calcFare * 1.2 : calcFare;
}

// problem 05

const getChaseVerdict = (target, scored, ballsLeft) => {
  if (ballsLeft < 1) return "Lost";
  if (scored >= target) return "Won";
  
  const runsNeeded = target - scored;
  const requiredRate = (runsNeeded / ballsLeft) * 6;

  return `Need ${runsNeeded} runs in ${ballsLeft} | ${requiredRate <= 6 ? 'Comfortable': requiredRate <= 12 ? 'Tough' : 'Almost Impossible'}`;
  
}









  
}
