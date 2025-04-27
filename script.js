// Question 1

// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name); // Double Cheese Burger
// console.log(secondBurger.name); // Double Cheese Burger



// Question 2

// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
// };

// const secondBurger = { ...hamburger };
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]); // Salad
// console.log(secondBurger.ingredients[0]); // Salad



// Question 3

// const hamburger = { 
// 	name: "Cheese Burger", 
// 	weight: 250,
// 	maker: {
// 		name: "Anonymous Chef",
// 		restaurant: {
// 			name: "Hyur's Burgers",
// 			address: "Main Street, 123",
// 			isOpen: true,
// 		},
// 		age: 29
// 	}
// };

// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);

// // vengono creati tre oggetti diversi tramite utilizzo structuredClone




// Question 4

// const chef = {
// 	name: "Chef Hyur",
// 	age: 29,
// 	makeBurger: (num = 1) => {
// 		console.log(`Ecco ${num} hamburger per te!`);
// 	},
// }

// const restaurant = {
// 	name: "Hyur's Burgers",
// 	address: {
// 		street: 'Main Street',
// 		number: 123,
// 	},
// 	openingDate: new Date(2025, 3, 11),
// 	isOpen: false,
// };

// il metodo migliore per clonare l'oggetto chef è usare lo spread operator in quanto ci permette di copiare la funzione e non da problemi perche non ci sono oggetti annidati
// il metodo migliore per clonare l'oggetto restaurant è usare structuredClone in quanto ci sono oggetti annidati e un tipo di dato 'Date' che non può essere copiato propriamente con JSON.parse(JSON.stringify())



// Question 5

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";

const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";



console.log(hamburger.maker.name); // Chef Hyur
console.log(secondBurger.maker.name); // Chef Hyur
console.log(hamburger.maker.restaurant.name); // Hyur's Burgers
console.log(secondBurger.maker.restaurant.name); // Hyur's II