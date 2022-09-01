const rangeLine = document.querySelector(".range-line__input");
const rangeLineValue = document.querySelector('#range-line__value output');

rangeLine.addEventListener('input', (event) => {
  event.target.style.setProperty('--val', event.target.value);
  rangeLineValue.value = `${event.target.value}%`;
})