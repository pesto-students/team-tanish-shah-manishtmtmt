function calcWordFrequencies() {
  const wordMap = new Map();

  const words = prompt("Enter a list of words (separated by spaces):").split(
    " "
  );

  // count the frequecy of each word
  for (let i = 0; i < words.length; i++) {
    const lowerCaseWord = words[i].toLowerCase();
    if (wordMap.has(lowerCaseWord)) {
      wordMap.set(lowerCaseWord, wordMap.get(lowerCaseWord) + 1);
    } else {
      wordMap.set(lowerCaseWord, 1);
    }
  }

  // Output the words and their frequencies
  for (const [word, frequecy] of wordMap) {
    console.log(`${word} ${frequecy}`);
  }
}
