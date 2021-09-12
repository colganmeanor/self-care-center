//querySelectors will go here:

var affirmationButton = document.querySelector('.affirmation-button')
var mantraButton = document.querySelector('.mantra-button')
var recieveMessageButton = document.querySelector('.message-button')
var resultBox = document.querySelector('.result-box')
var clearButton = document.querySelector('.clear-button')
var removeMessageButton = document.querySelector('#remove-message-button')



//global variables will go here:
var affirmations = [
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

var currentAffirmation;
var currentMantra;


// event listeners will go here:
recieveMessageButton.addEventListener('click', receiveMessage)
affirmationButton.addEventListener('click', enableButton)
mantraButton.addEventListener('click', enableButton)
clearButton.addEventListener('click', clearMessage)
removeMessageButton.addEventListener('click', removeMessage)




// functions will go here:

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function receiveMessage() {
  showButtons();
  currentAffirmation = affirmations[getRandomIndex(affirmations)];
  currentMantra = mantras[getRandomIndex(mantras)];
  if (affirmationButton.checked) {
    resultBox.innerHTML = currentAffirmation;
  } else if (mantraButton.checked) {
    resultBox.innerHTML = currentMantra;
  }
}


function enableButton() {
  recieveMessageButton.disabled = false;
}

function hideButtons() {
  clearButton.classList.add('hidden');
  removeMessageButton.classList.add('hidden');
  affirmationButton.checked = false;
  mantraButton.checked = false;
  recieveMessageButton.disabled = true;
}

function showButtons() {
  clearButton.classList.remove('hidden');
  removeMessageButton.classList.remove('hidden');
}

function clearMessage() {
  resultBox.innerHTML = `<img src = "assets/meditate.svg">`;
  hideButtons()
}

function removeMessage() {
  if (resultBox.innerHTML === currentAffirmation) {
    removeAffirmation();
  } else if (resultBox.innerHTML === currentMantra) {
    removeMantra();
  }
  resultBox.innerHTML = `<img src = "assets/meditate.svg">
  <div class>Yo, we got rid of that message for you. No worries, we didn't like it that much anyway.</div>`;
  hideButtons()
}

function removeAffirmation() {
  for (var i = 0; i < affirmations.length; i++) {
    if (affirmations[i] === currentAffirmation) {
      affirmations.splice(i, 1);
    }
  }
}

function removeMantra() {
  for (var i = 0; i < mantras.length; i++) {
    if (mantras[i] === currentMantra) {
      mantras.splice(i, 1);
    }
  }
}
