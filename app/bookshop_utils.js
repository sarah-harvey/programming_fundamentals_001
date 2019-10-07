function addVAT(price) {
  return price + (0.2 * price);
}
function getFullName(first, second) {
  return first.concat(' ', second);
}
function makeHalfPrice(price) {
  return price / 2;
}
function countBooks(catalogue) {
  //   if (!title) throw new Error("Please provide a title");
  // let result = false;
  //return total num of books in the array
  for (let i = 0; i < catalogue.length; i++) {
    const book = catalogue[i];
  }
  // var catalogue = catalogue[i];
  // if (catalogue.includes(title)) {
  return catalogue.length;

}



function isInStock(b) {
  // if quantity is over 0 then book is in stock
  if (b.quantity > 0) {
    return true;
  } else {
    return false;
  }
  // if (b.quantity <= 0) {
  // eslint-disable-next-line no-unreachable
  return false;
}

function getTotalOrderPrice(pr, qu) {
  //function receives 2 arguments, a price and a quantity.
  const subtotal = pr * qu;

  return subtotal + (subtotal * 0.2);

}

//function should multiply the price of the book being ordered by the quantity desired
//then apply a VAT of 20% to the total order
//should return the total price with VAT applied.
//
//function addVAT(price) {
// return price + (0.2 * price);



module.exports = {
  addVAT,
  getFullName,
  makeHalfPrice,
  countBooks,
  isInStock,
  getTotalOrderPrice,
};