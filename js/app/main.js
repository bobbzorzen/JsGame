console.log("main.js")
require(["Konva", "Ball"], function(Konva, Ball) {

    const STAGE_WIDTH = 500;
    const STAGE_HEIGHT = 500;
    const BALL_RADIUS = 10;
    const BASE_SPEED = 2;

    console.log("Konva: ", Konva);
    var stage = new Konva.Stage({
        width: STAGE_WIDTH,
        height: STAGE_HEIGHT,
        container: 'bucket' // or "#containerId" or ".containerClass"
    });
    let layer = new Konva.Layer({});
    stage.add(layer);


    let ball = new Ball(BALL_RADIUS, BASE_SPEED);
    layer.add(ball.getKonva());
    ball.getKonva().on("click", (e) => {
        console.log("e")
        ball.launch();
    });
    ball.getKonva().on("mousedown", (e) => {
        console.log("keywodn e: ", e);
    })

    window.addEventListener("mouseup", (e) => {
        console.log("e: ", e);
    })

    ball.reset(STAGE_WIDTH, STAGE_HEIGHT);

    setInterval(() => {
        ball.move(STAGE_WIDTH, STAGE_HEIGHT);
        stage.draw();
    }, 1000/60);
});
