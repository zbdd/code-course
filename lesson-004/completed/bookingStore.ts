import { createBooking } from "./booking.js";
import type { Booking, BookingRequest } from "./booking.js";
import { BookingNotFoundError, BookingOverlapError } from "./bookingErrors.js";

function isOverlapping(
    requestStart: number,
    requestEnd: number,
    existingStart: number,
    existingEnd: number
): boolean {
    const startsBeforeExistingEnds = requestStart < existingEnd;
    const endsAfterExistingStarts = requestEnd > existingStart;

    return startsBeforeExistingEnds && endsAfterExistingStarts;
}

export function assertNoOverlap(bookings: Booking[], request: BookingRequest): void {
    for (const booking of bookings) {
        if (booking.roomNumber !== request.roomNumber) {
            continue;
        }

        if (isOverlapping(request.start, request.end, booking.start, booking.end)) {
            throw new BookingOverlapError(
                `Room ${request.roomNumber} overlaps with booking ${booking.id}`
            );
        }
    }
}

export function addBooking(
    bookings: Booking[],
    request: BookingRequest,
    generateId: () => string
): Booking[] {
    assertNoOverlap(bookings, request);
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
