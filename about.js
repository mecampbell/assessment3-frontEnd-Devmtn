console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

function compliment (evt) {
	evt.preventDefault();

	alert('You beautiful bastard, I love you!')
}

let form = document.querySelector('form#contact');
let hoverAlert = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
hoverAlert.addEventListener('mouseover', compliment);