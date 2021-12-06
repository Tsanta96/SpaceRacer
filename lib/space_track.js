import "regenerator-runtime/runtime"

export const SPACE_TRACK_CONSTANTS = {
	LANES: [280, 360, 440, 520]
}

export class SpaceTrack {
	constructor(dimensions, ctx) {
		this.dimensions = dimensions;
		this.ctx = ctx;
		this.backgroundImg = new Image();
		this.backgroundImg.src = './assets/images/space_background_2.jpeg';
		this.renderBackground(this.ctx);
	}

	renderBackground(ctx) {
		this.backgroundImg.onload = () => {
			ctx.drawImage(this.backgroundImg, 0, 0, this.dimensions.width, this.dimensions.height);
			this.drawSpaceTrack(ctx);
		}
	}

	animate(ctx) {
		this.drawSpaceTrack(ctx);
	}

	drawSpaceTrack(ctx) {
		ctx.drawImage(this.backgroundImg,0,0, this.dimensions.width, this.dimensions.height);

		//lanes
		let pos = 160;
		for (let i = 0; i < 5; i++) {
			ctx.beginPath();
			const newPos = pos + this.dimensions.width / 10
			ctx.moveTo(newPos, 0);
			ctx.lineTo(newPos, 400)
			pos += this.dimensions.width / 10;
			ctx.lineWidth = 5;
			ctx.strokeStyle = '#cecece';
			ctx.stroke();
		}
	}
}