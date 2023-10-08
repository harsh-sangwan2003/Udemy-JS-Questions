function throttle(fn, delay) {

    let flag = false;

    return function (...args) {

        if (!flag) {

            flag = true;

            setTimeout(() => {

                fn.apply(this, args);
                flag = false;
            }, delay);
        }
    }

}

const greet = () => { console.log("greet") };

let fn = throttle(greet, 200);
fn();