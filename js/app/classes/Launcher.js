define(["Class", "Display"], function (Class, Display) {
    
    var Launcher = Class.extend({
        init:function(_title, _width, _height) {
            var display = new Display(_title, _width, _height);
        }
    });

    return Launcher;

})