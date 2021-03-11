export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetters = new Set(secretWord.split(""));
  const guessedLetterSet = new Set(guessedWord.split(""));
  return [...secretLetters].filter((letter) => guessedLetterSet.has(letter))
    .length;
};
