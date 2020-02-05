import Level from './level';
import Player from './player';
import { SpaceTrack } from './space_track';
import Asteroid from './asteroid';

export default class Game {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
        this.dimensions = { width: canvasContext.canvas.width, height: canvasContext.canvas.height};
        this.registerEvents();
        this.restart();
        this.count = 0;

        this.changeLanes = this.changeLanes.bind(this);
        this.play = this.play.bind(this);
    }

    animate() {
        this.spaceTrack.animate(this.canvasContext);
        this.level.animate(this.canvasContext);
        this.player.animate(this.canvasContext);

        if (this.gameOver()) {
            console.log("gameover");
            alert(this.score);
            this.restart();
        }

        if (this.running) {
            requestAnimationFrame(this.animate.bind(this));
        }

        this.drawScore();
       
        //Run X Frames for testing purposes
        // this.count++; 
        // if (this.count >= X) {
        //     this.running = false;
        // }
    }

    play() {
        this.running = true;
        this.animate();
        this.scoreTracker();
    }

    restart() {
        this.running = false;
        this.score = 0;
        this.spaceTrack = new SpaceTrack(this.dimensions);
        this.level = new Level(this.dimensions, this.canvasContext);
        this.player = new Player(this.dimensions);
        this.asteroid = new Asteroid(this.dimensions, this.canvasContext);

        this.animate();
    }

    registerEvents() {
        this.canvasContext.canvas.addEventListener("keydown", e => {
            this.changeLanes(e);
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

    gameOver() {
        if (this.level.collision(this.player.playerBounds()) === true) {
            return true;
        }
    }

    scoreTracker() {
        setInterval(() => {
            this.score += 1;
        }, 50);
    }

    drawScore() {
        const loc = {x: 6/7 * this.dimensions.width, y: this.dimensions.height / 5}

        this.canvasContext.font = "bold 30pt serif";
        this.canvasContext.fillStyle = "white";
        this.canvasContext.fillText(this.score, loc.x, loc.y);
        this.canvasContext.strokeStyle = "black";
        this.canvasContext.lineWidth = 2;
        this.canvasContext.strokeText(this.score, loc.x, loc.y);
    }
}