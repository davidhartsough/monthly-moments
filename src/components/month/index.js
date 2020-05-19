import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MonthPicker from "./MonthPicker";
import Recap from "./Recap";

export default function Month({ initialMonth, uid }) {
  const location = useLocation();
  const [month, setMonth] = useState(initialMonth);
  const urlBase = location.pathname.split("/").slice(0, -1).join("/");
  return (
    <div className="month">
      <MonthPicker month={month} setMonth={setMonth} urlBase={urlBase} />
      <Recap month={month} uid={uid} />
    </div>
  );
}
