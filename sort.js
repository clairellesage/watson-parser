const parsedKeywords = require('./parsed')
const fs = require('fs');

function compare(a,b) {
  if (a.keywordScore > b.keywordScore)
    return -1;
  if (a.keywordScore < b.keywordScore)
    return 1;
  return 0;
}

function sortByKeywordScore(arr) {
  let sortedKeywords = arr.sort(compare)
  let newLineKeywords = JSON.stringify(sortedKeywords)
  return newLineKeywords;
}

const data = sortByKeywordScore(parsedKeywords)



fs.appendFile('./data.txt', data, (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});