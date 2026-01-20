export class BookingValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "BookingValidationError";
    }
}

export class BookingNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "BookingNotFoundError";
    }
}

export class BookingOverlapError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "BookingOverlapError";
    }
}
