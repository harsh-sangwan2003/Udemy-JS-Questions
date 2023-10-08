// Check if the strings are anagram
const isAnagram = (str1, str2) => {

    if (str1.length !== str2.length)
        return false;

    const lowerCase1 = str1.toLowerCase();
    const lowerCase2 = str2.toLowerCase();
    console.log(lowerCase1);
    console.log(lowerCase2);
    
    if (lowerCase1 === lowerCase2)
        return false;

    const sorted1 = lowerCase1.split("").sort().join("");
    const sorted2 = lowerCase2.split("").sort().join("");

    return sorted1 === sorted2;
}

console.log(isAnagram("silent", "listen"));