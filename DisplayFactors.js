function DisplayFact(No1) {
    var iCnt = 1;
    for (iCnt = 1; iCnt < No1; iCnt++) {
        if (No1 % iCnt == 0) {
            console.log(iCnt);
        }
    }
}
DisplayFact(20);
