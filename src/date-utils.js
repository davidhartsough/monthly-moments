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
const _monthOptions = months
  .slice(0, currentMonthNumber)
  .map((m, i) => ({
    value: `${currentYear}-${i + 1}`,
    label: `${m} ${currentYear}`,
  }))
  .reverse();
for (let year = currentYear - 1; year >= 2019; year--) {
  for (let i = 11; i >= 0; i--) {
    _monthOptions.push({
      value: `${year}-${i + 1}`,
      label: `${months[i]} ${year}`,
    });
  }
}
export const monthOptions = _monthOptions;
export const prevMonthBound = _monthOptions.length - 1;
export const currentMonth = `${currentYear}-${currentMonthNumber}`;
export function isValidMonth(month) {
  // TODO
  return false;
}
