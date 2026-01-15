export type BookingRequest = {
    start: number;
    end: number;
};

export function isValidBooking(request: BookingRequest): boolean {
    return request.start < request.end;
}
