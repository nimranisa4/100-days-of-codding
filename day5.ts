//============================                           day 5                    ================================
//============= question 13


let favouriteRides : string[] = ['bike' , 'car', 'train', 'aeroplan']
 favouriteRides.forEach(favouriteRide => {
    console.log(`"my favouriteRide is ${favouriteRide} .`);
})
    
//================== question 14
    
let Guests : string[] = ['nimra', 'kinza', 'laiba', 'muskan','maryam']
Guests.forEach(guest => {
    console.log(`dear ${guest} would you like to join me for dinner`);
})  

//================== question 15
    
let guests : string[] = ['nimra', 'kinza', 'laiba', 'muskan','maryam']

let unableToAttend ="nimra"
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "areeba";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});


  