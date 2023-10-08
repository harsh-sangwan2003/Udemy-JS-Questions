// Write a function which counts voewls in the string
const findVowels = (str) => {

    const vowels = ["a", "e", "i", "o", "u"];

    let count = 0;

    for (let char of str.toLowerCase()) {

        if (vowels.includes(char))
            count++;
    }

    return count;

}

console.log(findVowels("silent"));