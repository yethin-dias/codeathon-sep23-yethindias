
//group same character in a string and the one without in end like "hello world" will return  "llloohe wrd" and "tree" will return "eetr"
function groupSameChar(str) {
    let result = "";
    let charMap = {};
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    let sortedArr = Object.entries(charMap).sort((a, b) => b[1] - a[1]);
    for (let char of sortedArr) {
        result += char[0].repeat(char[1]);
    }
    return result;
    }

// write a test case for this function
console.log(groupSameChar("hello world"));
console.log(groupSameChar("tree"))
console.log(groupSameChar("window"));
console.log(groupSameChar("deadpool"));
console.log(groupSameChar("little"));

