import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useHistory } from "react-router-dom";
import "./MonthPicker.css";

export default function MonthPicker({
  month,
  setMonth,
  monthOptions,
  urlBase,
  isMyProfile,
}) {
  const history = useHistory();
  const [monthIndex, setMonthIndex] = useState(
    monthOptions.findIndex((m) => m.value === month)
  );
  function handleMonthChange({ target }) {
    const { value } = target;
    setMonth(value);
    setMonthIndex(monthOptions.findIndex((m) => m.value === value));
    if (!isMyProfile) history.push(`${urlBase}/${value}`);
  }
  function goToPrevMonth() {
    const prevMonthIndex = monthIndex + 1;
    const prevMonth = monthOptions[prevMonthIndex].value;
    setMonthIndex(prevMonthIndex);
    setMonth(prevMonth);
    if (!isMyProfile) history.push(`${urlBase}/${prevMonth}`);
  }
  function goToNextMonth() {
    const nextMonthIndex = monthIndex - 1;
    const nextMonth = monthOptions[nextMonthIndex].value;
    setMonthIndex(nextMonthIndex);
    setMonth(nextMonth);
    if (!isMyProfile) history.push(`${urlBase}/${nextMonth}`);
  }
  return (
    <div className="month-picker">
      {monthIndex !== monthOptions.length - 1 ? (
        <div onClick={goToPrevMonth} className="month-nav">
          <ChevronLeft />
        </div>
      ) : (
        <div className="month-nav disabled">
          <ChevronLeft />
        </div>
      )}
      <div className="selects">
        <select value={month} onChange={handleMonthChange}>
          {monthOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      {monthIndex !== 0 ? (
        <div onClick={goToNextMonth} className="month-nav">
          <ChevronRight />
        </div>
      ) : (
        <div className="month-nav disabled">
          <ChevronRight />
        </div>
      )}
    </div>
  );
}
