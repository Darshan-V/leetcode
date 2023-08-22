function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const newArr: number[] = []

  for (let i = 0; i < arr.length; i++) {
    let newVal = fn(arr[i], i)
    newArr.push(newVal)
  }
  return newArr
}
