//Converts 1-2 digit numbers to 2 digits
const twoDigits = function(n) {
  if (n<10) return "0" + n
  else return "" + n
}

//returns current date in string YYYY-MM-DD
const currentDate = function() {
  let today = new Date();
  let year = today.getFullYear()
  let month = twoDigits(today.getMonth() + 1)
  let date = twoDigits(today.getDate());
  return year + "-" + month + "-" + date
}

const currentDateAsDate = function() {
  let today = new Date();
  return today
}

//returns day of week 0-6
const currentDay = function() {
  let today = new Date()
  return today.getDay();
}

//returns the date of the Sunday of the following week
const startDayOfFollowingWeek = function() {
  let today = new Date()
  let result = new Date(today.getFullYear(),today.getMonth(),today.getDate())
  let date = result.getDate()
  let day = result.getDay()
  result.setDate(date-day+7)
  return result
}

exports.twoDigits = twoDigits
exports.currentDate = currentDate
exports.currentDay = currentDay
exports.startDayOfFollowingWeek = startDayOfFollowingWeek