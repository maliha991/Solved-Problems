/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */

function getNumValue(word){
    let sum = "";
    let index = 0;
    for(let i=0; i <= word.length; i++){
        index = word.charAt(i).charCodeAt(0) - 97;
        sum = sum + index.toString();
        index = 0;
    }
    return sum;
}

var isSumEqual = function(firstWord, secondWord, targetWord) {
    let firstSum = 0;
    let secondSum = 0;
    let targetSum = 0;
    firstSum = parseInt(getNumValue(firstWord));
    secondSum = parseInt(getNumValue(secondWord));
    targetSum = parseInt(getNumValue(targetWord));
    if((firstSum + secondSum) === targetSum){
        return true;
    }else{
        return false;
    }
};