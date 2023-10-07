// Task 1
function getItem() {

    console.log(this); // window
}
// getItem();

// Task 2
class Item {

    title = "Ball";
    getItem() {

        function someFn() {

            console.log(this);
        }
        someFn();
    }
}

const item = new Item();
item.getItem();