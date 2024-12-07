import { findUnusedLetters } from "./index";

test("unusedLetters", () => {
  expect(
    findUnusedLetters("A slow yellow fox crawls under the proactive dog"),
  ).toBe("bjkmqz");
  expect(findUnusedLetters("A quick brown fox jumps over the lazy dog")).toBe(
    "",
  );
  //@ts-ignore
  expect(() => findUnusedLetters({ a: "hi" })).toThrow("Invalid input");
});
