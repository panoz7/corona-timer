import {Hourglass} from './hourglass.js';

const canvas = document.getElementById('hourglass');
const hourglass = new Hourglass(canvas);
hourglass.startAnimating(new Date());

// Set up the date fields
const monthField = document.getElementById('month');
const dayField = document.getElementById('day');
const yearField = document.getElementById('year');
const hourField = document.getElementById('hour');
const minuteField = document.getElementById('minute');

// Populate the current date
let currentDate = new Date();
monthField.value = currentDate.getMonth() + 1;
dayField.value = currentDate.getDate();
yearField.value = currentDate.getFullYear();
hourField.value = currentDate.getHours();
minuteField.value = currentDate.getMinutes();

// Handle start time updates
document.getElementById('update-start-time').addEventListener('click', () => {
    
    // Get the current datetime and the set datetime
    // const currentDateTime = new Date();
    const setDateTime = new Date(yearField.value, monthField.value - 1, dayField.value, hourField.value, minuteField.value);

    // The difference is how much of the quarantine has already elapsed
    // const elapsedTime = Math.floor((currentDateTime.getTime() - setDateTime.getTime()) / 1000);

    hourglass.updateStartTime(setDateTime);


})


// console.log(hourglass)