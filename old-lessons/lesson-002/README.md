# Lesson 2 - Working with Multiple Bookings

## What You'll Learn

- Working with arrays (lists of data)
- Adding more properties to objects
- Creating multiple functions
- Using loops to process lists
- Understanding `if` statements for decision-making

---

## Part 1: Expanding Our Booking Object

In Lesson 1, our booking only had `start` and `end` times. Real bookings need more information!

### Update `booking.ts`

Let's add more properties to our `BookingRequest` type:

```typescript
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
```

**What's new:**

- `customerName: string` - added a text field for the customer's name
- `roomNumber: number` - which room is being booked
- `getBookingDuration()` - calculates how long the booking is
- `isLongBooking()` - checks if a booking is longer than 2 hours

---

## Part 2: Understanding Arrays

An **array** is a list of items. Think of it like a shopping list or a to-do list.

### Array Basics

```typescript
// A list of numbers
const numbers = [1, 2, 3, 4, 5];

// A list of strings
const names = ["Alice", "Bob", "Charlie"];

// A list of objects
const bookings = [
    { customerName: "Alice", start: 10, end: 12, roomNumber: 1 },
    { customerName: "Bob", start: 14, end: 15, roomNumber: 2 }
];
```

**Key points:**

- Arrays use square brackets `[ ]`
- Items are separated by commas
- You can have a list of anything: numbers, strings, objects, etc.

### Accessing Array Items

Arrays use **index numbers** starting from 0:

```typescript
const names = ["Alice", "Bob", "Charlie"];

console.log(names[0]); // "Alice" (first item)
console.log(names[1]); // "Bob" (second item)
console.log(names[2]); // "Charlie" (third item)
```

Why start at 0? It's a programming convention - the first item is at position 0.

---

## Part 3: Loops - Processing Multiple Items

A **loop** lets you do something with each item in a list.

### The `for...of` Loop

```typescript
const names = ["Alice", "Bob", "Charlie"];

for (const name of names) {
    console.log(name);
}
```

This prints:

```
Alice
Bob
Charlie
```

**How it works:**

1. Take the first item from `names`
2. Call it `name` and run the code inside `{ }`
3. Repeat for the next item
4. Stop when all items are processed

---

## Part 4: If Statements - Making Decisions

An **if statement** lets your code make decisions.

### Basic If Statement

```typescript
const temperature = 22;

if (temperature >= 20) {
    console.log("It's warm enough for short sleeves");
}
```

**How it works:**

- `if (condition)` - check if something is true
- If true, run the code inside `{ }`
- If false, skip it

### If-Else Statement

```typescript
const temperature = 16;

if (temperature >= 20) {
    console.log("It's warm enough for short sleeves");
} else {
    console.log("Grab a light jacket");
}
```

This provides an alternative action if the condition is false.

---

## Part 5: Putting It All Together

### Update `main.ts`

```typescript
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
```

**Note:** With `verbatimModuleSyntax` enabled, import types using `import type` to avoid compile errors.

### Run It

```bash
node --import tsx main.ts
```

**Expected output:**

```
Booking for Alice:
  ✓ Valid booking for 2 hours in room 1

Booking for Bob:
  ✓ Valid booking for 1 hours in room 2

Booking for Charlie:
  ✓ Valid booking for 4 hours in room 3
  ℹ This is a long booking

Booking for Diana:
  ✗ Invalid booking - end time is before start time
```

---

## Understanding the New Concepts

### 1. String Interpolation

```typescript
console.log(`Booking for ${booking.customerName}:`);
```

- Backticks `` ` `` (not regular quotes) let you insert variables into strings
- `${variable}` inserts the variable's value into the text
- Example: `${booking.customerName}` becomes `"Alice"`

### 2. Type Annotations for Arrays

```typescript
const bookings: BookingRequest[] = [...];
```

- `BookingRequest[]` means "an array of BookingRequest objects"
- The `[]` after the type name indicates it's an array

### 3. Nested If Statements

```typescript
if (isValidBooking(booking)) {
    // This only runs if the booking is valid

    if (isLongBooking(booking)) {
        // This only runs if the booking is valid AND long
    }
}
```

You can put `if` statements inside other `if` statements to make more complex decisions.

---

## Exercises

Try these on your own:

1. **Add a new property**: Add a `price: number` property to `BookingRequest`. Create a function that calculates the total price (price per hour × duration).

2. **Filter bookings**: Create a function called `getValidBookings()` that takes an array of bookings and returns only the valid ones.

3. **Count bookings**: Create a function that counts how many bookings are for a specific room number.

4. **Find earliest booking**: Create a function that finds the booking with the earliest start time.

---

## Quick Reference

- **Array**: A list of items using `[ ]`
- **Index**: The position of an item in an array (starts at 0)
- **Loop**: Repeat code for each item in a list
- **for...of**: A type of loop that iterates through arrays
- **if statement**: Make decisions based on conditions
- **String interpolation**: Insert variables into strings using `` `${variable}` ``
- **Type annotation**: Specify what type a variable should be

---

## Next Steps

In Lesson 3, we'll learn about:

- Separating responsibilities across multiple files
- Enforcing rules with errors instead of `true`/`false`
- Using `try/catch` to handle failures cleanly
- Keeping the script layer thin and explicit
