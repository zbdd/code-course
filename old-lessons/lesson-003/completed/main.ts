import type { Booking, BookingRequest } from "./booking.js";
import { addBooking, removeBooking, listBookings } from "./bookingStore.js";
import {
    BookingNotFoundError,
    BookingValidationError
} from "./bookingErrors.js";

let bookings: Booking[] = [];

let nextId = 1;
const generateId = () => String(nextId++);

function printBookings() {
    console.log("\nCurrent bookings:");
    for (const b of listBookings(bookings)) {
        console.log(
            `- id=${b.id} name=${b.customerName} room=${b.roomNumber} start=${b.start} end=${b.end}`
        );
    }
}

function runStep(label: string, fn: () => void) {
    console.log(`\n=== ${label} ===`);
    try {
        fn();
    } catch (err) {
        if (err instanceof BookingValidationError) {
            console.log(`Validation error: ${err.message}`);
            return;
        }
        if (err instanceof BookingNotFoundError) {
            console.log(`Not found error: ${err.message}`);
            return;
        }

        throw err;
    }
}

runStep("Add valid booking", () => {
    const request: BookingRequest = {
        customerName: "Alice",
        start: 10,
        end: 12,
        roomNumber: 1
    };

    bookings = addBooking(bookings, request, generateId);
    printBookings();
});

runStep("Add invalid booking", () => {
    const request: BookingRequest = {
        customerName: "Bob",
        start: 14,
        end: 11,
        roomNumber: 2
    };

    bookings = addBooking(bookings, request, generateId);
    printBookings();
});

runStep("Remove existing booking", () => {
    bookings = removeBooking(bookings, "1");
    printBookings();
});

runStep("Remove missing booking", () => {
    bookings = removeBooking(bookings, "999");
    printBookings();
});
