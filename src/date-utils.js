// TODO
const currentMonth = "2020-5";
const currentMonthFormatted = "May 2020";
export const getCurrentMonth = () => currentMonth;
export const getCurrentMonthFormatted = () => currentMonthFormatted;
const lastMonth = "2020-4";
export const isRecentMonth = (m) => m === currentMonth || m === lastMonth;
export const isThisMonth = (m) => m === currentMonth;
