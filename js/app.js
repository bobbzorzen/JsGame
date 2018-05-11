console.log("test");
requirejs.config({
    "baseUrl":"js",
    "paths": {
        //Libs
        "Class":"libs/class",
        "Jquery":"libs/jquery",
        
        //Classes
        "Launcher":"app/classes/Launcher",
        "Display": "app/classes/display/Display"
    }
});

require(["app/main"]);