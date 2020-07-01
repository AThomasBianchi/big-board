import React from 'react';
import './Status.css';

const Status = props => {
  return (
    <div className="status">
      <div className="status__up-now">
        <div>
          Pick: {props.pick}
        </div>
        <div>
          Up: {props.now}
        </div>
      </div>
      <div className="status__on-deck">
        <div>
          Next: {props.next}
        </div>
        <div>
          Then: {props.then}
        </div>
      </div>
    </div>
  );

};

export default Status;