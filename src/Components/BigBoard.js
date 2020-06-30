import React from 'react';
import Round from './Round';
import Pick from './Pick';
import { picks } from './pickData';
import './BigBoard.css';

const BigBoard = () => {
  return (
    <div className="big-board" >
      {picks.map((round, rndI) => {
        const roundNo = rndI + 1;
        return (
          <Round
            round={roundNo}
          >
            {round.map((pick, pckI) => {
              const pickNo = rndI * 14 + pckI + 1;
              return (
                <Pick key={pickNo}
                  pick={pick}
                  pickNo={pickNo}
                  roundNo={roundNo}
                  roundPick={pckI+1}
                />
                );
            })}
          </Round>
        );
      })}
    </div>
  );
}

export default BigBoard;