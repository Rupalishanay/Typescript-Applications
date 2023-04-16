function SecMaximum(Arr) {
    var iMax = Arr[0];
    var sMax = Arr[0];
    var iCnt = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] > iMax) {
            sMax = iMax;
            iMax = Arr[iCnt];
        }
        else if (Arr[iCnt] > sMax) {
            sMax = Arr[iCnt];
        }
    }
    return sMax;
}
var Brr = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret = 0;
Ret = SecMaximum(Brr);
console.log("Second Maximum number is : " + Ret);
