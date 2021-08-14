// Import stylesheets
import './style.css';

const btn = document.querySelector('.btn');
btn.onclick = e => {
  const x = e.pageX - btn.offsetLeft;
  const y = e.pageY - btn.offsetTop;
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
  btn.classList.add('ripple');
  setTimeout(() => {
    btn.classList.remove('ripple');
  }, 500);
};
