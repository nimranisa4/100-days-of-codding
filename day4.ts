//=====================================                     day 4                          ========================================
// ============question no 10

let myName : string = "nimranisa";
let message = (`hello ${myName} "would you like to learn some typescript today"`)
console.log(message);

//=============== question 11

let myFrnd : string[] = ['nimra', 'kinza', 'laiba', 'muskan','maryam']
for (let i = 0; i< myFrnd.length; i++){
    console.log(myFrnd[i]);
}

//============== question 12

let names : string[] = ['nimra', 'kinza', 'laiba', 'muskan','maryam']
for (let name of names){
    console.log(`hello ${name} ,"would you like to learn some typescript today?"`);
}