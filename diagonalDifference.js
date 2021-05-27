/**
 * 
 * 
  Complete the  function in the editor below.
  diagonalDifference takes the following parameter:
  int arr[n][m]: an array of integers
 * 
 */


 function diagonalDifference(arr) {
  // Write your code here
  let primary = 0
  let secondary = 2
  let countPrimary = 0
  let countSecondary = 0 
  
  for(let i = 0; i < arr.length; i++){
      
      countPrimary += arr[i][primary]
      countSecondary += arr[i][secondary]
      
      primary++
      secondary--
  }
  if (countPrimary - countSecondary < 0){
      const total = -(countPrimary - countSecondary)
      return total
  } else  { 
      return countPrimary - countSecondary
  }
}

console.log(diagonalDifference([[11, 2, 4],[4, 5, 6],[10, 8, -12]]))