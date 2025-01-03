"use strict";
let cart = [];
let totalPrice = 0;
function addItem(item) {
    cart.push(item);
}
function removeItem(id) {
    cart = cart.filter((item) => {
        return item.id != id;
    });
}
function calculateTotal(items) {
    totalPrice = items.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
    }, 0);
    return totalPrice;
}
addItem({ id: 1, name: "heater", price: 20, quantity: 1 });
addItem({ id: 2, name: "copy", price: 40, quantity: 2 });
calculateTotal(cart);
// removeItem(2);
console.log(cart);
console.log(totalPrice);
