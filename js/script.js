// Buisness Logic
function capitalizeFirstAndLastLetter(sentence) {
    let trimSentence = sentence.trim();
    let lengthOfSentence = trimSentence.length-1;
    let firstLetter = trimSentence.charAt(0);
    let lastLetter = trimSentence.charAt(lengthOfSentence);
    let joinedletters = firstLetter.concat(lastLetter);
    let capitalizedLetters = joinedletters.toUpperCase();
    return capitalizedLetters;
}
function reverseCapitalizedLetters(sentence) {
    let letters = capitalizeFirstAndLastLetter(sentence);
    let array = letters.split("");
    let reversedArray= array.reverse();
    let reversedString =reversedArray.join("");
    return reversedString;
}

function finalSentence(sentence) {
    let trimSentence = sentence.trim();
    let userSentence=trimSentence
    let firstLettersType = capitalizeFirstAndLastLetter(sentence);
    let reversedLettersType = reverseCapitalizedLetters(firstLettersType)
    let finishedSentence=userSentence.concat(reversedLettersType);
    return finishedSentence;
}
function polishedSentence(sentence) {
    let trimSentence = sentence.trim();
    let fullyTrimmedSentence= trimSentence.replaceAll(" ","");
    let lengthOfSentence=fullyTrimmedSentence.length;
    let divisionOfSentence=parseInt(lengthOfSentence/2);
    let letterLocator= fullyTrimmedSentence.charAt(divisionOfSentence);
    let processedSentence= finalSentence(trimSentence);
    let joinedSentence = letterLocator.concat(processedSentence);
    let array =joinedSentence.split("");
    let reversedArray= array.reverse();
    let reversedString= reversedArray.join("");
    return reversedString
}
// User Logic
$(document).ready(function () {
    let userSentence = prompt("Please enter a sentence");
    console.log(userSentence);
});