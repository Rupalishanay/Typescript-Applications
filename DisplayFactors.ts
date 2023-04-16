
function DisplayFact(No1 : number) : void
{
var iCnt : number = 1;
  for(iCnt = 1; iCnt<No1; iCnt++)
   {
    if(No1 % iCnt == 0)
    {
        console.log(iCnt);
    }
   }
  
}

DisplayFact(20)