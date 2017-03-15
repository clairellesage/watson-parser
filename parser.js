 const data = require("./data.json")

//input any question, get the correct column data
function getQuestion(columnNumber, data) {
	for (i in data) {
		for (j in data[i].watson) {
			let participant = data[i].watson[j]
			if (participant.analysis) {
				let documentText = participant.text;
				let documentScore = participant.analysis.sentiment.document.score
				// console.log(`${documentText}; ${documentScore}`)
			}
				participant['column-idx'] = columnNumber
				// console.log(participant)
				if (participant.analysis) {
					let keywords = participant.analysis.keywords
					// console.log(keywords)
					for (word in keywords) {
						let keywordText = keywords[word].text;
						let keywordScore = keywords[word].sentiment.score
						console.log(`${keywordText}; ${keywordScore}`)					
					}
					// console.log(participant.analysis.keywords)
					let text = participant.analysis.keywords
					let keywordsObj = {"word": text, "score": participant.analysis.keywords}
				}

		}
	}
}

function keyValues(question) { 
	const sentimentArr = [];
	console.log(question)
	// for (k in sentimentAnalysis){
	// 	if (sentimentAnalysis[k]) {
	// 		let comment = sentimentAnalysis[k].keywords
	// 		for (m in comment) {
	// 			let sentimentObj = {text: comment[m].text, score: comment[m].sentiment.score}
	// 			sentimentArr.push(sentimentObj);
	// 		}
	// 		sortValues(sentimentArr);
	// 	}
	// }
}

function compare(a,b) {
  if (a.score < b.score)
    return -1;
  if (a.score > b.score)
    return 1;
  return 0;
}

function sortValues(arr){
	let concatedArr = [].concat.apply([], arr)
	let sortedValues = arr.sort(compare)
	console.log(sortedValues)
	// console.log(concatedArr)
}

getQuestion(11, data)