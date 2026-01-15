import { BookingValidationError } from "./bookingErrors.js";

export type BookingRequest = {
    customerName: string;
    start: number;
    end: number;
    roomNumber: number;
};

export type Booking = BookingRequest & {
    id: string;
};

export function assertValidBookingRequest(request: BookingRequest): void {
    if (request.customerName.trim().length === 0) {
        throw new BookingValidationError("Customer name cannot be empty");
    }

    if (request.start >= request.end) {
        throw new BookingValidationError("Start time must be before end time");
    }

    if (!Number.isInteger(request.roomNumber) || request.roomNumber <= 0) {
        throw new BookingValidationError("Room number must be a positive integer");
    }
}

export function createBooking(
    request: BookingRequest,
    generateId: () => string
): Booking {
    assertValidBookingRequest(request);

    return {
        id: generateId(),
        ...request
    };
}
