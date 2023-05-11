function compress(chars: string[]): number {
  let left = 0
  let right = 0
  //two pointer solution -> checking same characters from left until the characters are not equal and updating the count
  while (right < chars.length) {
    let char = chars[left]
    while (chars[right] === char) {
      right += 1
    }
    const repeated = right - left
    const compressed =
      repeated > 1 ? [char, ...repeated.toString().split("")] : [char]
    chars.splice(left, repeated, ...compressed)
    left = left + compressed.length
    right = left
  }
  return chars.length
}

let chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
console.log(compress(chars))
