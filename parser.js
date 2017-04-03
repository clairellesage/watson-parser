const data = require("./data.json");
const fs = require('fs');


//input any question, get the corrresponding column number's data
function getQuestion(columnNumber, data) {
  for (i in data) {
    for (j in data[i].watson) {
      let participants = data[i].watson[j];
      if (participants.analysis) {
        if (participants['column-idx'] === columnNumber) {
          let sentiment = getDocumentSentiment(participants);
          let keywords = getKeywords(participants);
          let keywordsArr = [];
            for (k in keywords) {
              console.log(keywords[k])
            } 
        } 
      } 
    }
  }

}

function getKeywordArray(keywords) {
  let keywordArr = [];
  for (k in keywords) {
    return keywords[k]
  }
  return keywordArr;
}

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

//get sentiment text and score for a whole document
//this will need to get sorted too
function getDocumentSentiment(documentArr) {
  let documentText = documentArr.text;
  let documentScore = documentArr.analysis.sentiment.document.score;
  return documentObj = {"documentText": documentText, "documentScore": documentScore};
}

//get keyword text and scores for the same document
function getKeywords(documentArr) {
  let keywordArr = [];
  let keywords = documentArr.analysis.keywords;
  for (word in keywords) {
    let keywordText = keywords[word].text;
    let keywordScore = keywords[word].sentiment.score
    let keywordObj = {"keywordText": keywordText, "keywordScore": keywordScore}
    keywordArr.push(keywordObj);

  }
  return sortValues(keywordArr);
}

//sort from highest to lowest
function compare(a,b) {
  if (b.keywordScore < a.keywordScore)
    return -1;
  if (b.keywordScore > a.keywordScore)
    return 1;
  return 0;
}

function sortValues(arr) {
  let sortedArr = arr.sort(compare);
  return sortedArr;
}

getQuestion(9, data)

// fs.appendFile('./output.txt', data, (err) => {
//   if (err) throw err;
//   getQuestion(9, data);
//   console.log('The "data to append" was appended to file!');
// });
