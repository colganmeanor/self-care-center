//querySelectors will go here:

var mainPage = document.querySelector('.main-page')
var listPage = document.querySelector('.list-page')
var affirmationButton = document.querySelector('.affirmation-button')
var mantraButton = document.querySelector('.mantra-button')
var recieveMessageButton = document.querySelector('.message-button')
var resultBox = document.querySelector('.result-box')
var viewAllButton = document.getElementById('view-all-button')
var returnHomeButton = document.getElementById('return-home')
var listBox = document.querySelector('.list-container')
var messageChoiceBox = document.querySelector('.white-box')
var affirmationsList = document.querySelector('.affirmation-list')
var mantrasList = document.querySelector('.mantra-list')





//global variables will go here:
var affirmations =[
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough',
  'I deserve to be healthy and feel good',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
]

var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don’t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you, and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
]


// event listeners will go here:
recieveMessageButton.addEventListener('click', recieveMessage)
viewAllButton.addEventListener('click', viewAllMessages)
returnHomeButton.addEventListener('click', returnHome)





// functions will go here:

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function recieveMessage(){
  if (affirmationButton.checked) {
    resultBox.innerHTML = affirmations[getRandomIndex(affirmations)]
  } else if (mantraButton.checked) {
    resultBox.innerHTML = mantras[getRandomIndex(mantras)]
  }
  viewAllButton.classList.remove('hidden');
}

function viewAllMessages() {
  listPage.classList.remove('hidden');
  mainPage.classList.add('hidden');
  showAffirmationList()
  showMantraList()
}

function returnHome(){
  listPage.classList.add('hidden');
  mainPage.classList.remove('hidden')
}

function showAffirmationList(){
  affirmationContainer = document.createElement('div');
  affirmationList = document.createElement('ul');
  affirmationsList.appendChild(affirmationContainer);
  affirmationContainer.appendChild(affirmationList);
  for (i = 0; i < affirmations.length; i++){
    affirmationItem = document.createElement('li');
    affirmationItem.innerHTML = affirmations[i];
    affirmationList.appendChild(affirmationItem);
  }
}

function showMantraList(){
  mantraContainer = document.createElement('div');
  mantraList = document.createElement('ul');
  mantrasList.appendChild(mantraContainer);
  mantraContainer.appendChild(mantraList);
  for (i = 0; i < mantras.length; i++){
    mantraItem = document.createElement('li');
    mantraItem.innerHTML = mantras[i];
    mantraList.appendChild(mantraItem);
  }
}
