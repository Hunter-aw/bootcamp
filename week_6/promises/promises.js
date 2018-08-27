var areThereBunsLeft = true;
var isThereMeatLeft = true;
var money = 10
var burgerPrice = 20

var isThereBurgerLeft = () => (areThereBunsLeft && isThereMeatLeft)

//Promise
var willWeGetaBurger = new Promise(
    function (resolve, reject) {
        setTimeout(function () {
            if (isThereBurgerLeft()) {
                resolve('Yum yum!'); // fulfilled
            } else {
                reject('hmmm... pizza instead');
            }
        }, 2000)
    }
);

var canIAffordTheBurger = new Promise(
    function (res, rej) {
        if (money > burgerPrice) {
            res("enjoy your burger!")
        } else {
            rej("ur broke! geddout of here!")
        }
    }
)

// var 
// That is a promise... 
// An object that receives 2 parameters resolve, reject (similar to success, error)
// promise syntax look like this
// new Promise(/* executor*/ function (resolve, reject) { ... } );

//call our promise

var whatCanWeEat = function () {
    willWeGetaBurger //
        .then(canIAffordTheBurger
            .then(function (fulfilled) {
            //yay, burger!
            console.log(fulfilled);
        }));
};

whatCanWeEat(); //invoke function that will call our promise