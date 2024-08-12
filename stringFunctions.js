function getStringLength(str) {
    let c = 0;
    for( i = 0; i < str.length; i++){
        c++;
    }
    return c;
}

function toUpperCase(str) {
    return str.toUpperCase();
}

function toLowerCase(str) {
    return str.toLowerCase();
}

function includesSubstring(str, substring) {
        return str.includes(substring);   
}

function startsWithPrefix(str, prefix) {
    if(str.substring(0,prefix.length) == prefix){
        return true;
    }
    return false;
}

function endsWithSuffix(str, suffix) {
    if(str.substring(str.length,str.length - suffix.length) == suffix){
        return true;
    }
    return false;
}

function repeatString(str, count) {
    let a = str;
    let c = "";
    while(count !=0){
        c = c + a;
        count--;
    }
    return c;
}

function replaceSubstring(str, oldSub, newSub) {
   return str.replace(oldSub, newSub);
}

function trimString(str) {
    return str.trim();
    
}

function concatenateStrings(str1, str2) {
    return str1 + str2;    
}

module.exports = {
    getStringLength,
    toUpperCase,
    toLowerCase,
    includesSubstring,
    startsWithPrefix,
    endsWithSuffix,
    repeatString,
    replaceSubstring,
    trimString,
    concatenateStrings
};
