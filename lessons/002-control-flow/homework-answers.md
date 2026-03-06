# Lesson 002 Control Flow - Answer Sheet

## Part A: For Loops

1. It prints `0`, `1`, `2`, `3`.
2.
```ts
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```
3.
```ts
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
```
4. It prints `10`, `7`, `4`, `1`. The loop starts at 10 and subtracts 3 each time. When `i` reaches `-2`, the condition `i >= 0` is false.
5.
```ts
let sum: number = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum); // 5050
```
6. It prints `5` and `5`. The `.length` property gives the number of characters in each string: `"hello"` has 5 characters and `"world"` has 5 characters.

## Part B: While Loops

7. It prints `32`, `16`, `8`, `4`, `2`, `1`. The value halves each time. When `n` reaches `1`, the condition `n > 1` is false.
8.
```ts
let n: number = 10;
while (n >= 1) {
    console.log(n);
    n--;
}
```
9.
```ts
let value: number = 1;
while (value <= 1000) {
    value = value * 2;
}
console.log(value); // 1024
```
10.
```ts
let i: number = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}
```

## Part C: Do...While

11. It prints `100`, `75`, `50`, `25`. When `x` reaches `0`, the condition `x > 0` is false, so the loop stops. `0` is not printed because the check happens **after** the body runs.
12. Version A prints nothing — `n` is `0`, so the condition `n > 0` is `false` from the start and the body never runs. Version B prints `0` — the body runs once before the condition is checked.

## Part D: Switch Statements

13. `"Bravo"`.
14.
```ts
let month: number = 7;
let season: string;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        season = "Autumn";
        break;
    default:
        season = "Unknown";
        break;
}
```
15. It prints `"First"`, `"Second"`, `"Third"`. The `"a"` case has no `break`, so execution falls through to `"b"`, which also has no `break`, so it falls through to `"c"`. The `break` in `"c"` stops it there.
16.
```ts
let animal: string = "dog";

switch (animal) {
    case "cat":
        console.log("Meow");
        break;
    case "dog":
        console.log("Woof");
        break;
    case "bird":
        console.log("Tweet");
        break;
    default:
        console.log("Unknown animal");
        break;
}
```

## Part E: Break and Continue

17. It prints `1`, `2`, `4`, `5`, `7`, `8`, `10`. Numbers divisible by 3 (3, 6, 9) are skipped by `continue`.
18. It prints `"Alice"` and `"Bob"`. The loop stops when it reaches `"Charlie"` because of `break`.
19.
```ts
for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}
```
20.
```ts
let data: number[] = [3, 7, 1, 9, 4, 6];
let i: number = 0;
while (i < data.length) {
    if (data[i] > 8) {
        console.log("Found: " + data[i]);
        break;
    }
    i++;
}
```

## Part F: Combining Concepts

21.
```ts
let colors: string[] = ["red", "green", "blue", "yellow"];
for (let i = 0; i < colors.length; i++) {
    switch (colors[i]) {
        case "red":
            console.log("Stop");
            break;
        case "green":
            console.log("Go");
            break;
        case "yellow":
            console.log("Slow down");
            break;
        default:
            console.log("No signal");
            break;
    }
}
```
22. The bug is using `break` instead of `continue`. `break` stops the entire loop when it hits the first negative number, so it only sums `4`. It should use `continue` to skip negative numbers and keep going.
```ts
let values: number[] = [4, -2, 7, -1, 3];
let sum: number = 0;
for (let i = 0; i < values.length; i++) {
    if (values[i] < 0) {
        continue;
    }
    sum = sum + values[i];
}
console.log(sum); // 14
```
23. It prints:
```
0,1
0,2
1,0
1,2
2,0
2,1
```
The `continue` skips pairs where `i` equals `j` (i.e., `0,0`, `1,1`, `2,2`).
24.
```ts
let n: number = 2;
while (n <= 48) {
    if (36 % n === 0 && 48 % n === 0) {
        console.log(n);
        break;
    }
    n++;
}
// Prints: 2
```

## Part G: Short Reflection

25. Personal answer. A good answer mentions that `while` is better when you don't know how many iterations you need upfront.
26. Personal answer. A good answer explains that without `break`, execution continues into the next `case` block even if it doesn't match.
