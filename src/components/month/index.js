import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MonthPicker from "./MonthPicker";
import MyMonth from "./MyMonth";
import Recap from "./Recap";
import { currentMonth, monthOptions, myMonthOptions } from "../../date-utils";

export default function Month({ initialMonth, uid }) {
  const location = useLocation();
  const [month, setMonth] = useState(initialMonth);
  const isMyProfile = uid === "my profile";
  const showMyMonth = isMyProfile && month === currentMonth;
  const months = isMyProfile ? myMonthOptions : monthOptions;
  const urlBase = location.pathname.split("/").slice(0, -1).join("/");
  return (
    <div className="month">
      <MonthPicker
        month={month}
        setMonth={setMonth}
        monthOptions={months}
        isMyProfile={isMyProfile}
        urlBase={urlBase}
      />
      {showMyMonth ? <MyMonth /> : <Recap month={month} uid={uid} />}
    </div>
  );
}
