//===================================                  day 6                        ============================
//=============== question 16
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guests = ['nimra', 'kinza', 'laiba', 'muskan', 'maryam'];
console.log("great news ! i found a bigger dinner table !");
// adding more guest
guests.unshift("isra");
guests.splice(guests.length / 2, 0, "samra");
guests.push("gazal");
guests.forEach(function (guests) {
    console.log("dear ".concat(guests, ", would you like to join me for dinner"));
});
//============= question 17
var Guests = ['nimra', 'kinza', 'laiba', 'muskan', 'maryam'];
console.log("unfortunately i can invite two people for dinner . ");
while (guests.length > 2) {
    var removedguest = guests.pop();
    console.log("sorry, ".concat(removedguest, ", i can't invite yyou to dinner ."));
}
guests.forEach(function (guest) {
    console.log("dear ".concat(guest, ",you are still invited to dinner. "));
});
guests.splice(0, guests.length);
console.log(guests);
//============== question 18
var places = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
