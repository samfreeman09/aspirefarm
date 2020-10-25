// NAVBAR TOGGLING
const toggleHandler = () => {
  const toggleOpen = document.querySelector('.navId');
  // toggleOpen.style.display = 'block';
  toggleOpen.classList.toggle('visible');
};
const toggleBtn = document.querySelector('#navBtn');

toggleBtn.addEventListener('click', toggleHandler);

const listHandler = () => {
  const list = document.querySelector('.list-content');
  list.classList.toggle('display');
};
const toggleList = document.querySelector('.toggle-list');
toggleList.addEventListener('click', listHandler);
// CARD READ MORE TOGGLING

const readTextHandler = () => {
  const readPara = document.querySelectorAll('.card-read-text');
  // Array.from(readPara).forEach((parseFloat, idx, show) => {

  // });
  readPara.forEach((parseFloat, id) => {
    parseFloat.classList.toggle('visible');
  });
};
const toggleText = document.querySelectorAll('.card-read-more');
toggleText.forEach((btn) => {
  btn.addEventListener('click', readTextHandler);
});
console.log(toggleText);
