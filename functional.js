let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach((element) => {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(elements => urlify(elements));
}
console.log(functionalUrls(states));

// ex 6.1.1.1
// Take in the 'states' variable above and return an array
// of the form https://example.com/<urlified from>

function stateURLs(states) {
  return states.map(states => `https://example.com/${urlify(states)}`);
}
console.log(stateURLs(states));

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach((element) => {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(states) {
  return states.filter(states => states.split(/\s+/).length === 1);
  };
console.log(functionalSingles(states));

// ex6.2.1.1
// filter function
function dakotas1(states) {   // version 1 : includes()
  return states.filter(states => states.includes("Dakota"));
}
function dakotas2(states) {   // version 2 : regex
  return states.filter(states => states.split(/\s+/).length === 2);
}
console.log(dakotas1(states));
console.log(dakotas2(states));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach((element) => {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {

  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));

// ex 6.3.4.1
// Use reduce to find product of all elements in an array
let a = [1, 2, 3, 4, 5]
function product(elements) {
  return elements.reduce((product, element) => {
                          product *= element; return product;
                        }, 1);
}
console.log(product(a));
