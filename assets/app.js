
//get current date
let today = moment(new Date);
console.log(today)

today = moment().format("dddd, MMMM Do YYYY")

currentTime = moment().format("H")
console.log(currentTime)

//display date on the DOM
document.getElementById('currentDay').textContent = today;

//grab the value from the div to compare to current time
let nineAm = parseInt(document.getElementById('time-nine-am').getAttribute('value'))
console.log(nineAm)
console.log(typeof (nineAm))
if (nineAm == currentTime) {
  document.getElementById('text-area-nine-am').classList.add('present')

} if (nineAm < currentTime) {
  document.getElementById('text-area-nine-am').classList.add('past')

} if (nineAm > currentTime) {
  document.getElementById('text-area-nine-am').classList.add('future')

}

let tenAm = parseInt(document.getElementById('time-ten-am').getAttribute('value'))
console.log(tenAm)
if (tenAm == currentTime) {
  document.getElementById('text-area-ten-am').classList.add('present')

} if (tenAm < currentTime) {
  document.getElementById('text-area-ten-am').classList.add('past')

} if (tenAm > currentTime) {
  document.getElementById('text-area-ten-am').classList.add('future')

}

let elevenAm = parseInt(document.getElementById('time-eleven-am').getAttribute('value'))
console.log(elevenAm)
if (elevenAm == currentTime) {
  document.getElementById('text-area-eleven-am').classList.add('present')

} if (elevenAm < currentTime) {
  document.getElementById('text-area-eleven-am').classList.add('past')

} if (elevenAm > currentTime) {
  document.getElementById('text-area-eleven-am').classList.add('future')

}

let twelvePm = parseInt(document.getElementById('time-twelve-pm').getAttribute('value'))
console.log(twelvePm)
if (twelvePm == currentTime) {
  document.getElementById('text-area-twelve-pm').classList.add('present')

} if (twelvePm < currentTime) {
  document.getElementById('text-area-twelve-pm').classList.add('past')

} if (twelvePm > currentTime) {
  document.getElementById('text-area-twelve-pm').classList.add('future')

}

let onePm = parseInt(document.getElementById('time-one-pm').getAttribute('value'))
console.log(onePm)
if (onePm == currentTime) {
  document.getElementById('text-area-one-pm').classList.add('present')

} if (onePm < currentTime) {
  document.getElementById('text-area-one-pm').classList.add('past')

} if (onePm > currentTime) {
  document.getElementById('text-area-one-pm').classList.add('future')

}

let twoPm = parseInt(document.getElementById('time-two-pm').getAttribute('value'))
console.log(twoPm)
if (twoPm == currentTime) {
  document.getElementById('text-area-two-pm').classList.add('present')

} if (twoPm < currentTime) {
  document.getElementById('text-area-two-pm').classList.add('past')

} if (twoPm > currentTime) {
  document.getElementById('text-area-two-pm').classList.add('future')

}

let threePm = parseInt(document.getElementById('time-three-pm').getAttribute('value'))
console.log(threePm)
if (threePm == currentTime) {
  document.getElementById('text-area-three-pm').classList.add('present')

} if (threePm < currentTime) {
  document.getElementById('text-area-three-pm').classList.add('past')

} if (threePm > currentTime) {
  document.getElementById('text-area-three-pm').classList.add('future')

}

let fourPm = parseInt(document.getElementById('time-four-pm').getAttribute('value'))
console.log(fourPm)
if (fourPm == currentTime) {
  document.getElementById('text-area-four-pm').classList.add('present')

} if (fourPm < currentTime) {
  document.getElementById('text-area-four-pm').classList.add('past')

} if (fourPm > currentTime) {
  document.getElementById('text-area-four-pm').classList.add('future')

}

let fivePm = parseInt(document.getElementById('time-five-pm').getAttribute('value'))
console.log(fivePm)
if (fivePm == currentTime) {
  document.getElementById('text-area-five-pm').classList.add('present')

} if (fivePm < currentTime) {
  document.getElementById('text-area-five-pm').classList.add('past')

} if (fivePm > currentTime) {
  document.getElementById('text-area-five-pm').classList.add('future')

}

