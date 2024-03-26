function missingNumber(nums: number[]): number {
  const n = nums.length
  const expectedSum = (n * (n + 1)) / 2

  const actualSum = nums.reduce((sum, num) => sum + num, 0)
  return expectedSum - actualSum
}

missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])
