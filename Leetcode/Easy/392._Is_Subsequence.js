/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let fromIndex = -1;
    for(let i=0; i<s.length; i++){
        t = t.slice(fromIndex + 1, t.length);
        fromIndex = t.indexOf(s.charAt(i));
        if(fromIndex == -1 || t.length < (s.length-i)){
            return false;
        }
    }
    return true;
};