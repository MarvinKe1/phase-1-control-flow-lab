function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!'; // Free ride for distances <= 400 feet
  } 
  else if (someValue > 400 && someValue <= 2000) {
    return 'That will be twenty bucks.'; // $20 for distances between 400 and 2000 feet
  } 
  else if (someValue > 2000 && someValue <= 2500) {
    return 'I will gladly take your thirty bucks.'; // $30 for distances between 2000 and 2500 feet
  } 
  else {
    return 'No can do.'; // Cannot go beyond 2500 feet
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'; // Return the appropriate response
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'; // For a generous tip
    case 'not as generous':
      return 'Thank you.'; // For a less generous tip
    default:
      return 'Bye.'; // For any other case
  }
}

