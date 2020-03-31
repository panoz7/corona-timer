export class Hourglass {

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
        this.currentTime = 0; 
        this.resetCanvas();
    }

    resetCanvas() {
        this.ctx.clearRect(0,0,this.width,this.height);
        this.ctx.fillStyle = '#444';
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.drawDays();
    }

    drawDays() {
        const secondsPerDay = 24 * 60 * 60; 
        const rowsPerDay = secondsPerDay / this.width;
        
        // Calculate how many days tall the canvas is
        const days = this.height / rowsPerDay;

        // Iterate through the days 
        for (let day = 1; day <= days; day++) {

            // Draw the day line
            this.ctx.fillStyle = '#888';
            this.ctx.fillRect(0, day * rowsPerDay, this.width, 1)
        }

        // console.log(rowsPer/Day);
    }

    updateTime(time) {
        // this.resetCanvas();

        // Draw the new pixels
        const rows = Math.floor(time / this.width);
        const remainder = time%this.width;

        // Fill in the pixels
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0,0, this.width, rows);
        this.ctx.fillRect(0,rows, remainder, 1)
    }

    startAnimating(startTime) {
        this.currentTime = startTime;
        this.updateTime(this.currentTime);

        window.setInterval(() => {
            this.currentTime++;
            this.updateTime(this.currentTime);
        }, 1000)

    }


}
