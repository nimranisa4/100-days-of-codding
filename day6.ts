//===================================                  day 6                        ============================
//=============== question 16

let guests : string[] = ['nimra', 'kinza', 'laiba', 'muskan','maryam']
console.log("great news ! i found a bigger dinner table !");

// adding more guest
guests.unshift ("isra")
guests.splice(guests.length / 2,0, "samra")
guests.push("gazal")

guests.forEach(guests => {
    console.log(`dear ${guests}, would you like to join me for dinner`)
})
    
//============= question 17

 let Guests : string[] = ['nimra', 'kinza', 'laiba', 'muskan','maryam']
console.log("unfortunately i can invite two people for dinner . ");

while (guests.length > 2){
    let removedguest = guests.pop();
    console.log(`sorry, ${removedguest}, i can't invite yyou to dinner .`);
    
}
guests.forEach(guest => {
    console.log(`dear ${guest},you are still invited to dinner. `);
    
});
guests.splice(0, guests.length);
console.log(guests);

//============== question 18

let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);



