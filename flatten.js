function flatten(arr) {
	let newArr = []
	for (i in arr) {
		let newArr = arr.concat(arr[i])
		console.log(arr)
	}
	// return newArr;
}

console.log(flatten3([[],[1, 2, 4], [9, 3]]))

function flatten2(arrays) {
	arrays = arrays.reduce(function(a, b){
	     return a.concat(b);
	});
}

function flatten3(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? flatten(flat) : flat;
}

