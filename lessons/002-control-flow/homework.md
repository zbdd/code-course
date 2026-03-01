# Lesson 002 Control Flow - Homework

## Part A: For Loops

1. What will this loop print?

```ts
for (let i = 0; i < 4; i++) {
    console.log(i);
}
```

2. Write a `for` loop that prints the numbers from 1 to 10 (inclusive).

3. Write a `for` loop that prints even numbers from 2 to 20 (inclusive). Hint: you can start at 2 and increment by 2.

4. What will this loop print?

```ts
for (let i = 10; i >= 0; i -= 3) {
    console.log(i);
}
```

5. Write a `for` loop that calculates the sum of all numbers from 1 to 100 and prints the result.

6. What will this loop print?

```ts
let words: string[] = ["hello", "world"];
for (let i = 0; i < words.length; i++) {
    console.log(words[i].length);
}
```

## Part B: While Loops

7. What will this loop print?

```ts
let n: number = 64;
while (n > 1) {
    n = n / 2;
    console.log(n);
}
```

8. Write a `while` loop that prints the numbers from 10 down to 1 (inclusive).

9. Write a `while` loop that doubles a variable starting at `1` until it exceeds `1000`, then prints the final value.

10. Rewrite your answer to question 3 (even numbers 2 to 20) using a `while` loop.

## Part C: Do...While

11. What will this loop print?

```ts
let x: number = 100;
do {
    console.log(x);
    x = x - 25;
} while (x > 0);
```

12. What is the difference between this `while` loop and this `do...while` loop when `n` starts at `0`?

```ts
// Version A
let n: number = 0;
while (n > 0) {
    console.log(n);
    n--;
}

// Version B
let n: number = 0;
do {
    console.log(n);
    n--;
} while (n > 0);
```

## Part D: Switch Statements

13. What does `label` end up being?

```ts
let code: string = "B";
let label: string;

switch (code) {
    case "A":
        label = "Alpha";
        break;
    case "B":
        label = "Bravo";
        break;
    case "C":
        label = "Charlie";
        break;
    default:
        label = "Unknown";
        break;
}
```

14. Write a `switch` statement that takes a variable `month` (a number 1–12) and sets a variable `season` to `"Winter"`, `"Spring"`, `"Summer"`, or `"Autumn"`. Use these groupings:
    - Winter: 12, 1, 2
    - Spring: 3, 4, 5
    - Summer: 6, 7, 8
    - Autumn: 9, 10, 11

15. What does this code print? Why?

```ts
let letter: string = "a";

switch (letter) {
    case "a":
        console.log("First");
    case "b":
        console.log("Second");
    case "c":
        console.log("Third");
        break;
    default:
        console.log("Other");
}
```

16. Fix this switch statement so that each case only prints its own message:

```ts
let animal: string = "dog";

switch (animal) {
    case "cat":
        console.log("Meow");
    case "dog":
        console.log("Woof");
    case "bird":
        console.log("Tweet");
    default:
        console.log("Unknown animal");
}
```

## Part E: Break and Continue

17. What does this loop print?

```ts
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
```

18. What does this loop print?

```ts
let names: string[] = ["Alice", "Bob", "Charlie", "Diana"];
for (let i = 0; i < names.length; i++) {
    if (names[i] === "Charlie") {
        break;
    }
    console.log(names[i]);
}
```

19. Write a `for` loop that goes through the numbers 1 to 20 and prints only the ones that are **not** divisible by 4. Use `continue`.

20. Write a `while` loop that searches through the array `[3, 7, 1, 9, 4, 6]` and stops as soon as it finds a number greater than 8. Print `"Found: "` followed by the number.

## Part F: Combining Concepts

21. Write a `for` loop that goes through the array `["red", "green", "blue", "yellow"]` and uses a `switch` statement inside the loop to print:
    - `"Stop"` for `"red"`
    - `"Go"` for `"green"`
    - `"Slow down"` for `"yellow"`
    - `"No signal"` for anything else

22. This code has a bug. It should print the sum of all positive numbers in the array, but it doesn't work. Fix it.

```ts
let values: number[] = [4, -2, 7, -1, 3];
let sum: number = 0;
for (let i = 0; i < values.length; i++) {
    if (values[i] < 0) {
        break;
    }
    sum = sum + values[i];
}
console.log(sum);
```

23. What does this code print?

```ts
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === j) {
            continue;
        }
        console.log(i + "," + j);
    }
}
```

24. Write a program that uses a `while` loop to find the first number greater than 1 that evenly divides both `36` and `48`. Print the number.

## Part G: Short Reflection

25. When would you choose a `while` loop over a `for` loop?
26. In your own words, what does "fall through" mean in a `switch` statement?
