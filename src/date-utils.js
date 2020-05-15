const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const date = new Date();
const currentMonthNumber = date.getMonth() + 1;
const currentYear = date.getFullYear();
function getMonthOptions() {
  const options = months
    .slice(0, currentMonthNumber)
    .map((m, i) => ({
      value: `${currentYear}-${i + 1}`,
      label: `${m} ${currentYear}`,
    }))
    .reverse();
  for (let year = currentYear - 1; year >= 2019; year--) {
    for (let i = 11; i >= 0; i--) {
      options.push({
        value: `${year}-${i + 1}`,
        label: `${months[i]} ${year}`,
      });
    }
  }
  return options;
}

export const monthOptions = getMonthOptions();
export const currentMonth = `${currentYear}-${currentMonthNumber}`;
export const lastMonth = monthOptions[monthOptions.length - 2];
const yearAndMonthPattern = /^20\d{2}-([1-9]|10|11|12)$/;
export function isValidMonth(yearAndMonth) {
  if (yearAndMonthPattern.test(yearAndMonth)) {
    const [yearNum, monthNum] = yearAndMonth.split("-").map((i) => Number(i));
    const yearIsValid = yearNum >= 2020 && yearNum <= currentYear;
    const monthIsValid =
      yearNum === currentMonth ? monthNum <= currentMonthNumber : true;
    return yearIsValid && monthIsValid;
  }
  return false;
}
