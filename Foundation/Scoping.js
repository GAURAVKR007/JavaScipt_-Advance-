// Function Scoping 
function loopVar() {
    for(var i =0; i<5;i++){
        console.log(i);
    }
    console.log('final in loopVar : ',i);
}

loopVar()


// Block Scoping 
function loopLet(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
    console.log('final in loopLet : ',i);   // It will give error, since i is in for loop block scope
}

loopLet()





// var --> Functional Scope 
// const and let  --> Block Scope 