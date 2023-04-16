
class Circle
{
  Radius : number;
  PI : number;

  constructor(Data : number)
 { 
   this.Radius = Data;
   this.PI = 3.14;
 }
  CalculateArea() : number
  {
    let Ans : number = 0;
    Ans = this.PI * this.Radius * this.Radius
    return Ans;
  }
}

var obj1 = new Circle(11.7);
var obj2 = new Circle(10.4);

var Ret : number = 0;
var Ret = obj1.CalculateArea();
console.log("Area is : "+Ret)

var Ret = obj2.CalculateArea();
console.log("Area is : "+Ret)

