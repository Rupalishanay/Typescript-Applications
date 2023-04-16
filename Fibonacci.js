function Fibonacci(iNo) {
    var No2 = 0;
    var No3 = 1;
    var No4;
    var iCnt;
    console.log(No2);
    console.log(No3);
    for (iCnt = 2; iCnt <= iNo; ++iCnt) {
        No4 = No2 + No3;
        console.log(No4);
        No2 = No3;
        No3 = No4;
    }
}
var iNo = 0;
Fibonacci(21);
