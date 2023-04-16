var Circle = /** @class */ (function () {
    function Circle(Data) {
        this.Radius = Data;
        this.PI = 3.14;
    }
    Circle.prototype.CalculateArea = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle;
}());
var obj1 = new Circle(11.7);
var obj2 = new Circle(10.4);
var Ret = 0;
var Ret = obj1.CalculateArea();
console.log("Area is : " + Ret);
var Ret = obj2.CalculateArea();
console.log("Area is : " + Ret);
