// class User {
//     //define the constructor function that will initialize new objects
//     constructor (name, department, courseDate) {
//       this.name = name;
//       this.department = department;
//       this. courseDate = courseDate;
//     }
    
//     speak(sentence) {
//         console.log(`${this.name} says "${sentence}"`)
//     }

//     moveDepartment (newDepartment) {
//         this.department = newDepartment
//     }
//   }

// var Dan = new User("Dan", "Coding Bootcamp", new Date(2018,6,3));
// var Shani = new User("Shani", "Coding Evening Course", new Date(2019,4,2));
// var Hunter = new User("Hunter", "Dope City", Date(2020,2,2))

// console.log(Dan)
// console.log(Shani)
// Shani.moveDepartment("Coding Bootcamp")
// console.log(Shani)
// Shani.speak("Gurl you don't even know")
// console.log(Hunter)

class Vehicle {
    constructor (x=0, y=0, speed, fuel) {
        this._x = x
        this._y = y
        this.speed = speed || Vehicle.defaultSpeed
        this._fuel = fuel
    }
    honk () {
        console.log("Beep! Beep!");
     }
  
    static getInfo(){
        console.log("Cars are great!!");
     }
    static setDefaultSpeed (speed){
         Vehicle.defaultSpeed = speed
     }
    get x() {
        return this._x;
    }
    set x(value) {
        if (this._fuel) {
            this._x = value;
          } else {
            console.log("you ain't got no fuel!")
        }
    }
    get y() {
        return this._y
    
    }
    set y(value) {
        if (this._fuel) {
            this._x = value;
          } else {
            console.log("you ain't got no fuel!")
        }
    }
}

Vehicle.defaultSpeed = 5
var myCar = new Vehicle ()

console.log(myCar)
myCar.x = 3