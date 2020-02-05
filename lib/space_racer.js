//index.js

import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
    const gameCanvas = document.getElementById('game-canvas');
    const canvasContext = gameCanvas.getContext('2d');

    // const backgroundCanvas = document.getElement('background-canvas');
    // const backgroundCanvasContext = gameCanvas.getContext('2d');

    // const foregroundCanvas = document.getElement('background-canvas');
    // const foregroundCanvasContext = gameCanvas.getContext('2d');
    console.log(1, "space_racer.js");
    new Game(canvasContext);

})