const getReverseNumber = (originalNumber) => {

    let n = originalNumber;
    let remainer = 0;
    let reverseNumber = 0;

    while (n > 0) {
        remainer = n % 10;
        reverseNumber = (reverseNumber * 10) + remainer;
        n = parseInt((n / 10), 10);
    }

    return reverseNumber;
}

const originalNumber = 5776;
const reverseNumber = getReverseNumber(originalNumber);

if(originalNumber === reverseNumber) {
    console.log('The given number is Palindrome');
} else {
    console.log('The given number is NOT a Palindrome');
}


const getreverseString = (originalString) => {
    let reverseString = '';

    for (let index = (originalString.length - 1); index >= 0; index--) {
        reverseString += originalString[index];
    }

    return reverseString;
}

const originalString = 'BalaB';
const reverseString = getreverseString(originalString);

if(originalString === reverseString) {
    console.log('The given string is Palindrome');
} else {
    console.log('The given string is NOT a Palindrome');
}