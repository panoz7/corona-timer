import {Hourglass} from './hourglass.js';

const canvas = document.getElementById('hourglass');
const hourglass = new Hourglass(canvas);

hourglass.startAnimating(142010);

// console.log(hourglass)