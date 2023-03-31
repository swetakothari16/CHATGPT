const messages = document.querySelector('.messages');
const userInput = document.querySelector('#user-input');
const sendButton = document.querySelector('#send-button');

const botResponses = {
  'hello': 'Hello! How can I assist you today?',
  'how are you': 'I am a chatbot, so I do not have feelings, but thank you for asking! How can I help you?',
  'what is your name': 'My name is Chaton. How can I assist you today?',
  'who can developed you':'I was Developed By Sweta',
  'bye': 'Goodbye! Have a nice day.',
  'thank you': 'You\'re welcome!'
}

sendButton.addEventListener('click', () => {
  const userMessage = userInput.value;
  addMessage(userMessage, 'user');
  respond(userMessage);
  userInput.value = '';
});

function addMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageElement.classList.add('message', sender);
  messages.appendChild(messageElement);
}

function respond(message) {
  message = message.toLowerCase();
  let response = botResponses[message];
  if (!response) {
    response = 'I\'m sorry, I didn\'t understand. Can you please rephrase your question?';
  }
  addMessage(response, 'bot');
}

function refreshPage() {
  location.reload();
}
