function extraLongFactorials(n) {
  // Write your code here
  n = BigInt(n)
  return n === 0n ? 1n : n * extraLongFactorials(n - 1n)
}

console.log(extraLongFactorials(0).toString())