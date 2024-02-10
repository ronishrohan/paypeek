import React from "react";

function ThisWeekInfo({ amount }) {
  const date = new Date();
  const date_info = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
  const split = amount.split(".");
  const left = split[0];
  const right = split[1];
  return (
    <div id="week-container">
      <div id="date">{`${date_info.day}/${date_info.month}/${date_info.year}`}</div>
      <div id="week-amount-container">
        <div id="week-title">This week</div>
        <div id="week-amount">
          <span>{`\$${left}`}</span>
          <span id="week-amount-dimmed">{`.${right}`}</span>
        </div>
      </div>
    </div>
  );
}

export default ThisWeekInfo;
