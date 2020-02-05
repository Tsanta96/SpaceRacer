import Player from './player';
import Asteroid from './asteroid';
import { SPACE_TRACK_CONSTANTS } from './space_track';

const CONSTANTS = {
    ASTEROID_LANES: SPACE_TRACK_CONSTANTS.LANES,
    ASTEROID_SPEED: 2,
    ASTEROID_WIDTH: 80,
    ASTEROID_SPACING: 300,
    WARM_UP_SECONDS: 1
}

export default class Level {
    constructor(dimensions, ctx) {
        this.dimensions = dimensions;
        this.ctx = ctx;

        const firstAsteroidDistance =
            0 - (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.ASTEROID_SPEED);
        
        // this.asteroids = [
        //     this.randomAsteroid(firstAsteroidDistance),
        //     this.randomAsteroid(firstAsteroidDistance + CONSTANTS.ASTEROID_SPACING),
        //     this.randomAsteroid(firstAsteroidDistance + (CONSTANTS.ASTEROID_SPACING * 2)),
        // ];

        //call generate asteroids here??
    }

    generateAsteroid(ctx) {
        this.asteroid = new Asteroid(this.dimensions, yCoord);
        this.asteroid.animate(ctx);
    }

    // randomAsteroid() {
    //     const lanes = CONSTANTS.ASTEROID_LANES;
    //     const randLane = lanes[Math.floor(Math.random() * lanes.length)];
    //     const asteroid = {
    //         lane: randLane,
    //         passed: false
    //     }
    //     return asteroid;
    // }

    animate(ctx) {
        this.drawBackground(ctx);
    }

    drawBackground(ctx) {
        ctx.fillStyle = '#00022c';
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }

    moveAsteroids() {
        randomAsteroid.lane 
    }
}