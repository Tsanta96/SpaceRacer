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
        debugger;
        this.dimensions = dimensions;
        this.ctx = ctx;

        const firstAsteroidDistance = 0;
            // 0 - (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.ASTEROID_SPEED);
        
        this.asteroids = [
            this.generateAsteroid(ctx, 20),
            this.generateAsteroid(ctx, 100),
            this.generateAsteroid(ctx, 200),

            // this.generateAsteroid(ctx, firstAsteroidDistance),
            // this.generateAsteroid(ctx, (firstAsteroidDistance - CONSTANTS.ASTEROID_SPACING)),
            // this.generateAsteroid(ctx, (firstAsteroidDistance - (CONSTANTS.ASTEROID_SPACING * 2))),
        ];
        console.log(this.asteroids);
    }

    generateAsteroid(ctx, yCoord) {
        return new Asteroid(this.dimensions, yCoord);
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
        debugger
        this.asteroids.forEach(asteroid => {
            asteroid.animate(ctx, asteroid.x, asteroid.y);
        })
    }

    moveAsteroids() {
        randomAsteroid.lane 
    }
}