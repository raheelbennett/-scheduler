import React from "react";
import DayListItem from "./DayListItem";
// import classNames from "classnames";


export default function DayList(props) {

  const daysArray = props.days;
  const dayListItemArray = daysArray.map((day) => {
    return <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={props.setDay}
    />
  });


  return (
    <ul>
      {dayListItemArray}
    </ul>
  );
}