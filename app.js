
let today = moment(new Date);
console.log(today)

today = moment().format("dddd, MMMM Do YYYY")

document.getElementById('currentDay').textContent = today;