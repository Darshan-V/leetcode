type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  let res = init

  for (let i in nums) {
    res = fn(res, nums[i])
  }
  return res
}
