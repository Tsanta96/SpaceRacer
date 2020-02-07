export const SPACE_TRACK_CONSTANTS = {
    LANES: [280, 360, 440, 520]
}

// LANE COORDINATES (widths):
// lane 1: 240 - 320
// lane 2: 320 - 400
// lane 3: 400 - 480
// lane 4: 480 - 560


export class SpaceTrack {
    constructor(dimensions, ctx) {
        this.dimensions = dimensions;
        this.ctx = ctx;
        this.backgroundImg = new Image();
        this.backgroundImg.src = './assets/images/space_background_2.jpeg';
        this.renderBackground(this.ctx);
        // this.playerSprite = new Image();
        // this.playerSprite.src = './assets/images/spaceship.svg';
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
        //background
        // ctx.fillStyle = '#00022c';
        // ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

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