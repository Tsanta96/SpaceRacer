import Player from './player';
import Asteroid from './asteroid';
import { SPACE_TRACK_CONSTANTS } from './space_track';

const CONSTANTS = {
    ASTEROID_LANES: SPACE_TRACK_CONSTANTS.LANES,
    ASTEROID_SPEED: 3,
    ASTEROID_WIDTH: 80,
    ASTEROID_SPACING: 300,
    WARM_UP_SECONDS: 1
}

export default class Level {
    constructor(dimensions, ctx) {
        this.dimensions = dimensions;
        this.ctx = ctx;

        const firstAsteroidDistance = 0 - (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.ASTEROID_SPEED);
        
        this.asteroids = [
            this.generateAsteroid(ctx, firstAsteroidDistance),
            this.generateAsteroid(ctx, (firstAsteroidDistance - CONSTANTS.ASTEROID_SPACING)),
            this.generateAsteroid(ctx, (firstAsteroidDistance - (CONSTANTS.ASTEROID_SPACING * 2))),
        ];
        
    }

    generateAsteroid(ctx, yCoord) {
        return new Asteroid(this.dimensions, yCoord);
    }

    animate(ctx) {
        this.asteroids.forEach(asteroid => {
            asteroid.animate(ctx, asteroid.x, asteroid.y);
        })
        this.moveAsteroids();
        // this.asteroids.forEach(asteroid => {
        //     console.log(asteroid.x, asteroid.y)
        // })
    }

    moveAsteroids() {
        this.asteroids.forEach(asteroid => {
            asteroid.y += CONSTANTS.ASTEROID_SPEED;
        })

        //Once an asteroid has left the screen
        if (this.asteroids[0].y >= this.dimensions.height) {
            this.asteroids.shift();
            const newAsteroid = this.generateAsteroid(this.ctx, 30);
            this.asteroids = [...this.asteroids, newAsteroid];
        }
    }

    collision(playerBounds) {
        // Check if player overlaps with asteroid on x axis
        let collision = false;
 
        this.asteroids.forEach((asteroid, idx) => {
            if ((playerBounds.centerY === asteroid.y) && (playerBounds.centerX === asteroid.x)) {
                collision = true;
            }
        })
        return collision;
    }
}