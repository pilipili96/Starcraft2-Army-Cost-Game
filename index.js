const units = [
{ name: 'probe', cost: 50, img: 'probe.jpg' },
{ name: 'zealot', cost: 100, img: 'zealot.jpg' },
{ name: 'stalker', cost: 175, img: 'stalker.jpg' },
{ name: 'sentry', cost: 150, img: 'sentry.jpg' },
{ name: 'adept', cost: 125, img: 'adept.jpg' },
{ name: 'high templar', cost: 200, img: 'high_templar.jpg' },
{ name: 'dark templar', cost: 250, img: 'dark_templar.jpg' },
{ name: 'observer', cost: 100, img: 'observer.jpg' },
{ name: 'warp prism', cost: 250, img: 'warp_prism.jpg' },
{ name: 'immortal', cost: 375, img: 'immortal.jpg' },
{ name: 'colossus', cost: 500, img: 'colossus.jpg' },
{ name: 'disruptor', cost: 300, img: 'disruptor.jpg' },
{ name: 'phoenix', cost: 250, img: 'phoenix.jpg' },
{ name: 'void ray', cost: 400, img: 'voidray.jpg' }, 
{ name: 'oracle', cost: 300, img: 'oracle.jpg' },
{ name: 'tempest', cost: 425, img: 'tempest.jpg' },
{ name: 'carrier', cost: 600, img: 'carrier.jpg' },
{ name: 'mothership', cost: -800, img: 'mothership.jpg' },
{ name: 'scv', cost: 50, img: 'scv.jpg' },
{ name: 'marine', cost: 50, img: 'marine.jpg' },
{ name: 'marauder', cost: 125, img: 'marauder.jpg' },
{ name: 'reaper', cost: 100, img: 'reaper.jpg' },
{ name: 'ghost', cost: 275, img: 'ghost.jpg' },
{ name: 'hellion', cost: 100, img: 'hellion.jpg' },
{ name: 'widow mine', cost: 100, img: 'widow_mine.jpg' },
{ name: 'tank', cost: 275, img: 'tank.jpg' },
{ name: 'cyclone', cost: 250, img: 'cyclone.jpg' },
{ name: 'viking', cost: 225, img: 'viking.jpg' },
{ name: 'medivac', cost: 200, img: 'medivac.jpg' },
{ name: 'banshee', cost: 250, img: 'banshee.jpg' },
{ name: 'raven', cost: 300, img: 'raven.jpg' },
{ name: 'battlecruiser', cost: 700, img: 'battlecruiser.jpg' },
{ name: 'drone', cost: 50, img: 'drone.jpg' },
{ name: 'queen', cost: 150, img: 'queen.jpg' },
{ name: 'zerling', cost: 25, img: 'zerling.jpg' },
{ name: 'baneling', cost: 75, img: 'baneling.jpg' },
{ name: 'roach', cost: 100, img: 'roach.jpg' },
{ name: 'ravager', cost: 200, img: 'ravager.jpg' },
{ name: 'hydralisk', cost: 150, img: 'hydralisk.jpg' },
{ name: 'lurker', cost: 300, img: 'lurker.jpg' },
{ name: 'infestor', cost: 175, img: 'infestor.jpg' },
{ name: 'swarm host', cost: 175, img: 'swarm_host.jpg' },
{ name: 'ultralisk', cost: 500, img: 'ultralisk.jpg' },
{ name: 'overlord', cost: 100, img: 'overlord.jpg' },
{ name: 'overseer', cost: 200, img: 'overseer.jpg' },
{ name: 'mutalisk', cost: 200, img: 'mutalisk.jpg' },
{ name: 'corruptor', cost: 250, img: 'corruptor.jpg' },
{ name: 'viper', cost: 300, img: 'viper.jpg' },
{ name: 'brood lord', cost: 550, img: 'blood_lord.jpg' }
]

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function get5RandomUnits() {
  var random=[];
  for(let i=0;i<NUMBER_OF_UNITS;i++){
    let randomIndex=getRandomInt(units.length - 1)
    random.push(units[randomIndex]);
}
return random
}
let NUMBER_OF_UNITS;
let randomUnits;
let totalCost;
function reset(){
  NUMBER_OF_UNITS = getRandomInt(4)+1;
  randomUnits=get5RandomUnits()
totalCost=_.sum(_.map(randomUnits, 'cost'))
  $("#result").text('');
  $('#answer').text('')
  $("#guess").val("").focus();
  var imageHtml = '';
  for (let i = 0; i < randomUnits.length; i++) {
    imageHtml += `<img class="unit" src="${randomUnits[i].img}" alt="${randomUnits[i].name}" title="${randomUnits[i].name}">`
  }
  $('.image-container').html(imageHtml)
}

$('#submit').on('click', function () {
let guess = $("#guess").val(); 
guess=parseInt(guess)
if ( totalCost=== guess){
  $("#result").text("Correct!").removeClass("text-danger").addClass("text-success")
}
else{
  $("#result").text("Wrong!").removeClass("text-success").addClass("text-danger")
}
})
$('#playAgain').on('click', reset)
$('#showAnswer').on('click', function(){
  $('#answer').text('Total cost(minerals+gas) is '+ totalCost)
})
reset()







  //     return [...Array(5)].map(() =>getRandomInt(units.length -  1)).map(i => units[i]);
  // add breakdown of each unit cost when show answer clicked
  // add inputs below each units that will checkmark if correct value is inputted 
  // make it so when enter is clicked it submits

