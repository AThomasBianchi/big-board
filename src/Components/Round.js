import React from 'react';
import './Round.css';

const Round = props => {
  return (
    <div className="round">
        {props.children}
    </div>
  );
};

export default Round;