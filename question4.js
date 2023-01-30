let arr1 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(words) {
  const anagrams = {};
  words.forEach((word) => {
    const sortedWord = word.toLowerCase().split("").sort().join("");
    if (anagrams[sortedWord]) {
      return anagrams[sortedWord].push(word);
    }
    anagrams[sortedWord] = [word];
  });
  return anagrams;
}

const groupedAnagrams = aclean(arr1);
for (const sortedWord in groupedAnagrams) {
  console.log(groupedAnagrams[sortedWord].toString());
}
