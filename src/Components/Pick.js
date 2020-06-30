import React from 'react';
import './Pick.css';

const Pick = props => {
  return (
    <div className="pick" >
      <div>{props.pick.team}</div>
      <div>{props.roundNo}:{props.roundPick}</div>
      <div>{props.pickNo}</div>
    </div>
  );
};

export default Pick;