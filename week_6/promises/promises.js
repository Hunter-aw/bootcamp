var isThereBurgerLeft = false;

//Promise
var willWeGetaBurger = new Promise(
    function(resolve, reject) {
        if (isThereBurgerLeft) {
            resolve('Yum yum!'); // fulfilled
        } else {
            reject('hmmm... pizza instead'); reject
        }
    }
);
// That is a promise... 
// An object that receives 2 parameters resolve, reject (similar to success, error)
// promise syntax look like this
// new Promise(/* executor*/ function (resolve, reject) { ... } );

//call our promise

var whatCanWeEat = function() {
    
}