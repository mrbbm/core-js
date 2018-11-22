const getReverseNumber = (originalNumber) => {

    let n = originalNumber;
    let remainer = 0;
    let reverseNumber = 0;

    while (n > 0) {
        remainer = n % 10;
        reverseNumber = (reverseNumber * 10) + remainer;
        n = parseInt((n / 10), 10);
    }

    console.log('Original Number is ' + originalNumber);
    console.log('Reverse Number is ' + reverseNumber);
}

getReverseNumber(127);