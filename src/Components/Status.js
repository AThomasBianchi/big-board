import React from 'react';
import './Status.css';

const Status = props => {
  return (
    <div className="status">
      <div className="status_time">
        
      </div>
      <div className="status__up-now">
        <div>
          Pick: {props.pick}
        </div>
        <div>
          Up: {props.now}
        </div>
      </div>
      <div className="status__on-deck">
        <div className="status__next">
          <div>Next:</div>
          <div>{props.next}</div>
        </div>
        <div className="status__soon">
          <div>Then:</div>
          <div>{props.then}</div>
        </div>
      </div>
    </div>
  );

};

export default Status;