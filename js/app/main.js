console.log("main.js")
require(["Konva", "Ball"], function(Konva, Ball) {

    const STAGE_WIDTH = 500;
    const STAGE_HEIGHT = 500;

    console.log("Konva: ", Konva);
    var stage = new Konva.Stage({
        width: STAGE_WIDTH,
        height: STAGE_HEIGHT,
        container: 'bucket' // or "#containerId" or ".containerClass"
    });
    let layer = new Konva.Layer({});
    stage.add(layer);


    let ball = new Ball(10, 2);
    layer.add(ball.getKonva());

    setInterval(() => {
        ball.move(STAGE_WIDTH, STAGE_HEIGHT);
        stage.draw();
    }, 1000/60);
});
