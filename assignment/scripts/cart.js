console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5; // Stretch Goals Global variable.

// Checking to see our array is empty in the console below.
console.log('Our basket array will return empty.', basket);

// Below is the code I came up with before the Stretch Goals.

// function addItem( item ) {
//   basket.push(item);
//   // Using this expression below, we're showing that the basket has 1 item or more
//   // in it.
//   if (basket.length > 0) {
//     return true;
//   }
// }


// Stretch Goals adding ifFull function to addItem function.

function addItem (item) {
  if (isFull()) {
    return false;
  } else {
    basket.push(item);
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
console.log('Adding Carrots (expect true)', addItem('Carrots'));
listItems(basket);
console.log('We can\'t add Cherries (expect false):', addItem('Cherries'));
listItems(basket);
console.log(`Basket doesn't contain Cherries. ${basket}`)

// The console log below shows our Stretch Goals removeItem function in the works.
// I gave to examples, one showing an item that's in our basket and another one that
// isn't in our basket and returns a null value.
console.log('Expecting Carrots to be removed:', removeItem(basket, 'Carrots'));
console.log('Expected output is null for item Strawberries:', removeItem(basket, 'Strawberries'))

console.log('Showing our basket.', listItems(basket));


// Creating a function to empty our basket. A while loop is great for this function.
// It allows us to look at the length of our array and as long as it's greater than 0,
// it will continue to pop out our items.
function empty(array) {
  while (array.length > 0) {
    array.pop();
  }
  return array;
}

console.log('Our basket shows it is empty now:', empty(basket));
console.log('Calling our basket variable to show it\'s empty', basket);


// Stretch Goals

function isFull() {
  // Below we're asking if the length of our array is less than our constant maxItems.
  // maxItems was moved to the top of the script.
  if (basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
}


function removeItem (array, item) {
  let indexOfItem = array.indexOf(item);
  // Below we need to check to see if the item is in the array.
  if (indexOfItem > - 1) {
    // Below we ask for the first occurence of the item and want it taken out.
    array.splice(indexOfItem, 1)
    return item;
  } else {
    // If the item wasn't found, we are asking to return a null value.
    return null;
  }
}

// Added testing

addItem('cherries');
console.log('What\'s in the basket now:', listItems(basket));

addItem('pineapple');
console.log('What\'s in the basket now:', listItems(basket));

addItem('apple');
console.log('What\'s in the basket now:', listItems(basket));

addItem('juice');
console.log('What\'s in the basket now:', listItems(basket));
console.log('Let\s remove cherries:', removeItem(basket, 'cherries'));
console.log('What\'s in the basket now:', listItems(basket));
console.log('Let\'s use our isFull function:', isFull(basket));

addItem('V8');
console.log('What\'s in the basket now:', listItems(basket));

addItem('juice');
console.log('What\'s in the basket now:', listItems(basket));

// Let's try adding another item.

console.log('grapes will return false and won\'t be added:', addItem('grapes'));
console.log('What\'s in the basket now:', listItems(basket));

console.log('Let\'s use our isFull function:', isFull(basket));

console.log('Time to empty our basket.', empty(basket));
console.log('Calling our basket variable to double check it is empty', basket);
