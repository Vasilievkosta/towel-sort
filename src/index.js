
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let arrNew = [];
	if (matrix === undefined) return arrNew;
		for (let i = 0; i < matrix.length; i++){
			if (i % 2 !== 0) {
				matrix[i].reverse();
			}
		for (let k = 0; k < matrix[i].length; k++) {
			arrNew.push(matrix[i][k]);				
		}				
		}			
	return arrNew;				
}
