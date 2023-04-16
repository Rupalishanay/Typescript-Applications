
function Maximum(Arr : number[]) : number
{
   let iMax : number = Arr[0];
   let iCnt : number = 0;

   for(iCnt=0; iCnt<Arr.length; iCnt++)
   {
     if(Arr[iCnt]>iMax)
     iMax=Arr[iCnt];
   }
   return iMax;

}

var Brr : number[] = [23,89,6,29,56,45,77,32]

var Ret : number = 0;

Ret = Maximum(Brr);

console.log("Maximum number is : "+Ret)
