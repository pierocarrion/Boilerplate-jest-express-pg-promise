function generateSequence(wordLength: number = 10) {
    let result = "";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < wordLength; i++) {
        result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }

    return result;
}

export function dataGenerator(numberOfRows: number = 1000) {
    return [...Array(numberOfRows)].map(() => ({
            name: generateSequence(10),
            identifier: generateSequence(4),
            address: generateSequence(30),
            descriptors: generateSequence(50)
    }))
}