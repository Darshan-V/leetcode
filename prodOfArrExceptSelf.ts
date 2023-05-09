// Product of array except self

function produceExceptSelf(nums: number[]): number[] {
  let result: number[] = []
  let left = 1
  let right = 1
  for (let i = 0; i < nums.length; i++) {
    result[i] = left
    left = left * nums[i]
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = right * result[i]
    right = right * nums[i]
  }
  return result
}

console.log(produceExceptSelf([1, 2, 3, 4]))
