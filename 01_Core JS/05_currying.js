function fn(a) {

    return function (b) {

        if (b)
            return fn(a + b);

        return a;
    }
}

const curriedSum = fn(2)(3);
console.log(curriedSum());