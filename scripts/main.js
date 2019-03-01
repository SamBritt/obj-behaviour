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
        return this.orders;
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

//Political Campaign Challenge
const swanger = {
    district: "5th District, Metro",
    statements: {
        taxes: "Hate em'",
        jobs: "Need em'",
        infrastructure: "Gotta' build em'",
        healthcare: 'Needs to be free',
        crime: 'Crime is too high'
    },
    donations: new URL("http://www.kittykatrescue.com/Donations.html"),
    volunteers: [{
        name: "Jessica",
        address: "222 Free Money Blvd.",
        email: "jessica.baner@comcast.net",
        phone: "6158762981",
        availability: true,
        activities: 'take polls'
    }],
    biography: "I like freedom, sometimes guns, money, and the American Dream",
    images: {
        headshot: new URL("https://www.facebook.com"),
        family: new URL("https://www.facebook.com"),
        constituents: new URL("https://www.facebook.com")
    },
    statement: 'Make America alright again',
    voteAt: new URL("https://www.liveherevotehere.org/")


}
