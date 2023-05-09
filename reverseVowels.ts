// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

function reverseVowels(s: string): string {
  s = s.toLocaleLowerCase()
  const vowels = ["a", "e", "i", "o", "u"]
  let start = 0
  let end = s.length - 1
  const result = [...s]

  while (start < end) {
    if (!vowels.includes(result[start])) start++
    if (!vowels.includes(result[end])) end--

    if (!vowels.includes(result[start]) || !vowels.includes(result[end]))
      continue

    const temp = result[start]
    result[start] = result[end]
    result[end] = temp
    start++
    end--
  }
  return result.join("")
}

const str = "leetcode"
console.log(reverseVowels(str))
