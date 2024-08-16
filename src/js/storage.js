const guestName = document.querySelector('.name')

function setLocalStorage() {
  localStorage.setItem('name', guestName.value)
}
window.addEventListener('beforeunload', setLocalStorage) //перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить

function getLocalStorage() {
  const nameFromLS = localStorage.getItem('name')

  if (nameFromLS !== null) {
    guestName.value = nameFromLS
  }
}
window.addEventListener('load', getLocalStorage) //перед загрузкой страницы (событие load) данные нужно восстановить и отобразить
