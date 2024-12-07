const FULL_ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const findUnusedLetters = (s: string): string => {
    if (typeof s !== 'string') {
        throw new Error('Invalid input');
    }

    let unusedLetters = '';
    FULL_ALPHABET.forEach(letter => {
        if (s.match(letter) === null) {
            unusedLetters += letter
        }
    })

    return unusedLetters
}