const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['caran', 'cachien', 'canau', 'ca'],
    mainMenu: ['caran', 'cachien', 'canau'],
    openingHours:{
        thu: {
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0,
            close:24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    } ,
    orderDelivery: function({
        starterIndex =1 ,mainIndex = 0,time='20:00',address
    }){
        console.log(
            `order received!${this.starterMenu[starterIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
        )
    },

};
restaurant.orderDelivery({
    address:'Via del sole,21',
    starterIndex:1,
})
restaurant.orderDelivery({
    time:'22:30',
    address:'Via del Sole,21',
    mainIndex: 2,
    starterIndex:2,
   }) ;

const{ name ,openingHours ,categories}= restaurant;
console.log(name, openingHours ,categories);

const{
    name : restaurantName,
    openingHours:Hours,
    categories:tags,
    
}= restaurant;
console.log(restaurantName,Hours,tags);
// default values
const{ menu=[], starterMenu: starter = [] }=restaurant;
console.log(menu,starter);


// mutating variables
// thay đổi biến
let a =111;
let b=222;
const obj ={ a:23 , b: 7, c :14};
({a,b}= obj)
console.log(a,b);


// nested objects
const{ fri:{open:o, close:c },}=openingHours;
console.log(o,c);
