import React, { useState } from "react";
import MonthPicker from "./MonthPicker";
import MyMonth from "./MyMonth";
import Recap from "./Recap";
import { lastMonth, currentMonth } from "../../date-utils";

export default function Month({ initialMonth, uid }) {
  const isMyProfile = uid === "my profile";
  const [month, setMonth] = useState(
    initialMonth || isMyProfile ? currentMonth : lastMonth
  );
  const showMyMonth = isMyProfile && month === currentMonth;
  return (
    <div className="month">
      <MonthPicker
        month={month}
        setMonth={setMonth}
        isMyProfile={isMyProfile}
      />
      {showMyMonth ? <MyMonth /> : <Recap month={month} uid={uid} />}
    </div>
  );
}
