define(["Class", "Konva"], function (Class, Konva) {

    let radius, speed, konva, xSpeed, ySpeed;

    var Ball = Class.extend({
        init: function (_radius, _speed) {
            radius = _radius;
            speed = _speed;

            // Launch speed in x and y should together be the value of speed
            // A 45 degree angled launch should have 50% x speed and 50% y speed

            createBall();
        }
    });

    //Private Methods
    function createBall() {
        konva = new Konva.Circle({
            radius: radius,
            fill: '#CECECE',
            stroke: 'C0C0C0',
            strokeWidth: 1,
            x: 50,
            y: 50
        });
        xSpeed = speed / 2;
        ySpeed = speed;
    }

    //Getters
    Ball.prototype.getWidth = function () {
        return konva.radius();
    };
    Ball.prototype.getKonva = function () {
        return konva;
    };
    Ball.prototype.move = function (stageWidth, stageHeight) {
        let ballX = konva.x();
        let ballY = konva.y();
        if ((ballX + radius) > stageWidth || (ballX - radius) < 0) { xSpeed *= -1 };
        if ((ballY + radius) > stageHeight || (ballY - radius) < 0) { ySpeed *= -1 };
        konva.x(konva.x() + xSpeed);
        konva.y(konva.y() + ySpeed);
    };

    return Ball;
});