function findMaxAverage(nums: number[], k: number) {
  let sum = 0
  let max: number
  for (let i = 0; i < k; i++) {
    sum += nums[i]
    console.log(sum)
  }
  max = sum

  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k]
    max = Math.max(max, sum)
  }
  return max / k
}

let input = [1, 12, -5, -6, 50, 3]
let k = 4

console.log(findMaxAverage(input, k))
