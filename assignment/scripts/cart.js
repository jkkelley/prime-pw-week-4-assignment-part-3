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
console.log('Calling our basket variable to see what\'s inside.', basket);


// Creating a function to list our items in our basket.
function listItems(array) {
  for (let food = 0; food < array.length; food++) {
    console.log('Food item: ' + array[food]);
  }
  return array;
}

console.log('Let\'s test our listItems function:', listItems(basket));


// Let's add some more items to our basket using our addItem function.
console.log(`Basket contains ${basket}`)
console.log('Adding Popcorn (expect true)', addItem('Popcorn'));
listItems(basket);
console.log('Adding Soup (expect true)', addItem('Soup'));
listItems(basket);
console.log('Adding Chips (expect true)', addItem('Chips'));
listItems(basket);
console.log(`Basket contains ${basket}`)

console.log('Showing our basket.', listItems(basket));


// Creating a function to empty our basket. A while loop is great for this function.
// It allows us to look at the length of our array and as long as it's greater than 0,
// it will continue to pop out our items.
function empty(array) {
  while (array.length > 0){
    array.pop();
  }
  return array;
}

console.log('Our basket shows it is empty now:', empty(basket));
console.log('Calling our basket variable to show it\'s empty', basket);
