import { SPACE_TRACK_CONSTANTS } from './space_track';

const CONSTANTS = {
    ASTEROID_LANES: SPACE_TRACK_CONSTANTS.LANES,
}

export default class Asteroid {
    constructor(dimensions, yCoordinate) {
        this.dimensions = dimensions;
        this.x = CONSTANTS.ASTEROID_LANES[Math.floor(Math.random() * CONSTANTS.ASTEROID_LANES.length)];
        this.y = yCoordinate;
        this.imageSprite = new Image();
        this.imageSprite.src = './assets/images/asteroid.svg';
        this.Id = Math.floor(Math.random() * 9) + 1;
        
    }

    incrementId() {
        this.Id ++;
    }

    animate(ctx, x, y) {
        this.drawAsteroid(ctx, x, y);
    }

    drawAsteroid(ctx, x, y) {
        ctx.drawImage(this.imageSprite, x-30, y-30, 60, 60);
    }
}