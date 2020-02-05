import { SPACE_TRACK_CONSTANTS } from './space_track';

const CONSTANTS = {
    LANES: SPACE_TRACK_CONSTANTS.LANES,
    PLAYER_STARTING_POS: [360, 440],
    JUMP: 80,
    PLAYER_WIDTH: 20,
    PLAYER_HEIGHT: 20,
}


export default class Player {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.x = this.randomPlayerPlacement();
        this.y = 9 / 10 * this.dimensions.height;
        this.vel = 0;
        console.log(CONSTANTS.LANES);
    }

    randomPlayerPlacement() {
        const possiblePos = CONSTANTS.PLAYER_STARTING_POS;
        const randPos = possiblePos[Math.floor(Math.random() * possiblePos.length)]
        return randPos;
    }

    animate(ctx) {
        this.drawPlayer(ctx);
        // console.log(this.playerBounds());
    }

    drawPlayer(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, CONSTANTS.PLAYER_WIDTH, 0, 2 * Math.PI, false);
        ctx.fillStyle = '#f3d078';
        ctx.fill();
    }

    movePlayer(direction) {
        const bounds = [CONSTANTS.LANES[0], CONSTANTS.LANES[CONSTANTS.LANES.length - 1]]
        if ((this.x + CONSTANTS.JUMP * direction >= bounds[0]) && 
        (this.x + CONSTANTS.JUMP * direction <= bounds[1])) {
            this.x += CONSTANTS.JUMP * direction
        } else {
            console.log("Out of bounds");
        }
    }

    playerBounds() {
        return {
            centerY: this.y,
            centerX: this.x
            // left: this.x + CONSTANTS.PLAYER_WIDTH,
            // right: this.x - CONSTANTS.PLAYER_WIDTH,
            // top: this.y - CONSTANTS.PLAYER_WIDTH
        };
    }
}