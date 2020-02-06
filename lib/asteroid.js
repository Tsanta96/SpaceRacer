import { SPACE_TRACK_CONSTANTS } from './space_track';

const CONSTANTS = {
    ASTEROID_LANES: SPACE_TRACK_CONSTANTS.LANES,
}

export default class Asteroid {
    constructor(dimensions, yCoordinate) {
        this.dimensions = dimensions;
        this.x = CONSTANTS.ASTEROID_LANES[Math.floor(Math.random() * CONSTANTS.ASTEROID_LANES.length)];
        this.y = yCoordinate;
        // this.passed = false;
        this.imageSprite = new Image();
        this.imageSprite.src = './assets/images/asteroid.svg';
        this.Id = 0
    }

    animate(ctx, x, y) {
        this.drawAsteroid(ctx, x, y);
    }

    drawAsteroid(ctx, x, y) {
        ctx.drawImage(this.imageSprite, x-30, y-30, 60, 60);

        // ctx.beginPath();
        // ctx.arc(x-30, y-30, 3, 0, 2 * Math.PI, false);
        // ctx.fillStyle = 'red';
        // ctx.fill();
        this.Id += 1;
    }
}