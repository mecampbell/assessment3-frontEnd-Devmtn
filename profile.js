console.log('is this thing on?')

const favColor = document.querySelector('#color');
const favPlace = document.querySelector('#place');
const favRitual = document.querySelector('#ritual');
const contactInfo = document.querySelector('#contact');

const ifColorClicked = (e) => {
    alert('Blue')
};

const ifPlaceClicked = (e) => {
    alert('Portland')
};

const ifRitualClicked = (e) => {
    alert('Satanic, just kidding, probably eggnog or something')
};

const ifContactClicked = (e) => {
    alert('michaelmichael323@hotmail.com')
}

favColor.addEventListener('click', ifColorClicked);
favPlace.addEventListener('click', ifPlaceClicked);
favRitual.addEventListener('click', ifRitualClicked);
contactInfo.addEventListener('click', ifContactClicked);