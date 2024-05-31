//============================                           day 5                    ================================
//============= question 13
var favouriteRides = ['bike', 'car', 'train', 'aeroplan'];
favouriteRides.forEach(function (favouriteRide) {
    console.log("\"my favouriteRide is ".concat(favouriteRide, " ."));
});
//================== question 14
var Guests = ['nimra', 'kinza', 'laiba', 'muskan', 'maryam'];
Guests.forEach(function (guest) {
    console.log("dear ".concat(guest, " would you like to join me for dinner"));
});
//================== question 15
var guests = ['nimra', 'kinza', 'laiba', 'muskan', 'maryam'];
var unableToAttend = "nimra";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "areeba";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
