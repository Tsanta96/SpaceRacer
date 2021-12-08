import { SPACE_TRACK_CONSTANTS } from './space_track';

const CONSTANTS = {
	LANES: SPACE_TRACK_CONSTANTS.LANES,
	PLAYER_STARTING_POS: [360, 440],
	JUMP: 80,
	PLAYER_WIDTH: 20,
	PLAYER_HEIGHT: 20,
}


export default class Player {
	constructor(dimensions, ctx) {
		this.dimensions = dimensions;
		this.ctx = ctx;
		this.x = this.randomPlayerPlacement();
		this.y = 9 / 10 * this.dimensions.height;
		this.vel = 0;
		this.playerSprite = new Image();
		this.playerSprite.src = './assets/images/spaceship.svg';
		this.placePlayer();
	}

	placePlayer() {
		this.playerSprite.onload = () => {
			this.ctx.drawImage(this.playerSprite, this.x - 20, this.y - 20, 40, 40);
		}
	}

	randomPlayerPlacement() {
		const possiblePos = CONSTANTS.PLAYER_STARTING_POS;
		const randPos = possiblePos[Math.floor(Math.random() * possiblePos.length)]
		return randPos;
	}

	animate(ctx) {
		this.drawPlayer(ctx);
	}

	drawPlayer(ctx) {
		ctx.drawImage(this.playerSprite, this.x - 20, this.y - 20, 40, 40);
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
			centerX: this.x,

			topY: this.y - 10,
			topX: this.x,

			leftY: this.y,
			leftX: this.x - 10,

			rightY: this.y,
			rightX: this.x + 10
		};
	}
}