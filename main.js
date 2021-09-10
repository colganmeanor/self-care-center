//querySelectors will go here:

var affirmationButton = document.querySelector('.affirmation-button')
var mantraButton = document.querySelector('.mantra-button')
var recieveMessageButton = document.querySelector('.message-button')
var resultBox = document.querySelector('.result-box')




//global variables will go here:
var affirmations =[
  'WHAT UP!',
  'HOWDY',
  'YO!',
  'HEY!',
  'SICK!'
]

var mantras = [
  'heeey',
  'sup',
  'teehee',
  'this is definitely a mantra',
  'is mayonaise an instrument?'
]


// event listeners will go here:
recieveMessageButton.addEventListener('click', testFunction)





// functions will go here:

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function testFunction(){
  if (affirmationButton.checked) {
    resultBox.innerHTML = affirmations[getRandomIndex(affirmations)]
  } else if (mantraButton.checked) {
    resultBox.innerHTML = mantras[getRandomIndex(mantras)]
  }
}
