// Challenge:
// Given a string of words, return the length of the longest word using for of loop

function longestWordLength (str) {
// Use regex to remove all non-word characters
    var stringWithoutSpecialCharacters = str.replace(/\W/g, ' ');
// Declare a variable 'longestWord' and set it equal to empty string
    var longestWord = '';
// Declare a variable 'wordArray' and use split method to create an array of words
    var wordArray = stringWithoutSpecialCharacters.split(' ');
// Use for of loop to loop through wordArray
    for (count of wordArray) {
// Create conditional if statement asking if current item is longer than longestWord.length
        if (count.length > longestWord.length) {
// set longestWord equal to word in the array
            longestWord = count;
        }
    }
// return length of longestWord
    return longestWord.length;
}

console.log(longestWordLength('Yo, where is the bathroom?'))