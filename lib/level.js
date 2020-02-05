import Player from './player';
import Asteroid from './asteroid';
import levelConstants from './util/level_constants';
import { SPACE_TRACK_CONSTANTS } from './space_track';

const CONSTANTS = {
    ASTEROID_LANES: SPACE_TRACK_CONSTANTS.LANES,
    ASTEROID_SPEED: 3,
    // ASTEROID_WIDTH: 80,
    ASTEROID_SPACING: 300,
    WARM_UP_SECONDS: 1,
    LEVELS: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]
}

export default class Level {
    constructor(dimensions, ctx) {
        this.dimensions = dimensions;
        this.ctx = ctx;
        this.level = CONSTANTS.LEVELS[0]

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
        this.drawLevel(ctx);
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
            // asteroid.y += CONSTANTS.ASTEROID_SPEED;
            asteroid.y += levelConstants(this.level).ASTEROID_SPEED;
        })

        //Once an asteroid has left the screen
        if (this.asteroids[0].y >= this.dimensions.height) {
            this.asteroids.shift();
            const newAsteroid = this.generateAsteroid(this.ctx, -1 * CONSTANTS.ASTEROID_SPACING);
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

    increaseLevel(score) {
        const divisor = 25;
        switch (true) {
            case score <= divisor:
                this.level = CONSTANTS.LEVELS[0]
                console.log(this.level);
                break;
            case (score / divisor) < 2:
                this.level = CONSTANTS.LEVELS[1]
                console.log(this.level);
                break;
            case (score / divisor) < 3:
                this.level = CONSTANTS.LEVELS[2]
                console.log(this.level);
                break;
            case (score / divisor) < 4:
                this.level = CONSTANTS.LEVELS[3]
                console.log(this.level);
                break;
            case (score / divisor) < 5:
                this.level = CONSTANTS.LEVELS[4]
                console.log(this.level);
                break;
            case (score / divisor) < 6:
                this.level = CONSTANTS.LEVELS[5]
                console.log(this.level);
                break;
            case (score / divisor) < 7:
                this.level = CONSTANTS.LEVELS[6]
                console.log(this.level);
                break;
            case (score / divisor) < 8:
                this.level = CONSTANTS.LEVELS[7]
                console.log(this.level);
                break;
            case (score / divisor) < 9:
                this.level = CONSTANTS.LEVELS[8]
                console.log(this.level);
                break;
            default:
                console.log("default", score);
        }

        // let newLevel = levelCount / 6
        // this.level = CONSTANTS.LEVELS[newLevel];
        // console.log(this.level);
    }

    drawLevel(ctx) {
        if (this.level !== undefined) {
            const loc = {x: 1/15 * this.dimensions.width, y: this.dimensions.height / 8}

            this.ctx.font = "30px Arial";
            this.ctx.fillStyle = "white";
            this.ctx.fillText(this.level, loc.x, loc.y);
            this.ctx.strokeStyle = "black";
            this.ctx.lineWidth = 2;
        }
    }
}