const stage = document.querySelector('.stage');

const pac_one = new Pacman();

stage.appendChild(pac_one.mount());
console.log(pac_one.xPos);

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
