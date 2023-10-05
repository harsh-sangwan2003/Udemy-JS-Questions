// Remove duplicates from the array
const removeDup = (arr) => [...Set(arr)];
const uniqueArr = (arr) => {

    return arr.reduce((acc, ele) => {

        if (acc.includes(ele))
            return acc;

        return [...acc, ele];

    }, [])
}
const arr = [1, 2, 3, 4, 4, 1, 2];

console.log(removeDup(arr));