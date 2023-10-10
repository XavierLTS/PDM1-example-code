function countCharacters(arrayOfStrings, character) {
    let count = 0;
    for (const text of arrayOfStrings) {
        for (const letter of text) {
            if (letter === character) {
                count++;
            }
        }
    }
    return count;
}