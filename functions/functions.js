/*
// functions declaration
function getReminder(){
  console.log('Water the plants.');
}

function greetInSpanish() {
  console.log('Buenas tardes.')
}

// calling a function
function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks() // prints the message in  the function

// parameters and arguments
function sayThanks(name) { // the parameter 'name' is declared here
  console.log('Thank you for your purchase '+ name +'! We appreciate your business.'); // 'name' parameter can be used as a variable in the function
}

sayThanks('Cole') // 'Cole' is the argument passed to the function

// default parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') { // default parameters are set here
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
*/

// return 
function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);


// helper functions
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200
};

const totalCost =  costOfMonitors(5,4);
console.log(totalCost)
