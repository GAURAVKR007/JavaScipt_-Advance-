function marry(person1 , person2){
    console.log('Arguments : ',arguments);

    return `${person1} is now married to ${person2}`;
}

console.log(marry("Minato","Kushina")); 

// There a better ways to pass the arguments than this
// Because this above way make the arguments into an object of like key and value pair

// Optimized way : 

function loves(...args){
    console.log("Arguments : ",args);

    return `${args[0]} and ${args[1]} are both in love with each other`;
}

console.log(loves("Minato","Kushina")); 