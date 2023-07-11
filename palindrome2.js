//The function isPalindrome takes a parameter S, which represents the input string to be checked for palindrome property.
function isPalindrome(S) {
    //The below line create a new variable reversedS and assigns it the reversed version of the input string S.
    // The split('') method is used to split the string into an array of individual characters,
    // reverse() method reverses the order of elements in the array,
    // and join('') method combines the characters back into a string.
    const reversedS = S.split('').reverse().join('');
    //The below line compares the original string S with the reversed string reversedS using the strict equality operator ===.
    // The === operator checks if the values on both sides are identical and of the same type.
    // If they are equal, it means that the string S is a palindrome, and the function returns true. Otherwise, it returns false.
    return S === reversedS;
}
//console.log to print the results of calling the isPalindrome function with different input strings:
console.log(isPalindrome('lol'));
//prints true because 'lol' is a palindrome.
console.log(isPalindrome('Lol'));
//prints false because 'Lol' is not the same as 'loL'.
console.log(isPalindrome('tom'));
//prints false because 'tom' is not a palindrome.