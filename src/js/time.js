const time = document.querySelector('.time')
const calendar = document.querySelector('.date')

export function showTime() {
  const date = new Date()
  const currentTime = date.toLocaleTimeString()
  time.textContent = `${currentTime}`
  showDate()
  setTimeout(showTime, 1000)
}
showTime()

export function showDate() {
  const date = new Date()
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }
  const currentDate = date.toLocaleDateString('en-US', options)
  calendar.textContent = `${currentDate}`
}
showDate()
