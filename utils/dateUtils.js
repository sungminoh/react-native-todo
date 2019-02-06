export function numDaysBetween(from , to) {
  var diff = to.getTime() - from.getTime();
  return diff / (1000 * 60 * 60 * 24);
}

// export function isToday(d) {
//   return d.toDateString() == (new Date()).toDateString();
// }

// export function numDaysFromToday(d) {
//   return numDaysBetween(new Date(), d);
// }