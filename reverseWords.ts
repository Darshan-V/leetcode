// reverse words in string

function reverseWords(s: string) {
  let wordsArr = s
    .trim()
    .split(" ")
    .filter((el) => el)
    .reverse()
    .join(" ")

  console.log(wordsArr)
}

reverseWords(" the  sky is blue ")
