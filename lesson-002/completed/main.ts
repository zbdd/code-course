import { isValidBooking, getBookingDuration, isLongBooking } from "./booking.js";
import type { BookingRequest } from "./booking.js";

// Create multiple bookings
const bookings: BookingRequest[] = [
    { customerName: "Alice", start: 10, end: 12, roomNumber: 1 },
    { customerName: "Bob", start: 14, end: 15, roomNumber: 2 },
    { customerName: "Charlie", start: 9, end: 13, roomNumber: 3 },
    { customerName: "Diana", start: 16, end: 14, roomNumber: 4 } // Invalid!
];

// Process each booking
for (const booking of bookings) {
    console.log(`\nBooking for ${booking.customerName}:`);

    if (isValidBooking(booking)) {
        const duration = getBookingDuration(booking);
        console.log(`  ✓ Valid booking for ${duration} hours in room ${booking.roomNumber}`);

        if (isLongBooking(booking)) {
            console.log(`  ℹ This is a long booking`);
        }
    } else {
        console.log(`  ✗ Invalid booking - end time is before start time`);
    }
}
