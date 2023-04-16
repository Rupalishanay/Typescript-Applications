
function Fibonacci(iNo : number) 
{

 var No2 : number = 0;
 var No3 : number = 1;
 var No4 : number;
 var iCnt : number;

 console.log(No2);
 console.log(No3);

  for(iCnt = 2; iCnt<=iNo; ++iCnt)
  {
     No4=No2+No3;
     console.log(No4);
     No2=No3;
     No3=No4;
   
  }
 


}
var iNo : number = 0;
Fibonacci(21)