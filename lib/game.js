import { Level } from './level';
import Player from './player';
import { SpaceTrack } from './space_track';
import Asteroid from './asteroid';

export default class Game {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
        this.dimensions = { width: canvasContext.canvas.width, height: canvasContext.canvas.height};
        this.levelCount = 0;
        this.playMusic = false;
        this.registerEvents();
        this.setScoreBoard();
        this.restart();
        // this.setSounds();

        this.changeLanes = this.changeLanes.bind(this);
        this.play = this.play.bind(this);
        this.setScoreBoard = this.setScoreBoard.bind(this);
    }

    setScoreBoard() {
        for (let i = 1; i <= 10; i++) {
            if (!localStorage[i]) localStorage.setItem(i, 0);
        }
    }

    shiftScoreIdx(idx) {
        for (let i = 10; i > idx; i--) {
            localStorage[i] = localStorage[i-1]
            console.log("i", i)
            console.log("localStorage[i]", localStorage[i]);
        }

        return localStorage;
    }

    logScore(score) {
        //BEHAVIOR:
        //Logs top 10 highest scores
        //10 spots start off as "Not attempted"
        //After the end of each run, checks the values in the local storage object
        //If any "Not attempted values", substitute value in for those first.
        //If the score is higher than any of the top 10, then add the value in its respective place and remove the last value.
        for (let i = 1; i <= 10; i++) {
            if (score > localStorage[i]) {
                this.shiftScoreIdx(i);
                localStorage[i] = score;
                return;
            }
        }

        console.log("keys", Object.keys(localStorage));
        console.log("values", Object.values(localStorage));
    }

    animate() {
        this.spaceTrack.animate(this.canvasContext);
        this.level.animate(this.canvasContext);
        this.player.animate(this.canvasContext);

        if (this.gameOver()) {
            alert("EXPLOSION!!");
            const yourScore = this.score;
            // ------------------------
            this.logScore(yourScore);
            // ------------------------
            console.log('score ---> ', yourScore);
            document.getElementById('your-score').innerText = `Your score was ${yourScore}!`;
            this.clearLevelIndicator();
            this.restart();
            document.getElementById('main-menu').classList.remove('clear');
            document.getElementById('main-menu-screen').classList.remove('clear');
        }

        if (this.running) {
            requestAnimationFrame(this.animate.bind(this));
        }

        this.drawScore();
        this.increaseLevel();
    }

    play() {
        this.running = true;
        this.animate();

        // Removes the Uncaught TypeError of "this.scoreTracer is not a function" 
        // in console
        try {
            this.scoreTracker();
        } catch (error) {
            
        }
        // Have to make this.scoreTracker null, otherwise everytime we call
        // this.scoreTracker() on restart the speed of the score increases
        this.scoreTracker = null;
    }

    restart() {
        this.running = false;
        this.score = 0;
        this.spaceTrack = new SpaceTrack(this.dimensions, this.canvasContext);
        this.level = new Level(this.dimensions, this.canvasContext);
        this.player = new Player(this.dimensions, this.canvasContext);
        this.asteroid = new Asteroid(this.dimensions, this.canvasContext);

        this.animate();
    }

    registerEvents() {
        this.canvasContext.canvas.addEventListener("keydown", e => {
            this.changeLanes(e);
        })
        document.getElementById('sound-icon').addEventListener("click", () => {
            this.toggleMusic();
        })
        document.getElementById('play-game').addEventListener("click", () => {
            this.playGame();
        })
        document.getElementById('info').addEventListener("click", () => {
            this.openInfo();
        })
        document.getElementById('high-scores').addEventListener("click", () => {
            this.openHighScores();
        })
    }

    changeLanes(event) {
        if (!this.running) {
            this.play();
        }
        if (event.key === "ArrowLeft") {
            this.player.movePlayer(-1);
        } else if (event.key === "ArrowRight") {
            this.player.movePlayer(1);
        }
    }

    toggleMusic() {
        const soundIcon = document.getElementById('sound-icon');
        const audioEl = document.getElementById('welcome-audio');
        if (!this.playMusic) {
            this.playMusic = true;
            soundIcon.classList.toggle('sound-icon-playing');
            audioEl.play();
        } else {
            this.playMusic = false;
            soundIcon.classList.remove('sound-icon-playing');
            audioEl.pause();
        }
    }

    playGame() {
        document.getElementById('main-menu').classList.add('clear');
        document.getElementById('main-menu-screen').classList.add('clear');
        this.play();
        document.getElementById('game-canvas').focus();
        this.toggleMusic();
    }

    openInfo() {
        document.getElementById('info-page').classList.remove('clear');
        document.getElementById('info-page').classList.add('info-page');

        //Back to main screen
        document.getElementById('info-back-button').addEventListener('click', () => {
            document.getElementById('info-page').classList.remove('info-page');
            document.getElementById('info-page').classList.add('clear');
        })
    }

    openHighScores() {
        document.getElementById('high-scores-page').classList.remove('clear');
        document.getElementById('high-scores-page').classList.add('high-scores-page');

        //Back to main page
        document.getElementById('high-scores-back-button').addEventListener('click', () => {
            document.getElementById('high-scores-page').classList.remove('high-scores-page');
            document.getElementById('high-scores-page').classList.add('clear');
        })

        // Render ranking and scores
        let scoresTable = document.getElementById('high-scores-display');
        let tr = document.createElement("TR");
        for (let i = 1; i <=10; i++) {
            let row = document.createElement("TR")
            let rankTd = document.createElement("TD");
            let scoreTd = document.createElement("TD");
            rankTd.innerText = i;
            scoreTd.innerText = localStorage[i];
            row.appendChild(rankTd);
            row.appendChild(scoreTd);
            scoresTable.appendChild(row);
        }
    }

    gameOver() {
        if (this.level.collision(this.player.playerBounds()) === true) {
            return true;
        }
    }

    scoreTracker() {
        setInterval(() => {
            this.score += 1;
        }, 100);
    }

    drawScore() {
        const loc = {x: 7/8 * this.dimensions.width, y: this.dimensions.height / 8}

        this.canvasContext.font = "30px Arial";
        this.canvasContext.fillStyle = "white";
        this.canvasContext.fillText(this.score, loc.x, loc.y);
        this.canvasContext.strokeStyle = "black";
        this.canvasContext.lineWidth = 2;
    }

    increaseLevel() {
        this.level.increaseLevel(this.score);
    }

    clearLevelIndicator() {
        document.getElementById('mercury').classList.remove('select-planet');
        document.getElementById('venus').classList.remove('select-planet');
        document.getElementById('earth').classList.remove('select-planet');
        document.getElementById('mars').classList.remove('select-planet');
        document.getElementById('jupiter').classList.remove('select-planet');
        document.getElementById('saturn').classList.remove('select-planet');
        document.getElementById('uranus').classList.remove('select-planet');
        document.getElementById('neptune').classList.remove('select-planet');
        document.getElementById('pluto').classList.remove('select-planet');
    }
    
}