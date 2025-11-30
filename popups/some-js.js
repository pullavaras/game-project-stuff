'use strict';

function showPopup(id) {
    document.getElementById(id).style.display = 'flex';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

// function to show end game popup, message and scrore
function showEndPopup(message, score) {
    document.getElementById('endMessage').innerText = message;
    document.getElementById('finalScore').innerText = 'Lopulliset pisteet: ' + score;
    showPopup('popupEnd');
}
