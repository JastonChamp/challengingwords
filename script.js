const wheel = document.querySelector('.wheel');
const challengingWords = [
   'scratch', 'scram', 'strap', 'crash', 'landed', 'ended',
   'present', 'seven', 'friends', 'select', 'nibbled', 'vanished',
   'drinks', 'strings', 'missing', 'incredible', 'flashing', 'blinking', 'fantastic',
   'drinking', 'inspect', 'insects', 'chomping', 'tossing', 'dropping',
   'picnic', 'carrots', 'forest', 'antenna', 'umbrella', 'tugging',
   'difficult', 'huddling', 'sunset', 'standing', 'frolic', 'finishes',
   'swimming', 'tumbled', 'commented', 'woollen', 'astonished', 'looking'
];

challengingWords.forEach((word, index) => {
  const slot = document.createElement('div');
  slot.className = 'slot';
  
  slot.textContent = word;
  slot.style.display = 'none';
  wheel.appendChild(slot);
});

const slots = document.querySelectorAll('.slot');
slots[0].style.display = 'flex';

let currentSlot = 0;

document.getElementById('spinButton').addEventListener('click', () => {
  let shuffleCount = 0;
  let lastRandom = 0;

  const shuffleEffect = setInterval(() => {
    slots[lastRandom].style.display = 'none';
    const randomSlot = Math.floor(Math.random() * challengingWords.length);
    slots[randomSlot].style.display = 'flex';
    lastRandom = randomSlot;
    shuffleCount++;
    if (shuffleCount > 20) {
      clearInterval(shuffleEffect);
      slots[lastRandom].style.display = 'none';
      slots[currentSlot].style.display = 'flex';
    }
  }, 100);

  setTimeout(() => {
    const randomSlot = Math.floor(Math.random() * challengingWords.length);
    slots[currentSlot].style.display = 'none';
    slots[randomSlot].style.display = 'flex';
    currentSlot = randomSlot;
  }, 2500);
});
