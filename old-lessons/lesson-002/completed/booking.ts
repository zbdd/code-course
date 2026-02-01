export type BookingRequest = {
    customerName: string;
    start: number;
    end: number;
    roomNumber: number;
};

export function isValidBooking(request: BookingRequest): boolean {
    return request.start < request.end;
}

export function getBookingDuration(request: BookingRequest): number {
    return request.end - request.start;
}

export function isLongBooking(request: BookingRequest): boolean {
    const duration = getBookingDuration(request);
    return duration > 2;
}