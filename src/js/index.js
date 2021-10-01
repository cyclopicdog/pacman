const container = document.querySelector('.container');

const this_stage = new Stage(5, 10);
container.appendChild(this_stage.mount());

const stage = document.querySelector('.stage');

const wall = new Entity(2, 2, 'wall');
const apple = new Entity(2, 3, 'apple');
const bomb = new Entity(2, 6, 'bomb');

const pac_one = new Pacman();

stage.appendChild(pac_one.mount());
stage.appendChild(wall.mount());
stage.appendChild(apple.mount());
stage.appendChild(bomb.mount());

// const pac = document.querySelector('.pacboy-active-light');
// let xpos = 520.1000366210938;

// body.addEventListener('keydown', (event) => {
//     if (event.code === 'ArrowRight') {
//         pac.style.backgroundPositionX = '100%';
//     }
// });

// body.addEventListener('keyup', (event) => {
//     if (event.code === 'ArrowRight') {
//         xpos += 85;
//         pac.style.left = `${xpos}px`;
//     }
// });

// const getOffset = (el) => {
//     const rect = el.getBoundingClientRect();
//     return {
//         left: rect.left + window.scrollX,
//         top: rect.top + window.scrollY,
//     };
// };

// console.log(getOffset(pac));
