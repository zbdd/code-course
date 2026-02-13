# Lesson 001 Logic - Homework 3

## Part A: Basic For Loops

1. What will this loop print?

```ts
for (let i = 0; i < 3; i++) {
    console.log(i);
}
```

2. Write a `for` loop that prints the numbers from 0 to 5 (inclusive).

3. Write a `for` loop that prints the numbers from 5 down to 0 (inclusive). Hint: use decrement `i--`.

4. What will this loop print?

```ts
for (let i = 1; i <= 4; i++) {
    console.log(i * 2);
}
```

5. Write a `for` loop that prints "Hello" 3 times.

## Part B: Basic While Loops

6. What will this loop print?

```ts
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}
```

7. Write a `while` loop that prints the numbers from 0 to 4 (inclusive).

8. Rewrite question 3 (counting down from 5 to 0) using a `while` loop instead of a `for` loop.

9. What will this loop print?

```ts
let x = 10;
while (x > 5) {
    console.log(x);
    x = x - 2;
}
```

## Part C: Looping Through Arrays

10. What will this loop print?

```ts
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

11. Write a `for` loop that prints each number in the array `[5, 10, 15, 20]`.

12. Write a `while` loop that prints each element of the array `["dog", "cat", "bird"]` using a counter variable.

## Part D: Break and Continue

13. Fix this code so it stops when it finds the number `3`:

```ts
let i = 0;
while (i < 10) {
    if (i === 3) {
        continue;
    }
    console.log(i);
    i++;
}
```

14. What will this loop print?

```ts
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        break;
    }
    console.log(i);
}
```

15. Write a `for` loop that prints the numbers 1 through 10, but skips printing the number 5. Use `continue`.

16. Write a `while` loop that starts at 0, increments by 1, and stops when the number reaches 7. Print each number.

## Part E: Debugging Loops

17. This loop should print 0, 1, 2, 3, 4 but it doesn't stop at the right place. Fix it.

```ts
for (let i = 0; i <= 4; i++) {
    console.log(i);
}
```

18. This loop should sum the numbers in the array `[1, 2, 3, 4, 5]` and print the total. Fix the bug.

```ts
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum = numbers[i];
}
console.log(sum);
```

## Part F: Combining Loops with Control Flow

19. Write a `for` loop that prints numbers from 1 to 10, but prints `"Even"` for even numbers and `"Odd"` for odd numbers. (Hint: use the modulo operator `%`.)

20. Write a program that:
- Uses a `while` loop starting at 1
- Prints the number if it is less than or equal to 5
- Uses `break` to stop when the number reaches 8
- Increments by 1 each iteration

## Part G: Short Reflection

21. What was the main difference between `for` and `while` loops for you?

22. Did any of the break/continue concepts feel tricky? Explain.
