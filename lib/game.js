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
        this.restart();
        // this.setSounds();

        this.changeLanes = this.changeLanes.bind(this);
        this.play = this.play.bind(this);
    }

    animate() {
        this.spaceTrack.animate(this.canvasContext);
        this.level.animate(this.canvasContext);
        this.player.animate(this.canvasContext);

        if (this.gameOver()) {
            alert("EXPLOSION!!");
            this.clearLevelIndicator();
            this.restart();
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