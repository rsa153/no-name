
const moment = require('moment')

const today = moment().startOf('day')
const query = {
  dateDue: {
    "$gte": today.toDate(),
    "$lte": moment(today).endOf('day').toDate()
  },
};

console.log(query)

let meh = null;

// meh = moment().startOf('day')

meh = moment().toDateString()

console.log(meh)
