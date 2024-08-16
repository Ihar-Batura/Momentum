const greeting = document.querySelector('.greeting')

export function showGreeting() {
  const greetingText = `Good ${getTimeOfDay()}`
  greeting.textContent = greetingText
  setTimeout(showGreeting, 1000)
}

function getTimeOfDay() {
  const date = new Date()
  const hours = date.getHours()
  if (hours >= 0 && hours <= 11) {
    return 'morning'
  }
  if (hours >= 12 && hours <= 16) {
    return 'afternoon'
  }
  if (hours >= 17 && hours <= 19) {
    return 'evening'
  } else {
    return 'night'
  }
}
