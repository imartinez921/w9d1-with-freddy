module.exports = MovingObject;

function MovingObject (options) {
    this.pos = options.pos;
    this.vel = options.vel; 
    this.radius = options.radius;
    this.color = options.color;
}

MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = 'red';

    ctx.beginPath();
    ctx.arc(
      this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
}

// document.getElementById("").
// return pos[0] = pos[0] + vel[0];
// pos[1] = pos[1] + vel[1];


MovingObject.prototype.move = function () {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    // this.draw(ctx);
}


// VECTORS
// 2D vectors have an x and a y component. 
// A position vector has an x and y position, 
// while a velocity vector has a speed in the x and the y directions.

// Distance between two points
// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)