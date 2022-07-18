const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById("game-canvas");

    const ctx = canvasEl.getContext("2d");
    ctx.fillRect(0,0,canvasEl.width,canvasEl.height)
    // const game = new Game();
    // new GameView(game, ctx).start();


    const movingThingy = new MovingObject({
        pos: [50,150], 
        vel: [1,0], 
        radius: 15, 
        color: "#00FF00"
    });
    
    movingThingy.draw(ctx);

    setInterval(movingThingy.move.bind(movingThingy), 500)
    
    setInterval(movingThingy.draw.bind(movingThingy, ctx), 500)

  });

console.log("webpack is working")

