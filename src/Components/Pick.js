import React from 'react';
import './Pick.css';

const Pick = props => {
  return (
    <div className="pick">
      <div className="pick__round-spacing"></div>
      <div className="pick__team-info" >
        <div>{props.pick.team}</div>
      </div>
      <div
        className="pick__number-info"
      >
          <div className="pick__number-round">{props.roundPick}</div>
          <div className="pick__number-overall">{props.pickNo}</div>
      </div>
    </div>
  );
};

export default Pick;