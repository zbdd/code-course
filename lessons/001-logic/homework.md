# Lesson 001 Logic - Homework

## Instructions
- Answer using only what is covered in `lessons/001-logic/README.md`.
- Write code answers in TypeScript.
- For output questions, write the exact result.

## Part A: Variables and Data Types

1. In your own words, what is a variable?
2. What data type would you use for a person’s age?
3. What data type would you use for a user’s name?
4. What data type would you use for “is logged in” true/false data?
5. Write a variable named `username` with your name as a string.
6. Write a variable named `isLoggedIn` with a boolean value of `true`.
7. Write a variable named `scores` that stores `[85, 90, 78]`.
8. Write an object named `car` with `make`, `model`, and `year`.

## Part B: Operations

9. If `x = 10` and `y = 5`, what is `x + y`?
10. If `x = 10` and `y = 5`, what is `x - y`?
11. If `x = 10` and `y = 5`, what is `x * y`?
12. If `x = 10` and `y = 5`, what is `x === y`?
13. If `x = 10` and `y = 5`, what is `x > y`?
14. If `isShape = true` and `isRed = false`, what is `isShape && isRed`?
15. If `isShape = true` and `isRed = false`, what is `isShape || isRed`?
16. If `isShape = true`, what is `!isShape`?

## Part C: Find the Mistake

17. What is wrong with this line?

```ts
let d: boolean = x = y;
```

18. Replace the line in Question 17 with a correct inequality check.

19. What is wrong with this line?

```ts
let total: number = 10 + "5";
```

20. Rewrite Question 19 so `total` is a number with the value `15`.

21. What is wrong with this condition?

```ts
if (score = 90) {
  grade = "A";
}
```

22. Rewrite Question 21 so it checks whether `score` is greater than or equal to `90`.

## Part D: Control Flow

23. Complete this code so it sets `grade` correctly:

```ts
let score: number = 85;
let grade: string;

if (/* condition for A */) {
  grade = "A";
} else if (/* condition for B */) {
  grade = "B";
} else {
  grade = "C";
}
```

24. With `score = 85`, what is the final value of `grade`?

25. Complete this code so it sets `message` correctly using string comparison:

```ts
let color: string = "red";
let message: string;

if (/* condition for red */) {
  message = "Stop";
} else if (/* condition for green */) {
  message = "Go";
} else {
  message = "Wait";
}
```

26. Complete this code so it sets `result` correctly using both number and string checks:

```ts
let score: number = 82;
let level: string = "advanced";
let result: string;

if (/* score high AND level advanced */) {
  result = "Excellent";
} else if (/* score high OR level advanced */) {
  result = "Good";
} else {
  result = "Keep Practicing";
}
```

27. Write an `if / else` statement that sets:
- `isPass = true` when `score >= 50`
- `isPass = false` when `score < 50`

28. What is the output of this code?

```ts
let score: number = 50;
let message: string;

if (score > 50) {
  message = "Above";
} else if (score === 50) {
  message = "Exact";
} else {
  message = "Below";
}

console.log(message);
```

## Part E: Short Reflection

29. What topic in this lesson felt easiest?
30. What topic needs more practice?
