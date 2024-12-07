const FULL_ALPHABET = "abcdefghijklmnopqrstuvwxyz";

export const findUnusedLetters = (s: string): string => {
  if (typeof s !== "string") {
    throw new Error("Invalid input");
  }

  let unusedLetters = "";
  for (const letter of FULL_ALPHABET) {
    if (s.match(letter) === null) {
      unusedLetters += letter;
    }
  };

  return unusedLetters;
};
