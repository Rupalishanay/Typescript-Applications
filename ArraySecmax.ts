
function SecMaximum(Arr : number[]) : number
{
   let iMax : number = Arr[0];
   let sMax : number = Arr[0];
   let iCnt : number = 0;

   for(iCnt=0; iCnt<Arr.length; iCnt++)
   {
     if(Arr[iCnt]>iMax)
     {
       sMax=iMax;
       iMax=Arr[iCnt];
     }
     else if(Arr[iCnt]>sMax)
     {
       sMax = Arr[iCnt]
     }
   }
   return sMax;

}
var Brr : number[] = [23,89,6,29,56,45,77,32]

var Ret : number = 0;

Ret = SecMaximum(Brr);

console.log("Second Maximum number is : "+Ret)
