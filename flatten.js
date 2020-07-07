function flatten(arr) {
	// Create a new array
	let newArr = []

	// Loop through every item in the array
	// If the item is an array, add its items to the new array
	// If not add the item itself to the new array
	for(let x = 0; x < arr.length; x++) {
		let tmp = arr[x]
		if (Array.isArray(tmp)) {
			for(let y = 0; y < tmp.length; y++) {
				newArr.push(tmp[y])
			}

		} else {
			newArr.push(tmp)
		}
	}

	// return the new array
	return newArr
}

console.log( flatten( ['a','b','c','d']))
console.log( flatten( ['a','b',['c','d'],'e','f'] ) )
console.log( flatten( ['a','b',['c','d','e'],'f'] ) )
console.log( flatten( ['a',['b','c'],'d',['e','f']] ) )

