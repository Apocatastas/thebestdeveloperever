const DateFrom = {}
DateFrom.plurar = function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}
DateFrom.getTime = function (date) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth() + 1;
  const diffYear = currentYear - year;
  let diffMonth = Math.abs(currentMonth - month);
  // add current month
  diffMonth += 1;
  return { year: diffYear, month: diffMonth };
}
DateFrom.getString = function (time) {
  const { year, month } = this.getTime(time);
  let resultString = '';
  if (year > 0) {
    resultString += year + ' ' + this.plurar(year, 'год', 'года', 'лет');
  }
  if (month > 0) {
    resultString += year > 0 ? ' и ' : ' ';
    resultString += month + ' ' + this.plurar(month, 'месяц', 'месяца', 'месяцев');
  }
  return resultString;
}
