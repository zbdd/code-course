# Lesson 4 — Preventing Overlapping Bookings (Rules + Debugging)

**Theme:** Defining a real business rule and using errors as signals to guide your logic.

---

## What You’ll Learn

- How to define an overlap rule clearly
- How to check ranges with precise comparisons
- How to use a new error type to enforce a business constraint
- How to predict outcomes before running code

---

## Why This Lesson Exists

Real booking systems must enforce constraints, not just validate inputs. “No overlapping bookings in the same room” is a practical rule that forces you to be precise with logic and to interpret errors as useful feedback.

---

## Before You Start

- Start from your **Lesson 3** project (the one with `booking.ts`, `bookingStore.ts`, `bookingErrors.ts`, and `main.ts`).
- Run it first and make sure it works before changing anything.
- Make sure you are editing the correct folder (it’s easy to open the wrong lesson).
- Filenames and import paths must match **exactly** (including `.js` in imports).

If you’re using this repository directly, a working starting point is `lesson-003/completed/` and you can run it with `npm start`.

If you get stuck, compare your work against `lesson-004/completed/`.

---

# Part 1 — Define the Overlap Rule

Two bookings overlap if they are in the **same room** and their times intersect.

For now we are only concerned with time as a number representing hours of the day from 00 (midnight) to 23 (11 pm)

Use this rule (read it carefully):

```
requestStart < existingEnd AND requestEnd > existingStart
```

**Prediction check:**

Scenario 1:

- Booking A: 10–12
- Booking B: 12–14 (same room)

Is there an overlap?

Scenario 2:

- Booking A: 10–12
- Booking B: 11–13 (same room)

Is there an overlap?

<details>
  <summary>Click to reveal answers</summary>

- Booking A: 10–12, Booking B: 12–14 → No overlap (back-to-back is allowed)
- Booking A: 10–12, Booking B: 11–13 → Overlap

</details>

Back-to-back bookings are allowed. Only real intersections are blocked.

---

# Part 2 — Add a New Error Type

**Task:** In `bookingErrors.ts`, create a new error class called `BookingOverlapError`.

Requirements:

- It must `extend Error`
- It must accept a `message: string`
- It must set `this.name = "BookingOverlapError"`

<details>
  <summary>Click to reveal a working implementation</summary>

```ts
export class BookingOverlapError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BookingOverlapError";
  }
}
```

</details>

This lets us handle overlaps differently from invalid input.

---

# Part 3 — Enforce the Rule in `bookingStore.ts`

Open `bookingStore.ts` and add a helper to detect overlaps.

**Task:** Import `BookingOverlapError` from `bookingErrors`.

<details>
  <summary>Click to reveal the import</summary>

```ts
import { BookingOverlapError } from "./bookingErrors.js";
```

</details>

## Step 3.1 — Write the overlap logic (try first)

Write this function. Don’t worry about getting it perfect on the first try — you’ll test it in a minute.

```ts
function isOverlapping(
  requestStart: number,
  requestEnd: number,
  existingStart: number,
  existingEnd: number,
): boolean {
  // 1) Create two booleans:
  // - requestStart is before existingEnd
  // - requestEnd is after existingStart
  // 2) Return true only if both are true
}
```

<details>
  <summary>Click to reveal a working version</summary>

```ts
function isOverlapping(
  requestStart: number,
  requestEnd: number,
  existingStart: number,
  existingEnd: number,
): boolean {
  const startsBeforeExistingEnds = requestStart < existingEnd;
  const endsAfterExistingStarts = requestEnd > existingStart;

  return startsBeforeExistingEnds && endsAfterExistingStarts;
}
```

</details>

## Step 3.2 — Block overlapping bookings

**Task:** Add a function `assertNoOverlap(bookings, request)` that throws if the request overlaps an existing booking **in the same room**.

Hints:

- Loop over `bookings`
- Skip bookings in other rooms
- Use `isOverlapping(...)` to check times
- Throw `new BookingOverlapError(...)` when there is a conflict

```ts
export function assertNoOverlap(
  bookings: Booking[],
  request: BookingRequest,
): void {
  for (const booking of bookings) {
    // Your code here
  }
}
```

<details>
  <summary>Click to reveal a working implementation</summary>

