import { SPACE_TRACK_CONSTANTS } from './space_track';

const CONSTANTS = {
    ASTEROID_LANES: SPACE_TRACK_CONSTANTS.LANES,
}

export default class Asteroid {
    constructor(dimensions, yCoordinate) {
        this.dimensions = dimensions;
        this.x = CONSTANTS.ASTEROID_LANES[Math.floor(Math.random() * CONSTANTS.ASTEROID_LANES.length)];
        this.y = yCoordinate;
        this.passed = false;
        this.Id = 0
    }

    animate(ctx, x, y) {
        this.drawAsteroid(ctx, x, y);
    }

    drawAsteroid(ctx, x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'red';
        ctx.fill();
        this.Id += 1;
    }
}