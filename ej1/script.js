const times = 5;

const startButton = document.getElementById('start-button');
const container = document.getElementById('container');

const form = document.getElementById('numberForm');
form.style.display = 'none';

let list = [];

startButton.addEventListener('click', () => {
	container.innerHTML = '';
	list = [];
	startButton.style.display = 'none';
	game();
});

function delay(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

async function game() {
	if (list.length > 4) {
		//startButton.style.display = 'block';
		showEndScreen();
		return 0;
	}

	form.style.display = 'none';
	let number = 0;

	while (list[list.length - 1] == number || number == 0) {
		number = generateNumber();
	}

	let p = document.createElement('div');
	p.innerText = number;
	container.appendChild(p);

	list.push(number);
	console.log(list);

	await delay(1000);
	container.removeChild(p);
	return game();
}

function generateNumber() {
	let randomNumber = Math.round(Math.random() * 15 - 5);
	return randomNumber;
}

function showEndScreen() {
	form.style.display = 'block';
	console.log(calculateResult(list));
}

// Handle form submission
form.addEventListener('submit', () => {
	const numberValue = document.getElementById('numberInput').value;
	console.log(calculateResult(list));
	if (numberValue == calculateResult(list)) {
		alert('Ganaste!');
	} else {
		alert('GAME OVER INSERT COIN');
	}
});

function calculateResult(array) {
	let result = 0;
	for (let i = 0; i < array.length; i++) {
		result = result + array[i];
	}

	return result;
}
