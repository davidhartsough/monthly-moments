import React, { useState } from "react";
import MonthPicker from "./MonthPicker";
import ThisMonth from "./ThisMonth";
import Recap from "./Recap";
import { isThisMonth } from "../../date-utils";

export default function Month({ initialMonth, uid, isSelf = false }) {
  const [month, setMonth] = useState(initialMonth);
  return (
    <div className="month">
      <MonthPicker month={month} setMonth={setMonth} isSelf={isSelf} />
      {isSelf && isThisMonth(month) ? (
        <ThisMonth />
      ) : (
        <Recap month={month} uid={uid} />
      )}
    </div>
  );
}
