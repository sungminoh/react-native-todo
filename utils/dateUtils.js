import moment from 'moment';

export function numDaysBetween(from, to) {
  var diff = to.getTime() - from.getTime();
  return diff / (1000 * 60 * 60 * 24);
}

export function formatDate(date) {
  const now = new Date();
  const datemoment = moment(date);
  if (date) {
    return date.toDateString() == now.toDateString()
      ? datemoment.format('HH:mm')
      : Math.abs(numDaysBetween(now, date)) <= 7
        ? datemoment.format('D, ddd')
        : datemoment.format('D, MMM');
  }
  return null;
}

// export function isToday(d) {
//   return d.toDateString() == (new Date()).toDateString();
// }

// export function numDaysFromToday(d) {
//   return numDaysBetween(new Date(), d);
// }