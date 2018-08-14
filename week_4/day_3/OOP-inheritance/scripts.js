class Vehicle{
    //define the constructor function within the class
		constructor (x, y, speed) {
        this._x = x;
        this._y = y;
        this.speed = speed;
		}
		honk () {
        console.log("Beep! Beep!");
		 }
		get x() {
			return this._x
		 }
		set x(value) {
			this._x = value
		}
    get y() {
			return this._y
		}
		set y(value) {
			this._y = value
		}
		randomStep() {
			this.x += Math.floor(Math.random()*10) * this.speed
			this.y += Math.floor(Math.random()*10) * this.speed
			console.log(this.x,this.y)
		}
		static getInfo(){
			console.log("Cars are great!!");
     }
  }

class Bicycle extends Vehicle{
		constructor (x, y) {
    	super(x, y, 2);
		}
		honk () {
    	console.log("Hey! Watch out!");
		}
	}

class Car extends Vehicle{
	constructor (x, y){
		super(x, y, 5);
	}
	turnOnAc() {
		console.log("Cold!")
	}
}

const myCar = new Car(0,0)
myCar.turnOnAc()

console.log(myCar instanceof Object)

class FastCar extends Car{
	constructor(x, y) {
		super(x, y, 10);
	}
}

class RaceCar extends Car{
	constructor(x, y) {
		super(x, y, 20);
	}
}

let Mcqueen = new RaceCar(3,4)
Mcqueen.randomStep()

class Airplane{
	constructor(altitude) {
		this._altitude = altitude
	}
	get altitude() {
		return this._altitude
	}
	set altitude(value) {
		this._altitude = value
	}
	takeOff() {
		if (this.altitude === 0) {
			this.altitude = 10000
			console.log("We have liftoff to " + this.altitude + " feet")
		} else {
			console.log("You're already in the air!")
		}
	}
	landing() {
		if (this.altitude > 0) {
			this.altitude = 0
			console.log ("Welcome to Earth Captain")
		} else {
			console.log("You're already on the ground!")
		}
	}
}

const AirForce1 = new Airplane(0)
AirForce1.takeOff()
AirForce1.landing()
AirForce1.landing()
AirForce1.takeOff()
AirForce1.takeOff()

//   class User{
//     //define the constructor function within the class
//     constructor (name, department, courseDate) {
//       this.name = name;
//       this.department = department;
//       this.courseDate = courseDate;
//     } 
  
//     //define any other functions/properties of the class
//     speak (sentence) {
//       console.log(this.name + " says: '" + sentence + "'");
//     }
  
//     moveDepartment (newDepartment){
//       this.department = newDepartment;
//     }
//   }

//   class Bob extends User{
//     constructor (courseDate) {
//       //call super in the constructor to invoke the parent's constructor
//       super("Bob", "Bob's Department", courseDate);
//     }
  
//     speak (sentence) {
//       //use super again to invoke the parent's `speak`
//       super.speak(sentence);
//       //add something unique to this class's `speak`
//       console.log('...and a hush falls over the crowd...');
//     }
//   }
   
//   const b = new Bob();
//   b.speak('Check it.');
//   // Bob says: 'Hello!'