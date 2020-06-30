const RODS = 'Team Ramrod';
const MUDS = 'Pecan Mudslides';
const FISH = 'Blowfish';
const RAFT = 'Havana Raft Runners';
const ROAD = 'Roadside Armadillos';
const CITY = 'River City Wranglers';
const GERS = 'Avengers';
const TOBA = 'Manitoba Sharpshooters';
const RYNO = 'Rynos';
const NECK = 'Steel City Roughnecks';
const WWYC = 'West Willow Yacht Club';
const MAHI = 'Great Mahi Mahi';
const SACK = 'Ransackers';
const BUZZ = 'Buzzards';


let pickOrder = [
  RODS,
  MUDS,
  FISH,
  RAFT,
  ROAD,
  CITY,
  GERS,
  TOBA,
  RYNO,
  NECK,
  WWYC,
  MAHI,
  SACK,
  BUZZ
];

function Pick(team) {
  this.team = team;
  this.position = null;
  this.player = null
}

const oddRnd = pickOrder.map(tm => new Pick(tm));
const evenRnd = [...oddRnd].reverse();
const twoRnds = [[...oddRnd], [...evenRnd]];

export const picks = [...Array(8)].flatMap(_ => twoRnds);