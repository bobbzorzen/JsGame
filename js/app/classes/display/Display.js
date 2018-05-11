define(["Jquery", "Class"], function($, Class) {

    var canvas, title, width, height, graphics;
    
    var Display = Class.extend({
        init:function(_title, _width, _height) {
            title = _title;
            width = _width;
            height = _height;

            createDisplay();

        }
    });

    //Private Methods
    function createDisplay() {
        document.title = title;
        var body = document.body;
        var canvas = document.createElement("canvas");
        
        canvas.style.width = width;
        canvas.style.height = height;
        canvas.id = "canvas";
        document.body.appendChild(canvas);
        
        graphics = canvas.getContext("2d");
    }

    //Getters
    Display.prototype.getWidth = function () {
        return width;
    };
    Display.prototype.getHeight = function () {
        return height;
    };
    Display.prototype.getTitle = function () {
        return title;
    };
    Display.prototype.getGraphics = function () {
        return graphics;
    };

    return Display;
});