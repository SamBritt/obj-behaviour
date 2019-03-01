const oliver = {
    name: 'Oliver',
    species: 'Dachshund',
    nicknames: ['monkey', 'baby', 'sausage'],
    age: 8
}

console.log(oliver);

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function(meal){
        restaurant.orders.push(meal);
    },
    getAllOrders: function(){
        return orders;
    }
}

const doubleCheeseCombo = {
    sandwichType: 'burger',
    fries: true,
    drinkSize: 'large'
}
const chickenSteakCombo = {
    sandwichType: 'chicken',
    fries: true,
    drinkSize: 'medium'
}

restaurant.placeOrder(doubleCheeseCombo);
console.log(restaurant.orders);
console.log(restaurant.getAllOrders());