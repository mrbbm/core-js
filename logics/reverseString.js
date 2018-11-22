const reverseString = (originalString) => {
    let reverseString = '';

    for (let index = (originalString.length - 1); index >= 0; index--) {
        reverseString += originalString[index];
    }

    console.log("Orginal String is " + originalString);
    console.log("Reverse String is " + reverseString);
}

reverseString('Bala');