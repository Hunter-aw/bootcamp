// partner exercise 1

// var person = {
//     hungry: true,
//     feed: function () {
//         if (this.hungry) {
//             this.hungry = false;
//             alert('Im no longer hungry!');
//         }
//     }
// }

// person.feed()

// partner exercise 2 - didn't get this

// var garage = {
//     car1: {
//         name: 'Audi',
//         liters: 3,
//         fillTank: pump
//     },
//     car2: {
//         name: 'Mercedes',
//         liters: 1,
//         fillTank: pump
//     }
// };
// var pump = function (amount) {
//     this.liters += amount;
//     console.log ('You put ' + amount + 'liters in ' + garage.name)
//     return liters
// };

// garage.car1.fillTank(2);
// console.log('Audi should have 5 liters: ', garage.car1.liters)

// garage.car2.fillTank(30)
// console.log('Mercedes should have 31 liters: ', garage.car2.liters)

// partner exercise 3

// var pumpFuel = function (airplane) {
//     airplane.fuel +=1;
// };
// var airplane = {
//     fly: function () {
//         if (this.fuel < 2) {
//             return 'on the ground';
//         } else {
//             return 'flying!';
//         }
//     },
//     fuel: 0
// };

// console.log('the plane should not be able to fly (yet): ' + airplane.fly());
// pumpFuel(airplane);
// console.log('The plane shoudl STILL not be able to fly: ' + airplane.fly());
// pumpFuel(airplane);
// console.log('Can it fly now? ' + airplane.fly());

// Partner exercise 4

// var tipJar = {
//     coinCount: 20,
//     tip: function() {
//         this.coinCount +=1;
//     },
//     stealCoins: function(coins)  {
//         this.coinCount -=coins;
//     }
// };

// tipJar.tip();
// console.log('Whishing well should have 21 coins: ' + tipJar.coinCount);
// tipJar.stealCoins(3);
// console.log('Wishing well shoul dhave 18 coins: '+ tipJar.coinCount);
// tipJar.stealCoins(10);
// console.log('Wishing wells hould have 8 coins: ' + tipJar.coinCount);

// Partner exercise 5

// var revealSecret = function() {
//     return this.secret;
// };

// var shoutIt = function (person, func) {
//     person.revealItAll = func;
//     var result = person.revealItAll();
//     alert(person.name + " said: " + result);
// };

// var avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
// };

// var narkis = {
//     name: "Narkis",
//     secret: "I dont have secrest because I'm zen like that."
// };

// shoutIt(avi, revealSecret);
// shoutIt(narkis, revealSecret);