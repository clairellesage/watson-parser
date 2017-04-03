function flatten(ary) {
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(flatten(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}

console.log(flatten([[{number: 1, word: 'hey'}, {number: 2, word: 'yo'}], [{word: 'yeasdf', number: 20}]]))