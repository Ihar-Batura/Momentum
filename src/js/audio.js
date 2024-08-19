import playList from './playList.js'

const audio = new Audio() //создаем элемент аудио
const btnPlay = document.querySelector('.play')
const btnPlayNext = document.querySelector('.play-next')
const btnPlayPrev = document.querySelector('.play-prev')
const playListContainer = document.querySelector('.play-list')
let isPlay = false //смотрим играет сейчас музыка или нет
let playNum = 0 //номер песни

btnPlay.addEventListener('click', () => {
  isPlay = !isPlay
  toggleBtn()
  playAudio()
})

btnPlayNext.addEventListener('click', () => {
  if (!isPlay) {
    isPlay = !isPlay
    toggleBtn()
    playAudio()
  }
  playNext()
})

btnPlayPrev.addEventListener('click', () => {
  if (!isPlay) {
    isPlay = !isPlay
    toggleBtn()
    playAudio()
  }
  playPrev()
})

function toggleBtn() {
  btnPlay.classList.toggle('pause')
}

function playNext() {
  if (playNum < playList.length - 1) {
    playNum += 1
  } else {
    playNum = 0
  }
  playAudio()
}

function playPrev() {
  if (playNum > 0) {
    playNum -= 1
  } else {
    playNum = playList.length - 1
  }
  playAudio()
}

function playAudio() {
  if (isPlay) {
    audio.src = playList[playNum].src
    audio.currentTime = 0
    audio.play()
  } else {
    audio.pause()
  }
}

audio.addEventListener('ended', playNext) // после окончания песни запускает следующую!

// отрисовка списка песен
for (let i = 0; i < playList.length; i++) {
  let li = document.createElement('li')
  li.classList.add = 'play-item'
  li.textContent = playList[i].title
  playListContainer.append(li)
}

//volume изменение значка при нажатии и отключение звука
const volumeBtn = document.querySelector('.volume-btn')

volumeBtn.addEventListener('click', () => {
  const volumeEl = volumeBtn.querySelector('.volume')
  audio.muted = !audio.muted
  if (audio.muted) {
    volumeEl.classList.remove('icon-volume')
    volumeEl.classList.add('icon-mute')
  } else {
    volumeEl.classList.add('icon-volume')
    volumeEl.classList.remove('icon-mute')
  }
})
