import React from "react";
import classNames from "classnames";

export default function DayListItem(props) {
let classSelector = classNames({selected: props.selected})

  return (
    <li className={classSelector} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}