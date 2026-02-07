# Lesson 001 Logic - Answer Sheet

## Part A: Variables and Data Types

1. A variable is a named container that stores a value.
2. `number`
3. `string`
4. `boolean`
5.
```ts
let username: string = "Zac";
```
6.
```ts
let isLoggedIn: boolean = true;
```
7.
```ts
let scores: number[] = [85, 90, 78];
```
8.
```ts
let car: { make: string; model: string; year: number } = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};
```

## Part B: Operations

9. `15`
10. `5`
11. `50`
12. `false`
13. `true`
14. `false`
15. `true`
16. `false`

## Part C: Find the Mistake

17. It uses assignment (`=`) instead of comparison. `x = y` assigns a value instead of checking inequality.
18.
```ts
let d: boolean = x != y;
```
19. It mixes number and string in an expression while explicitly typing the result as `number`.
20.
```ts
let total: number = 10 + 5;
```
21. It uses assignment (`=`) instead of a comparison operation.
22.
```ts
if (score >= 90) {
  grade = "A";
}
```

## Part D: Control Flow

23.
```ts
let score: number = 85;
let grade: string;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else {
  grade = "C";
}
```

24. `"B"`
25.
```ts
let color: string = "red";
let message: string;

if (color === "red") {
  message = "Stop";
} else if (color === "green") {
  message = "Go";
} else {
  message = "Wait";
}
```
26.
```ts
let score: number = 82;
let level: string = "advanced";
let result: string;

if (score >= 80 && level === "advanced") {
  result = "Excellent";
} else if (score >= 80 || level === "advanced") {
  result = "Good";
} else {
  result = "Keep Practicing";
}
```
27.
```ts
let score: number = 72;
let isPass: boolean;

if (score >= 50) {
  isPass = true;
} else {
  isPass = false;
}
```
28. `Exact`

## Part E: Short Reflection

29. Personal answer.
30. Personal answer.
