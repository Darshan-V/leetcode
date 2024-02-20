function missingNumber(nums) {
    var n = nums.length;
    var expectedSum = (n * (n + 1)) / 2;
    var actualSum = nums.reduce(function (sum, num) { return sum + num; }, 0);
    console.log(expectedSum - actualSum);
    return expectedSum - actualSum;
}
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
