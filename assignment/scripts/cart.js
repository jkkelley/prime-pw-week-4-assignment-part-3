console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

// Checking to see our array is empty in the console below.
console.log('Our basket array will return empty.', basket);

function addItem( item ) {
  basket.push(item);
  // Using this expression below, we're showing that the basket has 1 item or more
  // in it.
  if (basket.length > 0) {
    return true;
  }
}

console.log('Let\'s add Salsa to our basket using addItem:', addItem('Salsa'));
console.log('Returning our basket.', basket);


// Creating a function to list our items in our basket. Can be used to check
// any array and list thier items.
function listItems(array) {
  for (let food = 0; food < array.length; food++) {
    console.log('Food added: ' + array[food]);
  }
  return array;
}

console.log('Let\'s test our listItems function:', listItems(basket));


// Let's add some more items to our basket using our addItem function.
addItem('Popcorn');
addItem('Juice');
addItem('Milk');
addItem('Cheese');

console.log('Let\'s see our basket now:', listItems(basket));

addItem('Corn');
addItem('Soda Pop');
addItem('Soup');

console.log('And one let\'s check our basket one more time:', listItems(basket));

// Creating a function to empty our basket. A while loop is great for this function.
// It allows us to look at the length of our array and as long as it's greater than 0,
// it will continue to pop out our items.
function empty(array) {
  while (array.length > 0){
    array.pop();
  }
  return basket;
}

console.log('Emptying our basket:', empty(basket));
