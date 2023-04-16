class Arithmatic
{
  No1 : number;
  No2 : number;

  constructor(A : number, B : number)
  {
    this.No1 = A;
    this.No2 = B;
  }
  Addition(): number
  {
     return this.No1+this.No2;
  }

  Substraction() : number
  {
    return this.No1-this.No2;
  }

  Multiplication() : number
  {
    return this.No1*this.No2;
  }

  Division() : number
  {
    return this.No1%this.No2;
  }
}

var obj1 = new Arithmatic(11,10);
var obj2 = new Arithmatic(21,10);
var Ret : number = 0;

Ret = obj1.Addition();
console.log("Addition is "+Ret);
Ret = obj2.Addition();
console.log("Addition is "+Ret);

Ret = obj1.Substraction();
console.log("Substraction is "+Ret);
Ret = obj2.Substraction();
console.log("Substraction is "+Ret);

Ret = obj1.Multiplication();
console.log("Multiplication is "+Ret);
Ret = obj2.Multiplication();
console.log("Multiplication is "+Ret);

Ret = obj1.Division();
console.log("Division is "+Ret);
Ret = obj2.Division();
console.log("Division is "+Ret);






