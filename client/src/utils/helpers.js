
const moment = require('moment')

// Format time
export function setDate(time) {
  return moment(time)
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
