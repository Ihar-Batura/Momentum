const guestName = document.querySelector('.name')
const city = document.querySelector('.city')

function setLocalStorage() {
  localStorage.setItem('name', guestName.value)
  localStorage.setItem('city', city.value)
}
window.addEventListener('beforeunload', setLocalStorage) //перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить

function getLocalStorage() {
  const nameFromLS = localStorage.getItem('name')
  const cityFromLS = localStorage.getItem('city')

  if (nameFromLS !== null) {
    guestName.value = nameFromLS
  }

  if (city.value !== null) {
    city.value = cityFromLS
  }
}
window.addEventListener('load', getLocalStorage) //перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
