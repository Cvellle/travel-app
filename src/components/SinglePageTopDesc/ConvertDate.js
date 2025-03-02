function ConvertDate(date) {
  let newDate = new Date(date);

  const year = newDate.getUTCFullYear();
  const shortYearStr = String(year).slice(-2);
  const shortYearNum = Number(shortYearStr);

  const getMonth = newDate.getUTCMonth() + 1;
  let month;
  if (String(Math.abs(getMonth)).charAt(0) == getMonth) {
    month = `0${getMonth}`;
  } else {
    month = `${getMonth}`;
  }

  const getDay = newDate.getUTCDate();
  let day;
  if (String(Math.abs(getDay)).charAt(0) == getDay) {
    day = `0${getDay}`;
  } else {
    day = `${getDay}`;
  }

  return `${day}.${month}.${shortYearNum}`;
}

export default ConvertDate;
