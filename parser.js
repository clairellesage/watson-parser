 const data = require("./data.json")

//input any question, get the corrresponding column number's data
function getQuestion(columnNumber, data) {
	for (i in data) {
		for (j in data[i].watson) {
			let participants = data[i].watson[j];
			if (participants.analysis) {
				if (participants['column-idx'] === columnNumber) {
					getDocumentSentiment(participants);
					getKeywords(participants);
				}
			}
		}
	}
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
	sortValues(keywordArr);
}

//sort in ascending order
function compare(a,b) {
  if (a.score < b.score) 
    return -1;
  if (a.score > b.score)
    return 1;
  return 0;
}

// PROBLEM 1: should remove empty arrays (it doesn't) and make all the arrays into one
function flatten(a) {
  return Array.isArray(a) ? [].concat.apply([], a.map(flatten)) : a;
}


function sortValues(arr) {
	let newArr = []
		for (i in arr) {
			newArr.push(arr[i])
		}
	let concatArr = flatten(newArr)

	//PROBLEM 2: should sort the flattened array
	// let sortedValues = concatArr.sort(compare)

	console.log(concatArr)

}

//if the data is the same, console.log true
//PROBLEM 3: why is this always true?
function checkData() {
	if (getQuestion(10, data) === getQuestion(11, data)) {
		console.log("true")
	} else {
		console.log("false")
	}
}

checkData()
