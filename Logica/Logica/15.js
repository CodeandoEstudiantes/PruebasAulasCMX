class Ball {
    constructor(...type) {
        if (type.length == 0) {
            this.ballType = "Regular";
        }
        else {
            this.ballType = type.toString();
        }
    }
};

var ball1 = new Ball();
var ball2 = new Ball("Super");

ball1.ballType
ball2.ballType