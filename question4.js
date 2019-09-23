// Template Literals are a new ES2015 / ES6 feature that allows you to work with strings in a novel way compared to ES5 and below. 
// They are unique because they provide a lot of features that normal strings built with quotes do not,
// in particular: they offer a great syntax to define multiline strings.
const string=`hi friends`
console.log(`${string} !
how are you`);

// -------------------------String Interpolation--------------------------------------

var customer={name:"roshan"}
var card={amount:7, product:"laptop",unitprice:42}
var message=`Hello ${customer.name},want to buy ${card.amount} ${card.product} for a total of ${card.amount} ${card.unitprice} bucks?`
console.log(message);