import { isValidBooking } from "./booking.js";

const valid = { start: 10, end: 12 };
const invalid = { start: 14, end: 11 };

console.log(isValidBooking(valid));   // true
console.log(isValidBooking(invalid)); // false
