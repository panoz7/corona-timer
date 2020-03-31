import {Hourglass} from './hourglass.js';

const canvas = document.getElementById('hourglass');
const hourglass = new Hourglass(canvas);

hourglass.updateTime(28471);

// console.log(hourglass)