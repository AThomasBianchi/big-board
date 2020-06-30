import React from 'react';
import './Round.css';

const Round = props => {
  return (
    <div className="round">
      <div className="round__label-container">
        <div className="round__label">
          <div>Round</div>
          <div>{props.round}</div>
        </div>
      </div>
      <div className="round__pick-container">
        {props.children}
      </div>
    </div>
  );
};

export default Round;