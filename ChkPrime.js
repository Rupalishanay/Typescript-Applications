function ChkPrime(No1, b) {
    if (b === void 0) { b = true; }
    if (No1 % 2 != 0) {
        b = true;
        console.log("It is a prime number");
    }
    else {
        b = false;
        console.log("It is not a prime number");
    }
}
ChkPrime(11);
