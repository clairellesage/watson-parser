 const data = require("./data.json")


function getQuestion(columnNumber, data) {
	for (i in data) {
		for (j in data[i].watson) {
			//columnNumber needs to be subbed in here for column
			let participant = data[i].watson[j]
			for (q in participant) {
				participant['column-idx'] = columnNumber
				let question = participant[q]
				return question;
			}
		}
	}
}

// function keyValues(data) { 
// 	const sentimentArr = []
// 	let sentimentAnalysis = data[i].watson[j]
// 	for (k in sentimentAnalysis){
// 		if (sentimentAnalysis[k]) {
// 			let comment = sentimentAnalysis[k].keywords
// 			for (m in comment) {
// 				let sentimentObj = {text: comment[m].text, score: comment[m].sentiment.score}
// 				sentimentArr.push(sentimentObj);
// 			}
// 			sortValues(sentimentArr);
// 		}
// 	}
// }

// function compare(a,b) {
//   if (a.score < b.score)
//     return -1;
//   if (a.score > b.score)
//     return 1;
//   return 0;
// }

// function sortValues(arr){
// 	let concatedArr = [].concat.apply([], arr)
// 	let sortedValues = arr.sort(compare)
// 	console.log(sortedValues)
// 	// console.log(concatedArr)
// }

// keyValues(data)