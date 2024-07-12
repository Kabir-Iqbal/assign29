// 29. Favorite Fruit: 
// Make an array of your favorite fruits, and then write a series of independent if statements that 
// check for certain fruits in your array.
// • Make an array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit 
// is in your array, the if block should print a statement,
// such as You really like bananas

let  favorite_fruits : string[]= ["Banana","Mango","Apple"]
if (favorite_fruits.includes("Mango")) {
    console.log("My favourite Fruit is Mango");
    
}else if (favorite_fruits.includes("Banana")) {
    console.log("I would like to eat banana");
    
}else if (favorite_fruits.includes("Apple")) {
    console.log("Ï would like to eat Apple");
    
}else{
    console.log("Fruits are not avialble");
    
}