console.log("test");
requirejs.config({
    "baseUrl":"js",
    "paths": {
        //Libs
        "Class":"libs/class",
        "Jquery":"libs/jquery",
        "Konva":"libs/konva",
        
        //Classes
        "Launcher":"app/classes/Launcher",
        "Ball": "app/classes/GameEntities/Ball"
    }
});

require(["app/main"]);