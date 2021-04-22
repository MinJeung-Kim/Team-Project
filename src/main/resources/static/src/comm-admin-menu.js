'user strict';
const sideMenu = document.querySelector('.admin-side-menu');

sideMenu.addEventListener('click', (e) => {
  console.log(e.target.firstChild);
  e.target.children[0].classList.add('text-shadow');
  e.target.children[1].classList.add('text-shadow');
});
