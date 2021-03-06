import Player from './player';
import Asteroid from './asteroid';
import levelConstants from './util/level_constants';
import { SPACE_TRACK_CONSTANTS } from './space_track';

export const CONSTANTS = {
    ASTEROID_LANES: SPACE_TRACK_CONSTANTS.LANES,
    ASTEROID_SPEED: 3,
    ASTEROID_SPACING: 400,
    WARM_UP_SECONDS: 1,
    PLANET_DURATION: 100,
    LEVELS: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]

}

export class Level {
    constructor(dimensions, ctx) {
        this.dimensions = dimensions;
        this.ctx = ctx;
        this.level = CONSTANTS.LEVELS[0]

        this.createAsteroids();
    }

    createAsteroids() {
        this.clearAsteroids();
        const firstAsteroidDistance = 0 - (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.ASTEROID_SPEED);
        for (let i = 0; i < levelConstants(this.level).NUM_ASTEROIDS; i ++) {
            this.asteroids.push(this.generateAsteroid(this.ctx, firstAsteroidDistance - (CONSTANTS.ASTEROID_SPACING * i)))
        }
    }

    clearAsteroids() {
        return this.asteroids = [];
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
        this.currentPlanetLevel();
    }

    moveAsteroids() {
        this.asteroids.forEach(asteroid => {
            if (asteroid.Id === 1) {
                asteroid.y += levelConstants(this.level).ASTEROID_SPEED - 1;
            } 
            else if ((asteroid.Id === 4) || (asteroid.Id === 5)) {
                asteroid.y += levelConstants(this.level).ASTEROID_SPEED + 1;
            } 
            else if (asteroid.Id === 10) {
                asteroid.y += levelConstants(this.level).ASTEROID_SPEED + 3;
            } 
            else {
                asteroid.y += levelConstants(this.level).ASTEROID_SPEED;
            }
        })

        //Once an asteroid has left the screen
        if (this.asteroids[0].y >= this.dimensions.height) {
            this.asteroids.shift();
            const newAsteroid = this.generateAsteroid(this.ctx, CONSTANTS.ASTEROID_SPACING * -1);
            this.asteroids = [...this.asteroids, newAsteroid];
        }
    }

    collision(playerBounds) {
        const buffer = levelConstants(this.level).ASTEROID_SPEED + 20;
        let collision = false;
        this.asteroids.forEach((asteroid, idx) => {
            if (playerBounds.centerX === asteroid.x) {
                if ((playerBounds.centerY >= asteroid.y) && (playerBounds.centerY <= asteroid.y + buffer)) {
                    collision = true;
            }}
        })
        return collision;
    }

    increaseLevel(score) {
        const divisor = CONSTANTS.PLANET_DURATION;
        switch (true) {
            case score <= divisor:
                this.level = CONSTANTS.LEVELS[0]
                break;
            case (score / divisor) < 2:
                this.level = CONSTANTS.LEVELS[1]
                break;
            case (score / divisor) < 3:
                this.level = CONSTANTS.LEVELS[2]
                break;
            case (score / divisor) < 4:
                this.level = CONSTANTS.LEVELS[3]
                break;
            case (score / divisor) < 5:
                this.level = CONSTANTS.LEVELS[4]
                break;
            case (score / divisor) < 6:
                this.level = CONSTANTS.LEVELS[5]
                break;
            case (score / divisor) < 7:
                this.level = CONSTANTS.LEVELS[6]
                break;
            case (score / divisor) < 8:
                this.level = CONSTANTS.LEVELS[7]
                break;
            case (score / divisor) < 9:
                this.level = CONSTANTS.LEVELS[8]
                break;
            default:
                console.log("default", score);
        }
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

    currentPlanetLevel() {
        switch(this.level) {
            case "Mercury":
                document.getElementById('mercury').classList.add('select-planet');
                break;
            case "Venus":
                document.getElementById('mercury').classList.remove('select-planet');
                document.getElementById('venus').classList.add('select-planet');
                break;
            case "Earth":
                document.getElementById('venus').classList.remove('select-planet');
                document.getElementById('earth').classList.add('select-planet');
                break;
            case "Mars":
                document.getElementById('earth').classList.remove('select-planet');
                document.getElementById('mars').classList.add('select-planet');
                break;
            case "Jupiter":
                document.getElementById('mars').classList.remove('select-planet');
                document.getElementById('jupiter').classList.add('select-planet');
                break;
            case "Saturn":
                document.getElementById('jupiter').classList.remove('select-planet');
                document.getElementById('saturn').classList.add('select-planet');
                break;
            case "Uranus":
                document.getElementById('saturn').classList.remove('select-planet');
                document.getElementById('uranus').classList.add('select-planet');
                break;
            case "Neptune":
                document.getElementById('uranus').classList.remove('select-planet');
                document.getElementById('neptune').classList.add('select-planet');
                break;
            case "Pluto":
                document.getElementById('neptune').classList.remove('select-planet');
                document.getElementById('pluto').classList.add('select-planet');
                break;
            default:
                console.log("testing")
        }
    }

    // drawExplosion(ctx) {
    //     this.ctx.drawImage(this.explosionSprite, this.x - 20, this.y - 20, 40, 40);
    // }
}