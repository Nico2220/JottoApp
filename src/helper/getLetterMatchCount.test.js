import { getLetterMatchCount } from "./getLetterMatchCount";

describe("getLetterMatchCount", () => {
  const secretWord = "party";
  test("return correct count when no matching leter", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });

  test("return correct count where there are 3 matching leter", () => {
    const letterMatchCount = getLetterMatchCount("train", secretWord);
    expect(letterMatchCount).toBe(3);
  });

  test("return correct count where there are duplicate matching leter", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
