function moveZeroes(nums: number[]): any[] {
  let zeros = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      i--
      zeros++
    }
  }

  for (let i = 0; i < zeros; i++) {
    nums.push(0)
  }

  return nums
}

console.log(moveZeroes([0, 0, 1]))
