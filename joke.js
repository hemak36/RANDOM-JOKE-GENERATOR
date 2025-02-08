const jokeBtn = document.getElementById('joke-btn');
const jokeText = document.getElementById('joke');


const jokes = [
  'Why don\'t scientists trust atoms? Because they make up everything.',
  'Why don\'t eggs tell jokes? They\'d crack each other up.',
  'Why did the tomato turn red? Because it saw the salad dressing!',
  'What do you call a fake noodle? An impasta.',
  'Why did the scarecrow win an award? Because he was outstanding in his field.'
];

jokeBtn.addEventListener('click', () => {
  jokeText.textContent = jokes[Math.floor(Math.random() * jokes.length)];
});