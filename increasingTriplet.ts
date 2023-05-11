function increasingTriplet(nums: number[]): boolean {
  let min = Infinity
  let secondMin = Infinity
  for (let i of nums) {
    console.log(min)
    if (i <= min) min = i
    else if (i <= secondMin) secondMin = i
    else return true
  }
  return false
}

let input = [1, 2, 3, 4, 5, 7, 8]
console.log(increasingTriplet(input))
