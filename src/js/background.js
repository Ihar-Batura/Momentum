import { getTimeOfDay } from './greeting.js'

let timeOfDay = getTimeOfDay()
let randomNum

//Cсылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения

function getRandomNum() {
  let rand = 1 + Math.random() * (20 + 1 - 1)
  randomNum = Math.floor(rand)
}
getRandomNum()

function setBackground() {
  const img = new Image()
  img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${
    randomNum < 10 ? (randomNum + '').padStart(2, '0') : randomNum
  }.jpg`
  //Чтобы избежать моментов, когда фоновое изображение ещё не загрузилось, но уже используется как фоновое, необходимо указывать его фоном страницы только после полной загрузки
  img.onload = () => {
    document.body.style.backgroundImage = 'url(' + `${img.src}` + ')'
  }
}
setBackground()

//Изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана

const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')

function getSlideNext() {
  if (randomNum < 20) {
    randomNum += 1
  } else {
    randomNum = 1
  }
  setBackground()
}

slideNext.addEventListener('click', getSlideNext)

function getSlidePrev() {
  if (randomNum > 1) {
    randomNum -= 1
  } else {
    randomNum = 20
  }
  setBackground()
}

slidePrev.addEventListener('click', getSlidePrev)
