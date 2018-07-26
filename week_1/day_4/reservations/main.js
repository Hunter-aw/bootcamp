var reservations = {
  'Bob': {
    claimed: false
  },
  'Ted': {
    claimed: true
  }
}

var name = prompt('Please enter the name for your reservation');
// let name =  new RegExp(oldName, "i");

// newReservations = reservations.keys()
// var reservationNamer = function () {
//   for (let newName of newReservations) {
//     newName = newName.toLowerCase()
//   } return newReservations
// }

var claimReservation = function () {
  if ((reservations[name]) && (reservations[name].claimed) === false) {
    return (alert("Welcome to George and Sons, we have your table ready"))
  } else if ((reservations[name]) && (reservations[name].claimed === true)) {
    return alert("well this is awkward, someone's taken your table")
  } else {
    reservations[name] = {
      claimed: true
    }
    return alert(`We have plentry of room, come on in ${name}!`)
  }
}
// reservationNamer();
claimReservation();