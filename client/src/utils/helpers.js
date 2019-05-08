
const moment = require('moment')

// Format date
export function setDate(time) {
  return moment(time)
    .format("dddd, MMMM Do YYYY");
}
// Format date
export function setDateMongo(time) {
  return moment(time)
    .subtract(1, "month")
    // .subtract(6, "hours")
    // .format("dddd, MMMM Do YYYY, h:mm:ss a");
    .format("dddd, MMMM Do YYYY");
}

// Format date with time
export function setTime(time) {
  return moment(time)
    // .subtract(6, "hours")
    .format("dddd, MMMM Do YYYY, h:mm:ss a");
    // .format("dddd, MMMM Do YYYY");
}
