import React from 'react';
import './Pick.css';

const Pick = props => {
  return (
    <div className="pick" >
      <div className="pick__team-info" >{props.pick.team}</div>
      <div className="pick__number-round">{props.roundPick}</div>
      <div className="pick__number-overall">{props.pickNo}</div>
    </div>
  );
};

export default Pick;