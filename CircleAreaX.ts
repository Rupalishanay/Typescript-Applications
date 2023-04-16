
class Circle
{
  Radius : number;
  PI : 3.14;

  constructor(Data : number)
  {
    this.Radius = Data;
    this.PI = 3.14;
  }

  CalculateArea() : number
  {
    let Ans : number = 0;
    Ans = this.PI * this.Radius * this.Radius;
    return Ans; 
  }
}

class CircleX extends Circle
{
  constructor(Data : number)
  {
    super(Data);
  }

  CalculateCircumference() : number
  {
    let Ans : number = 0;
    Ans = 2 * this.PI * this.Radius;
    return Ans;
  }
}

var obj1 = new CircleX(11.8);
var obj2 = new CircleX(10.5);
var Ret : number = 0;

Ret = obj1.CalculateArea();
console.log("Area is "+Ret);
Ret = obj1.CalculateCircumference();
console.log("Circumference is "+Ret);

Ret = obj2.CalculateArea();
console.log("Area is "+Ret);
Ret = obj2.CalculateCircumference();
console.log("Circumference is "+Ret);
