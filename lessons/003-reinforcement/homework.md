# Lesson 003 Reinforcement — Homework

**Important:** For every question that asks you to write code, write the **complete, runnable code** — including variable declarations, braces, and `console.log` for any output.

## Part A: Expressions vs Statements

1. Which lines in this code actually *do* something, and which do nothing? For each line, write ✅ (does something) or ❌ (does nothing).

```ts
let age: number = 25;        // Line 1
age === 30;                   // Line 2
age = age + 1;                // Line 3
age > 18;                     // Line 4
console.log(age);             // Line 5
```

2. This code is meant to double the value of `x`, but it has a bug. What's wrong, and how do you fix it?

```ts
let x: number = 5;
x * 2;
console.log(x);
```

3. In your own words, what is the difference between `=` and `===`?

4. This code is meant to check if a number is negative and set `label` to `"negative"`. It has a bug. What's wrong, and how do you fix it?

```ts
let value: number = -3;
let label: string = "positive";
if (value < 0) {
    label === "negative";
}
console.log(label);
```

5. True or false: the line `count > 100;` changes the value of `count`.

## Part B: Code Tracing

For each question, trace the code step by step. Write down the value of each variable at every iteration and state what the code prints.

6. Complete this variable table and state what the code prints.

```ts
let total: number = 0;
for (let i = 1; i <= 4; i++) {
    total = total + i;
}
console.log(total);
```

| Step | `i` | Condition `i <= 4` | `total` |
| ---- | --- | ------------------- | ------- |
| Init | 1   | —                   | 0       |
| 1    | ?   | ?                   | ?       |
| 2    | ?   | ?                   | ?       |
| 3    | ?   | ?                   | ?       |
| 4    | ?   | ?                   | ?       |

7. Complete this variable table and state what the code prints.

```ts
let n: number = 1;
while (n < 10) {
    n = n * 3;
}
console.log(n);
```

| Step | `n` | Condition `n < 10` |
| ---- | --- | ------------------- |
| Init | 1   | —                   |
| 1    | ?   | ?                   |
| 2    | ?   | ?                   |
| 3    | ?   | ?                   |

8. What does this code print? Trace it carefully — pay attention to which line comes first in the body.

```ts
let i: number = 3;
while (i > 0) {
    i--;
    console.log(i);
}
```

9. What does this code print?

```ts
for (let i = 0; i < 6; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
```

10. What does this code print?

```ts
let words: string[] = ["hi", "there", "world"];
for (let i = 0; i < words.length; i++) {
    console.log(words[i].length);
}
```

## Part C: While Loops

11. This loop has a bug that makes it run forever. What's wrong, and how do you fix it?

```ts
let x: number = 20;
while (x <= 20) {
    console.log(x);
    x--;
}
```

12. This loop has a bug that makes it run forever. What's wrong, and how do you fix it?

```ts
let n: number = 1;
while (n <= 50) {
    console.log(n);
    n * 2;
}
```

13. Write a `while` loop that prints the numbers from 5 down to 1 (inclusive). Your answer should be complete, runnable code.

14. Write a `while` loop that calculates the sum of even numbers from 2 to 10 (inclusive) and prints the total. Hint: the total should be 30.

15. Rewrite this `for` loop as a `while` loop that produces the same output:

```ts
for (let i = 3; i <= 15; i += 3) {
    console.log(i);
}
```

## Part D: Complete Programs

16. Write complete code that uses a `for` loop to find and print the largest number in this array:

```ts
let numbers: number[] = [12, 7, 25, 3, 18];
```

17. Write complete code that uses a `while` loop to count how many negative numbers are in this array, then prints the count:

```ts
let data: number[] = [4, -1, 8, -3, 0, -7, 2];
```

18. Write complete code with a `while` loop that starts with the value `256` and keeps halving it until the value is less than `1`. Print each value as it halves.

19. This code is meant to print the numbers 1 to 5, but it's incomplete and won't run. Fix it so it works:

```ts
for (let i = 1; i <= 5; i++)
```

20. In your own words, what are the three things every `while` loop needs to work correctly? Give a one-line example of each.
