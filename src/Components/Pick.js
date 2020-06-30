import React from 'react';

const Pick = props => {
  return (
    <div>
      <div>{props.pick.team}</div>
      <div>{props.roundNo}:{props.roundPick}</div>
      <div>{props.pickNo}</div>
    </div>
  );
};

export default Pick;