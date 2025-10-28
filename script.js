const container = document.getElementById('container');
const button = document.getElementById('button1');
const toggleCircle = document.getElementById('toggle-circle');

const isGradient1 = localStorage.getItem('isGradient1');

if (isGradient1 === 'true') {
  container.classList.add('blue');
  toggleCircle.classList.add('blue');
} else {
  container.classList.remove('blue');
  toggleCircle.classList.remove('blue');
}

button.addEventListener('click', () => {
  container.classList.toggle('blue');
  toggleCircle.classList.toggle('blue');
  localStorage.setItem('isGradient1', container.classList.contains('blue'));
});