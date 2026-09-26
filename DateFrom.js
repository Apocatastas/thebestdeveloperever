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
DateFrom.getTime = function (dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number); // для ISO 'YYYY-MM-DD'
  const from = new Date(y, m - 1, d);
  const now = new Date();

  let years = now.getFullYear() - from.getFullYear();
  let months = now.getMonth() - from.getMonth();
  let days = now.getDate() - from.getDate();

  if (days < 0) months--;
  if (months < 0) {
    years--;
    months += 12;
  }

  return { year: years, month: months };
};
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
