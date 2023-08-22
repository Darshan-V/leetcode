function lengthOfLongestSubstring(s: string): number {
  let current: string[] = []
  let longestSubStr = 0
  for (let i = 0; i < s.length; i++) {
    const currentCharPos = current.indexOf(s[i])
    if (currentCharPos !== -1) {
      current.splice(0, currentCharPos + 1)
    }
    current.push(s[i])

    longestSubStr = Math.max(longestSubStr, current.length)
  }
  return longestSubStr
}
