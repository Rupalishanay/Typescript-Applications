function Addition(Arr) {
    var Sum = 0;
    var iCnt = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        Sum = Sum + Arr[iCnt];
    }
    return Sum;
}
var Brr = [23, 6, 7, 4, 5, 7];
var Ret = 0;
Ret = Addition(Brr);
console.log("Addition is : " + Ret);
