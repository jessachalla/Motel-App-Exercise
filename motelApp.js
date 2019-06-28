const BookRoom = require("./BookRoom");

// Create reservation for 1 bed, 1 night, no pets
let smithReservation = new BookRoom(1);
console.log(smithReservation.getDetails());
//floor: 1 or 2
//total: 50


// Create reservation for 2 bed 3 nights, 1 pet
let brownReservation = new BookRoom(3, 2, 1, false);
console.log(brownReservation.getDetails());
//floor: 1
//total: 245

// Create reservation for 3 bed 1 night, 0 pets, and handicap accessible
let martinReservation = new BookRoom(1, 3, 0, true)
console.log(martinReservation.getDetails());
//floor: 1
//total: 90

// Create reservation for 2 bed, 4 nights, 2 pets, and handicap accessible
let millerReservation = new BookRoom (4, 2, 2, true)
console.log(millerReservation.getDetails());
//floor: 1
//total: 340

// Create reservation for 2 bed, 4 nights, 3 pets
// Should throw error
let jonasReservation = new BookRoom (4, 2, 3, false)
console.log(jonasReservation.getDetails());
//"Sorry. Only 2 pets or less."