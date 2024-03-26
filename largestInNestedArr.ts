function findLargesNumberInNestedArr(arr: (number | any[])[]): number {
  let largest: number = -Infinity

  arr.forEach((element: number | any[]) => {
    if (Array.isArray(element)) {
      let largestInNested: number = findLargesNumberInNestedArr(element)
      if (largestInNested > largest) {
        largest = largestInNested
      }
    } else {
      if (element > largest) {
        largest = element
      }
    }
  })

  return largest
}

const nestedArr: (number | any[])[] = [1, 2, 3, [4, 5, [7, 9, 8]]]
console.log(findLargesNumberInNestedArr(nestedArr))
