
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

//store to local storage

//9AM ----------------------
document.getElementById('button-nine-am').addEventListener('click', event => {
  event.preventDefault()
  let textAreaNotes = document.getElementById('text-area-nine-am').value
  localStorage.setItem('notes', JSON.stringify(textAreaNotes))
  document.getElementById('text-area-nine-am').append(items)
  console.log(textAreaNotes)
})

let items = JSON.parse(localStorage.getItem('notes'))
if (items) {
  document.getElementById('text-area-nine-am').innerHTML = items
}

//10AM ----------------------
document.getElementById('button-ten-am').addEventListener('click', event => {
  event.preventDefault()
  let textAreaNotes = document.getElementById('text-area-ten-am').value
  localStorage.setItem('notesTen', JSON.stringify(textAreaNotes))
  document.getElementById('text-area-ten-am').append(itemsTen)
  console.log(textAreaNotes)
})

let itemsTen = JSON.parse(localStorage.getItem('notesTen'))
if (itemsTen) {
  document.getElementById('text-area-ten-am').innerHTML = itemsTen
}

//11AM ------------------------

document.getElementById('button-eleven-am').addEventListener('click', event => {
  event.preventDefault()
  let textAreaNotes = document.getElementById('text-area-eleven-am').value
  localStorage.setItem('notesEleven', JSON.stringify(textAreaNotes))
  document.getElementById('text-area-eleven-am').append(itemsEleven)
  console.log(textAreaNotes)
})

let itemsEleven = JSON.parse(localStorage.getItem('notesEleven'))
if (itemsEleven) {
  document.getElementById('text-area-eleven-am').innerHTML = itemsEleven
}

//12PM ------------------------

document.getElementById('button-twelve-pm').addEventListener('click', event => {
  event.preventDefault()
  let textAreaNotes = document.getElementById('text-area-twelve-pm').value
  localStorage.setItem('notesTwelve', JSON.stringify(textAreaNotes))
  document.getElementById('text-area-twelve-pm').append(itemsTwelve)
  console.log(textAreaNotes)
})

let itemsTwelve = JSON.parse(localStorage.getItem('notesTwelve'))
if (itemsTwelve) {
  document.getElementById('text-area-twelve-pm').innerHTML = itemsTwelve
}

//1PM ------------------------

document.getElementById('button-one-pm').addEventListener('click', event => {
  event.preventDefault()
  let textAreaNotes = document.getElementById('text-area-one-pm').value
  localStorage.setItem('notesOne', JSON.stringify(textAreaNotes))
  document.getElementById('text-area-one-pm').append(itemsOne)
  console.log(textAreaNotes)
})

let itemsOne = JSON.parse(localStorage.getItem('notesOne'))
if (itemsOne) {
  document.getElementById('text-area-one-pm').innerHTML = itemsOne
}

//2PM ------------------------

document.getElementById('button-two-pm').addEventListener('click', event => {
  event.preventDefault()
  let textAreaNotes = document.getElementById('text-area-two-pm').value
  localStorage.setItem('notesTwo', JSON.stringify(textAreaNotes))
  document.getElementById('text-area-two-pm').append(itemsTwo)
  console.log(textAreaNotes)
})

let itemsTwo = JSON.parse(localStorage.getItem('notesTwo'))
if (itemsTwo) {
  document.getElementById('text-area-two-pm').innerHTML = itemsTwo
}

//3PM ------------------------

document.getElementById('button-three-pm').addEventListener('click', event => {
  event.preventDefault()
  let textAreaNotes = document.getElementById('text-area-three-pm').value
  localStorage.setItem('notesThree', JSON.stringify(textAreaNotes))
  document.getElementById('text-area-three-pm').append(itemsThree)
  console.log(textAreaNotes)
})

let itemsThree = JSON.parse(localStorage.getItem('notesThree'))
if (itemsThree) {
  document.getElementById('text-area-three-pm').innerHTML = itemsThree
}

//4PM ------------------------

document.getElementById('button-four-pm').addEventListener('click', event => {
  event.preventDefault()
  let textAreaNotes = document.getElementById('text-area-four-pm').value
  localStorage.setItem('notesFour', JSON.stringify(textAreaNotes))
  document.getElementById('text-area-four-pm').append(itemsFour)
  console.log(textAreaNotes)
})

let itemsFour = JSON.parse(localStorage.getItem('notesFour'))
if (itemsFour) {
  document.getElementById('text-area-four-pm').innerHTML = itemsFour
}

//5PM ------------------------

document.getElementById('button-five-pm').addEventListener('click', event => {
  event.preventDefault()
  let textAreaNotes = document.getElementById('text-area-five-pm').value
  localStorage.setItem('notesFive', JSON.stringify(textAreaNotes))
  document.getElementById('text-area-five-pm').append(itemsFive)
  console.log(textAreaNotes)
})

let itemsFive = JSON.parse(localStorage.getItem('notesFive'))
if (itemsFive) {
  document.getElementById('text-area-five-pm').innerHTML = itemsFive
}

