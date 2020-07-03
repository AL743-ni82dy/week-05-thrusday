const anarray = [true,false]
function all(arr) {
	
	// Loop through every item in the array
	for( let x = 0; x < arr.length; x++ ) {
		if ( !arr[x] ) { 
			return false 
		} else if ( x >= arr.length ) {
			return true
		}
	}
}
console.log(all(anarray))
	// If the item evaluates to false, return false

	// If the loop ends, return true

