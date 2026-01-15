import { createBooking } from "./booking.js";
import type { Booking, BookingRequest } from "./booking.js";
import { BookingNotFoundError } from "./bookingErrors.js";

export function addBooking(
    bookings: Booking[],
    request: BookingRequest,
    generateId: () => string
): Booking[] {
    const booking = createBooking(request, generateId);
    return [...bookings, booking];
}

export function removeBooking(bookings: Booking[], bookingId: string): Booking[] {
    const exists = bookings.some((b) => b.id === bookingId);
    if (!exists) {
        throw new BookingNotFoundError(`No booking found with id: ${bookingId}`);
    }

    return bookings.filter((b) => b.id !== bookingId);
}

export function listBookings(bookings: Booking[]): Booking[] {
    return bookings;
}
