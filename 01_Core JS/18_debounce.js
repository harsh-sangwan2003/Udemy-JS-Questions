function debounce(fn, delay) {

    let id;
    return function () {
        
        clearTimeout(id);

        id = setTimeout(() => {

            fn();

        }, delay)
    }
}

function greet() {

    console.log("greet");
}

let fn = debounce(greet, 300);
fn();