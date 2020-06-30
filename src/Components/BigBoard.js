import React from 'react';
import Pick from './Pick';
import { picks } from './pickData';


const BigBoard = () => {
  return (
    <div>
      {picks.map((round, rndI) => {
          return round.map((pick, pckI) => {
            const pickNo = rndI * 14 + pckI + 1;
            const roundNo = rndI + 1;
            return (
              <Pick key={pickNo}
                pick={pick}
                pickNo={pickNo}
                roundNo={roundNo}
                roundPick={pckI+1}
              />
              );
          });
        })}
    </div>
  );
}

export default BigBoard;