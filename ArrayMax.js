function Maximum(Arr) {
    var iMax = Arr[0];
    var iCnt = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (Arr[iCnt] > iMax)
            iMax = Arr[iCnt];
    }
    return iMax;
}
var Brr = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret = 0;
Ret = Maximum(Brr);
console.log("Maximum number is : " + Ret);
