const parsedKeywords = require('./postalCodes-community.js')
const fs = require('fs');

function compare(a,b) {
  if (a.keywordScore > b.keywordScore)
    return -1;
  if (a.keywordScore < b.keywordScore)
    return 1;
  return 0;
}

function sortByKeywordScore(arr) {
  // console.log(arr.toArr())
  console.log(parsedKeywords)
  // let sortedKeywords = arr.sort(compare)
  // let newLineKeywords = JSON.stringify(sortedKeywords)
  // return newLineKeywords;
}

const data = sortByKeywordScore(parsedKeywords)


fs.appendFile('./community.txt', data, (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});