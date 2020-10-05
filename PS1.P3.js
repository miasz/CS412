// function

//first part
const split_and_replace = (str, func) => func(str);
const split = split_and_replace("supercalifragilisticexpialidocious", function separator(s) {
    return finalSplitList = s.replace(/c/g, '.c').split('.');
});

// printing function
console.log(split);

//second part
const replace = split_and_replace("supercalifragilisticexpialidocious", function capitalizeA(s) {
    const newString = s.replace(/a/g, 'A');
    const numRep = newString.split('A').length-1;
    const len = s.length;
    const infoReturn = {
        'originalString': s,
        'modifiedString': newString,
        'numberReplaced': numRep,
        'length': len
    };
    return infoReturn;
});

// printing function
console.log(replace);
module.exports = {split_and_replace};