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

        this.changeLanes = this.changeLanes.bind(this);
        this.play = this.play.bind(this);
    }

    animate() {
        console.log(4, "game.js animate()");
        this.spaceTrack.animate(this.canvasContext);
        this.level.animate(this.canvasContext);
        this.player.animate(this.canvasContext);

        if (this.running) {
            requestAnimationFrame(this.animate.bind(this));
        }
    }

    play() {
        this.running = true;
        this.animate();
    }

    restart() {
        this.running = false;
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
}