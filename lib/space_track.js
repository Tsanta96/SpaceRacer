export const SPACE_TRACK_CONSTANTS = {
    LANES: [280, 360, 440, 520]
}

// LANE COORDINATES (widths):
// lane 1: 240 - 320
// lane 2: 320 - 400
// lane 3: 400 - 480
// lane 4: 480 - 560


export class SpaceTrack {
    constructor(dimensions) {
        this.dimensions = dimensions;
    }

    animate(ctx) {
        this.drawSpaceTrack(ctx);
    }

    drawSpaceTrack(ctx) {
        //background
        ctx.fillStyle = '#00022c';
        // ctx.fillStyle = 'rgba(255, 255, 255, .4)';
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

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