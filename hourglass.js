export class Hourglass {

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;

        this.resetCanvas();
    }

    resetCanvas() {
        this.ctx.clearRect(0,0,this.width,this.height);
        this.ctx.fillStyle = '#444';
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    updateTime(time) {
        this.resetCanvas();

        // Draw the new pixels
        const rows = Math.floor(time / this.width);
        const remainder = time%this.width;

        // Fill in the pixels
        this.ctx.fillStyle = '#888';
        this.ctx.fillRect(0,0, this.width, rows);
        this.ctx.fillRect(0,rows, remainder, 1)
    }


}
