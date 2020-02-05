import { SPACE_TRACK_CONSTANTS } from './space_track';

const CONSTANTS = {
    ASTEROID_LANES: SPACE_TRACK_CONSTANTS.LANES,
}

export default class Asteroid {
    constructor(dimensions, yCoordinate) {
        this.dimensions = dimensions;
        this.x = ASTEROID_LANES[Math.floor(Math.random() * lanes.length)];
        this.y = yCoordinate;
        this.passed = false;
    }

    animate(ctx) {
        this.drawAsteroids(ctx);
    }

    drawAsteroid(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.dimensions.width, this.dimensions.height);
    }
}