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
	{ name: 'hellbat', cost: 100, img: 'hellbat.jpg' },
	{ name: 'widow mine', cost: 100, img: 'widow_mine.jpg' },
	{ name: 'tank', cost: 275, img: 'tank.jpg' },
	{ name: 'cyclone', cost: 250, img: 'cyclone.jpg' },
	{ name: 'thor', cost: 500, img: 'thor.jpg' },
	{ name: 'viking', cost: 225, img: 'viking.jpg' },
	{ name: 'medivac', cost: 200, img: 'medivac.jpg' },
	{ name: 'banshee', cost: 250, img: 'banshee.jpg' },
	{ name: 'raven', cost: 300, img: 'raven.jpg' },
	{ name: 'battlecruiser', cost: 700, img: 'battlecruiser.jpg' },
	{ name: 'drone', cost: 50, img: 'drone.jpg' },
	{ name: 'queen', cost: 150, img: 'queen.jpg' },
	{ name: 'zergling', cost: 25, img: 'zergling.jpg' },
	{ name: 'baneling', cost: 75, img: 'baneling.jpg' },
	{ name: 'roach', cost: 100, img: 'roach.jpg' },
	{ name: 'ravager', cost: 200, img: 'ravager.jpg' },
	{ name: 'hydralisk', cost: 150, img: 'hydralisk.jpg' },
	{ name: 'lurker', cost: 300, img: 'lurker.jpg' },
	{ name: 'infestor', cost: 250, img: 'infestor.jpg' },
	{ name: 'swarm host', cost: 175, img: 'swarm_host.jpg' },
	{ name: 'ultralisk', cost: 500, img: 'ultralisk.jpg' },
	{ name: 'overlord', cost: 100, img: 'overlord.jpg' },
	{ name: 'overseer', cost: 200, img: 'overseer.jpg' },
	{ name: 'mutalisk', cost: 200, img: 'mutalisk.jpg' },
	{ name: 'corruptor', cost: 250, img: 'corruptor.jpg' },
	{ name: 'viper', cost: 300, img: 'viper.jpg' },
	{ name: 'mule', cost: 0, img: 'mule.jpg' },
	{ name: 'broodling', cost: 0, img: 'broodling.jpg' },
	{ name: 'liberator', cost: 300, img: 'liberator.jpg' },
	{ name: 'brood lord', cost: 550, img: 'blood_lord.jpg' },
];

let NUMBER_OF_UNITS;
let randomUnits;
let totalCost;

// Creates random numbers
function getRandomInt (max) {
	return Math.floor(Math.random() * (max + 1));
}

function getRandomUnits () {
	const random = [];
	for (let i = 0; i < NUMBER_OF_UNITS; i += 1) {
		const randomIndex = getRandomInt(units.length - 1);
		random.push(units[randomIndex]);
	}
	return random;
}

// Empties everything when play again is pressed
// and returns new set of units, also runs when page first opens
function reset () {
	NUMBER_OF_UNITS = getRandomInt(4) + 1;
	randomUnits = getRandomUnits();
	totalCost = _.sum(_.map(randomUnits, 'cost'));
	$('#result').text('');
	$('#answer').text('');
	$('#guess').val('').focus();
	let imageHtml = '';
	for (let i = 0; i < randomUnits.length; i += 1) {
		imageHtml += `<img class="unit" src="images/${randomUnits[i].img}" alt="${randomUnits[i].name}" title="${randomUnits[i].name}">`;
	}
	$('.image-container').html(imageHtml);
}

// When user submits the numbers, this function checks if
// they got the answer correct or not and returns appropriate response.
$('#submit').on('click', () => {
	let guess = $('#guess').val();
	guess = parseInt(guess, 10);
	if (totalCost === guess) {
		$('#result').text('Correct!').removeClass('text-danger')
			.addClass('text-success');
	} else if (totalCost < guess) {
		$('#result').text('Wrong! (too much) ').removeClass('text-success')
			.addClass('text-danger');
	} else {
		$('#result').text('Wrong! (too little) ').removeClass('text-success')
			.addClass('text-danger');
	}
});

// rest when play again is pressed
$('#playAgain').on('click', reset);
// reveals answer
$('#showAnswer').on('click', () => {
	$('#answer').text(`Total cost (minerals+gas) is ${totalCost}`);
});

// Makes it so when enter is pressed, input is submitted
const input = document.getElementById('guess');
input.addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		event.preventDefault();
		document.getElementById('submit').click();
	}
});
$(document).ready(reset);
