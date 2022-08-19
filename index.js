const units = [
{ name: 'probe', cost: 50, img: 'probe.jpg' },
{ name: 'zealot', cost: 100, img: 'url' },
{ name: 'stalker', cost: 175, img: 'url' },
{ name: 'sentry', cost: 150, img: 'url' },
{ name: 'adept', cost: 125, img: 'url' },
{ name: 'high templar', cost: 200, img: 'url' },
{ name: 'dark templar', cost: 250, img: 'url' },
{ name: 'observer', cost: 100, img: 'url' },
{ name: 'warp prism', cost: 250, img: 'url' },
{ name: 'immortal', cost: 375, img: 'url' },
{ name: 'colossus', cost: 500, img: 'url' },
{ name: 'disruptor', cost: 300, img: 'url' },
{ name: 'phoenix', cost: 250, img: 'url' },
{ name: 'void ray', cost: 400, img: 'url' },
{ name: 'oracle', cost: 300, img: 'url' },
{ name: 'tempest', cost: 425, img: 'url' },
{ name: 'carrier', cost: 600, img: 'url' },
{ name: 'mothership', cost: 800, img: 'url' },
{ name: 'scv', cost: 50, img: 'url' },
{ name: 'marine', cost: 50, img: 'url' },
{ name: 'marauder', cost: 125, img: 'url' },
{ name: 'reaper', cost: 100, img: 'url' },
{ name: 'ghost', cost: 275, img: 'url' },
{ name: 'hellion', cost: 100, img: 'url' },
{ name: 'widow mine', cost: 100, img: 'url' },
{ name: 'tank', cost: 275, img: 'url' },
{ name: 'cyclone', cost: 250, img: 'url' },
{ name: 'viking', cost: 225, img: 'url' },
{ name: 'medivac', cost: 200, img: 'url' },
{ name: 'banshee', cost: 250, img: 'url' },
{ name: 'raven', cost: 300, img: 'url' },
{ name: 'battlecruiser', cost: 700, img: 'url' },
{ name: 'drone', cost: 50, img: 'url' },
{ name: 'queen', cost: 150, img: 'url' },
{ name: 'zerling', cost: 25, img: 'url' },
{ name: 'baneling', cost: 75, img: 'url' },
{ name: 'roach', cost: 100, img: 'url' },
{ name: 'ravager', cost: 200, img: 'url' },
{ name: 'hydralisk', cost: 150, img: 'url' },
{ name: 'lurker', cost: 300, img: 'url' },
{ name: 'infestor', cost: 175, img: 'url' },
{ name: 'swarm host', cost: 175, img: 'url' },
{ name: 'ultralisk', cost: 500, img: 'url' },
{ name: 'overlord', cost: 100, img: 'url' },
{ name: 'overseer', cost: 200, img: 'url' },
{ name: 'mutalisk', cost: 200, img: 'url' },
{ name: 'corruptor', cost: 250, img: 'url' },
{ name: 'viper', cost: 300, img: 'url' },
{ name: 'brood lord', cost: 550, img: 'url' }
]

// const get5RandomUnits = () => _.map(_.times(5, () => _.random(0, units.length - 1)), _.propertyOf(units));


function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  function get5RandomUnits() {
    return [...Array(5)].map(() => getRandomInt(units.length - 1)).map(i => units[i]);
  }
//let randomUnits=get5RandomUnits()
//_.sum(_.map(randomUnits, 'cost')) == guess
//let guess = $('input').val();




//$('#submit').on('click', function () {})
//$('#playAgain').on('click', function () {})



//.text-success for green

//.text-danger for red

//https://starcraft.fandom.com/wiki/List_of_StarCraft_II_units#Legacy_of_the_Void


