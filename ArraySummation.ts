
function Addition(Arr : number[]) : number
{
   let Sum : number = 0;
   let iCnt : number = 0;

   for(iCnt=0; iCnt<Arr.length; iCnt++)
   {
      Sum = Sum + Arr[iCnt];
   }
   return Sum;

}

var Brr : number[] = [23,6,7,4,5,7]

var Ret : number = 0;

Ret = Addition(Brr);

console.log("Addition is : "+Ret)
