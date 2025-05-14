window.onload = () => {
  const isAnimated = localStorage.getItem('buttonAnimation');

  if (isAnimated === 'false') {
    document.querySelector('.button').classList.remove('animate');
  } else {
    document.querySelector('.button').classList.add('animate');
  }
};

function toggleAnimation() {
  const button = document.querySelector('.button');
  button.classList.toggle('animate');

  if (button.classList.contains('animate')) {
    localStorage.setItem('buttonAnimation', 'true');
  } else {
    localStorage.setItem('buttonAnimation', 'false');
  }
}
