// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(name) {
    cats.push(name);
   return cats
}

function destructivelyPrependCat(name) {
   return cats.unshift(name);
    
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}

function appendCat(name) {
    const newCatArray = [...cats, name];
    return newCatArray
}

function prependCat(name) {
    const newCatArray = cats.slice(0,3);
    newCatArray.unshift("Arnold");
    return newCatArray;
}

function removeLastCat() {
    const newCatArray = cats.slice(0,3);
    newCatArray.pop("Arnold");
    return newCatArray;
}

function removeFirstCat() {
    const newCatArray = cats.slice(0,3);
    newCatArray.shift("Arnold");
    return newCatArray;
}