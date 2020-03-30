const texts = [
  'hehe', 'heheheh', 'heehe', 'hihi', 'hehe', 'hehehe', 'hehe_v2', 'heheee',
  'hehe', 'hehehehehe', 'hehe', 'hihi', 'heehehe', 'hehe', 'hihi', 'haha',
]
const heheText = document.getElementById("heheText")



//Shuffles array in place. ES6 version (Fisher–Yates shuffle algorithm)
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

//give random int with a max value
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


const Generate = () => {
  let randomTexts = shuffle(texts)
  let output = ""

  let randomNum = getRandomInt(randomTexts.length)
  console.log(randomNum)
  for (let i = randomNum; i < randomTexts.length; i++) {
    output += `${randomTexts[i]}/`
  }

  heheText.innerHTML = output
}

export {Generate}