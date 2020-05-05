import React, { useState } from "react";
import MonthPicker from "./MonthPicker";
import MyMonth from "./MyMonth";
import Recap from "./Recap";
import { currentMonth } from "../../date-utils";

export default function Month({ initialMonth, uid }) {
  const [month, setMonth] = useState(initialMonth || currentMonth);
  const isMyProfile = uid === "my profile";
  const showThisMonth = isMyProfile && month === currentMonth;
  return (
    <div className="month">
      <MonthPicker
        month={month}
        setMonth={setMonth}
        isMyProfile={isMyProfile}
      />
      {showThisMonth ? <MyMonth /> : <Recap month={month} uid={uid} />}
    </div>
  );
}
