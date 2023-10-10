//Visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors.
//They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
//When they view the browser console, they observe a table listing how many of each flavor they have ordered.
//they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

const userInput = prompt(
    "Please enter a list of comma-separated froyo flavors."
  );

const listArray = userInput.split(",");

function countList(listArray) {
    const count = {};

    for (let flavor of listArray) {
        if (count[flavor]) {
            count[flavor] += 1;
        }else{ count[flavor] = 1}
    }
    return count;
}

console.log("Your order is: ", countOrders(orderArray));
