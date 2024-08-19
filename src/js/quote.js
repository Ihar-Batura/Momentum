const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const changeQuote = document.querySelector('.change-quote')
let randNum

async function getQuotes() {
  const quotes = 'data/data.json'
  const res = await fetch(quotes)
  const data = await res.json()

  quote.textContent = ''
  quote.textContent = data[randNum].text
  author.textContent = ''
  author.textContent = data[randNum].author
}
getQuotes()

function getRandomNum(min, max) {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}
randNum = getRandomNum(0, 30)

changeQuote.addEventListener('click', () => {
  randNum = getRandomNum(0, 30)
  getQuotes()
})
