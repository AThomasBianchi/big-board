import React, { useState } from 'react';

import { picks } from './pickData';

import BigBoard from './BigBoard';
import Status from './Status';

const App = () =>  {
  const [pick, setPick] = useState(0);
  const pickOrder = picks.flatMap(round => round);
  const now = pickOrder[pick].team;
  const next = pickOrder[pick + 1].team;
  const then = pickOrder[pick + 2].team;

  return (
    <div className="App">
      {/* Order */}
      {/* Team */}
      <Status
        pick={pick + 1}
        now={now}
        next={next}
        then={then}
      />
      <BigBoard />
      {/* Key */}
    </div>
  );
}

export default App;