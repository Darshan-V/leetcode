var findLargesNumberInNestedArr = function (nestedArray) {
    var largest = -Infinity;
    nestedArray.forEach(function (element) {
        if (Array.isArray(element)) {
            var largestInNested = findLargesNumberInNestedArr(element);
            if (largestInNested > largest) {
                largest = largestInNested;
            }
        }
        else {
            if (element > largest) {
                largest = element;
            }
        }
    });
    return largest;
};
var nestedArr = [1, 2, 3, [4, 5, [7, 9, 8]]];
console.log(findLargesNumberInNestedArr(nestedArr));