```ts
export function assertNoOverlap(
  bookings: Booking[],
  request: BookingRequest,
): void {
  for (const booking of bookings) {
    if (booking.roomNumber !== request.roomNumber) {
      continue;
    }

    if (isOverlapping(request.start, request.end, booking.start, booking.end)) {
      throw new BookingOverlapError(
        `Room ${request.roomNumber} overlaps with booking ${booking.id}`,
      );
    }
  }
}
```

</details>

**Task:** Call `assertNoOverlap(...)` inside `addBooking()` **before** `createBooking()`.

<details>
  <summary>Click to reveal the line to add</summary>

```ts
assertNoOverlap(bookings, request);
```

</details>

---

# Part 4 — Update the Script and Predict Outcomes

## Step 4.1 — Handle the new error in `main.ts`

**Task:** Import `BookingOverlapError` and update `runStep()` so overlap errors print a friendly message (and the program keeps running).

<details>
  <summary>Click to reveal the import and a working `runStep()` catch branch</summary>

```ts
import { BookingOverlapError } from "./bookingErrors.js";
```

```ts
if (err instanceof BookingOverlapError) {
  console.log(`Overlap error: ${err.message}`);
  return;
}
```

</details>

## Step 4.2 — Add an overlapping booking step

**Task:** Add a new `runStep(...)` that attempts to add a booking that overlaps room 1.

Before you run the program, predict what will happen. What should be printed? Should the script stop?

<details>
  <summary>Click to reveal an example step</summary>

```ts
runStep("Add overlapping booking", () => {
  const request: BookingRequest = {
    customerName: "Eve",
    start: 11,
    end: 13,
    roomNumber: 1,
  };

  bookings = addBooking(bookings, request, generateId);
  printBookings();
});
```

</details>

<details>
  <summary>Click to reveal the expected behavior</summary>

- It should print an “Overlap error: …” message.
- It should continue running the next steps (because `runStep()` catches this error type).

</details>

---

# Debug Task — Fix the Overlap Bug

If you used `<=` or `>=` in `isOverlapping`, back-to-back bookings will be blocked.

Try this test case:

```ts
const request: BookingRequest = {
  customerName: "Frank",
  start: 12,
  end: 13,
  roomNumber: 1,
};
```

If it fails, inspect the overlap logic and fix the comparison.

<details>
  <summary>Click to reveal the most common fix</summary>

Back-to-back bookings should be allowed, so the overlap check should use:

- `<` (not `<=`) for the start vs. end comparison
- `>` (not `>=`) for the end vs. start comparison

</details>

---

# Expected Output

When you run `npm start` from the `lesson-004/completed/` folder, you should see:

```
=== Add valid booking ===

Current bookings:
- id=1 name=Alice room=1 start=10 end=12

=== Add invalid booking ===
Validation error: Start time must be before end time

=== Add back-to-back booking (allowed) ===

Current bookings:
- id=1 name=Alice room=1 start=10 end=12
- id=2 name=Frank room=1 start=12 end=13

=== Add overlapping booking (blocked) ===
Overlap error: Room 1 overlaps with booking 1

=== Remove existing booking ===

Current bookings:
- id=2 name=Frank room=1 start=12 end=13

=== Remove missing booking ===
Not found error: No booking found with id: 999
```

**What this demonstrates:**

1. **Valid booking** — Alice's booking (10–12, room 1) is accepted
2. **Invalid booking** — Bob's booking is rejected because end time (11) is before start time (14)
3. **Back-to-back booking** — Frank's booking (12–13, room 1) is allowed because it starts exactly when Alice's ends
4. **Overlapping booking** — Eve's booking (11–13, room 1) is blocked because it overlaps with Alice's (10–12)
5. **Remove existing** — Alice's booking (id=1) is removed successfully
6. **Remove missing** — Attempting to remove id=999 throws a not-found error

---

# Exercises

1. **Availability check:** Write a function `isRoomAvailable()` that returns `true` or `false` instead of throwing.
2. **Better message:** Include the conflicting booking’s times in the error message.
3. **Transfer:** Apply the same overlap rule to “meeting rooms” or “events” with different field names.

---

# Next Steps

In the next lesson, we’ll make the booking store feel more like a real API by adding `find`, `update`, and clearer return shapes.
