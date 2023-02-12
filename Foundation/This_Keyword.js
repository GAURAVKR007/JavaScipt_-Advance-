// 1: Gives Method acess to their object
const obj = {
    name: 'Roronoa Zoro',
    hello() {
        return 'Hello ' + this.name;
    },
    hell() {
        return 'King of Hell : '+ this.name+'!'
    },
    helloAgain() {
        return this.hello()+" Again"
    }
}

console.log(obj.helloAgain()); 

// 2: Execute same code for multiple objects

const name = 'Luffy';
function importantPerson() {
    console.log(this.name+'!');
}

const obj1 = {
    name: 'Naruto',
    importantPerson: importantPerson
}

const obj2 = {
    name: 'Goku',
    importantPerson: importantPerson
}

// console.log(name);
importantPerson()
obj1.importantPerson();
obj2.importantPerson();