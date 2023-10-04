const privateCounter = () => {

    let count = 0;

    return {

        getVal: () => {

            return count;
        },

        increment: (val = 1) => {

            count += val;
        }
    }
}

const counter = privateCounter();

console.log(counter.getVal());
counter.increment();

console.log(counter.getVal());
counter.increment();

console.log(counter.getVal());