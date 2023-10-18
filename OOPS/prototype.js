// we want to make a method that ..the method remove all extra spaces from a string

let myHeroes = ['thor','spiderman'];

let heroPower = {
    thor:'hammer',
    spiderman:'slingshot',

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rahul = function(){
    console.log("Rahul is present in all object");
}

// heroPower.rahul();
myHeroes.rahul();