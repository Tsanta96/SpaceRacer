//index.js
import "regenerator-runtime/runtime";
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
    const gameCanvas = document.getElementById('game-canvas');
    const canvasContext = gameCanvas.getContext('2d');

    const game = new Game(canvasContext);

})