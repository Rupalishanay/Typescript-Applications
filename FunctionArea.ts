
function Area(Rad : number, PI : number) : number
{
    let Ans : number = 0;
    Ans = PI*Rad*Rad;
    return Ans;
}

var Ret : number = 0;
Ret = Area(5,3.14)
console.log("Area of circle : "+Ret)