# Lesson 3 — Structuring Our Booking Engine (Modules + Errors)

**Theme:** Organising code into clear responsibilities using functions and modules (no classes yet)

---

## What You’ll Learn

- How to **separate responsibilities** across multiple files
- How to **enforce rules using errors** instead of just returning `true` / `false`
- How to use **try/catch** to keep your program running when something goes wrong
- How a small script can be the *application layer* on top of a stricter domain

---

## Why This Lesson Exists

So far, your code:

- Checks whether bookings are valid
- Prints results

That’s good for learning syntax. But real programs must:

1. **Enforce rules strictly** (bad data should *not* be allowed in)
2. **Organise code by responsibility** (not everything in one file)
3. **Handle failure intentionally** (not crash, not silently ignore)

Today we will turn your booking logic into a **small engine** with clear boundaries.

---

# Part 1 — Introducing Domain Errors

Right now, your validation functions return `true` or `false`. That means **incorrect data can still flow through the system** if someone forgets to check the return value.

In professional code, invalid domain data is usually treated as an **exception**.

We’ll create our own error types so we can react differently depending on *what went wrong*.

---

## Step 1 — Create `bookingErrors.ts`

Create a new file called `bookingErrors.ts`.

Add this code:

```ts
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
```

### What we added

- Two **custom error types**
- Both extend JavaScript’s built-in `Error`

### Why this matters

Now we can distinguish:

- "This booking is invalid" from
- "This booking does not exist"

Later, this lets us show better messages or respond differently.

---

# Part 2 — Making Validation Strict

In Lesson 2, `isValidBooking()` returned `true` or `false`. That is *informational*.

Now we want validation to be **enforced**.

---

## Step 2 — Update `booking.ts`

Open your existing `booking.ts` file.

We will add:

1. A stricter validation function
2. A new `Booking` type that includes an `id`
3. A `createBooking()` function that *refuses* invalid data

Add the following pieces **one at a time**.

---

### Step 2.1 — Import the new error type

At the top of `booking.ts`, add:

```ts
import { BookingValidationError } from "./bookingErrors.js";
```

**What this does:** Allows this file to throw meaningful domain-specific errors.

---

### Step 2.2 — Add a stricter validator

Add this function below your existing types:

```ts
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
```

**What we added:**

- A function that returns **nothing** (`void`)
- It **throws errors** instead of returning `true` / `false`

**Why this matters:**

- If the booking is invalid, the program is forced to deal with it
- Mistakes can no longer be ignored

---

### Step 2.3 — Introduce a real `Booking`

Below your `BookingRequest` type, add:

```ts
export type Booking = BookingRequest & {
  id: string;
};
```

**What we added:**

- A new type that represents a booking that has been accepted into the system

**Why this matters:**

- A `BookingRequest` is **input**
- A `Booking` is **trusted system data**

This distinction is common in professional systems.

---

### Step 2.4 — Create bookings safely

Add this function:

```ts
export function createBooking(
  request: BookingRequest,
  generateId: () => string
): Booking {
  assertValidBookingRequest(request);

  return {
    id: generateId(),
    ...request,
  };
}
```

**What we added:**

- A function that converts a `BookingRequest` into a valid `Booking`

**Why this matters:**

- Invalid data cannot enter the system
- ID generation is passed in as a function (keeps this logic flexible)

---

# Part 3 — Managing a List of Bookings

We will now move "array logic" into its own file.

---

## Step 3 — Create `bookingStore.ts`

Create a new file called `bookingStore.ts`.

Add the following code:

```ts
import { Booking, BookingRequest, createBooking } from "./booking.js";
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
```

### What we added

- A dedicated module for **list operations**
- Functions that return **new arrays** instead of mutating existing ones
- A specific error for “booking not found”

### Why this matters

- Domain rules stay in `booking.ts`
- Collection behaviour lives in `bookingStore.ts`
- This separation is the foundation of maintainable systems

---

# Part 4 — Handling Errors in the Script

Now we update `main.ts` so it becomes the **application layer**.

---

## Step 4 — Update `main.ts`

We will:

1. Call our new functions
2. Catch and handle domain errors
3. Keep the program running

Open `main.ts` and replace its contents with the following, **reading each section carefully**.

```ts
import { BookingRequest } from "./booking.js";
import { addBooking, removeBooking, listBookings } from "./bookingStore.js";
import {
  BookingNotFoundError,
  BookingValidationError,
} from "./bookingErrors.js";

let bookings: any[] = [];

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
    roomNumber: 1,
  };

  bookings = addBooking(bookings, request, generateId);
  printBookings();
});

runStep("Add invalid booking", () => {
  const request: BookingRequest = {
    customerName: "Bob",
    start: 14,
    end: 11,
    roomNumber: 2,
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
```

---

## What Just Happened

- The **domain layer** (`booking.ts`) enforces rules
- The **store layer** (`bookingStore.ts`) manages collections
- The **script layer** (`main.ts`) decides how to react to failures

This is the beginning of real architecture — without any frameworks.

---

# Exercises

### Exercise 1 — Use a real type for `bookings`

Replace:

```ts
let bookings: any[] = [];
```

with a properly typed array using the `Booking` type.

---

### Exercise 2 — Add a new validation rule

Add a rule inside `assertValidBookingRequest()`:

- Booking times must be between **0 and 24**

---

### Exercise 3 — Improve output

Update `printBookings()` so it:

- Prints the total number of bookings
- Prints “(no bookings)” when the list is empty

---

## Next Lesson Preview

In Lesson 4, we will add a **real business constraint**:

> **Bookings for the same room must not overlap.**

This will force:

- More advanced iteration
- Stronger domain validation
- More careful thinking about correctness
