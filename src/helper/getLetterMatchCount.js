export const getLetterMatchCount = (guessedWord, secreteWord) => {
  const secretLetterSet = new Set(secreteWord.split(""));
  const guessedLetterSet = new Set(guessedWord.split(""));

  return [...secretLetterSet].filter((letter) => guessedLetterSet.has(letter))
    .length;
};
