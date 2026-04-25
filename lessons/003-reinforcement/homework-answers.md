# Lesson 003 Reinforcement — Answer Sheet

## Part A: Expressions vs Statements

1.

- Line 1: ✅ Does something — declares `age` and sets it to `25`.

- Line 2: ❌ Does nothing — checks if `age` equals `30`, but the result isn't used anywhere.

- Line 3: ✅ Does something — adds 1 to `age` and assigns the result back. `age` is now `26`.

- Line 4: ❌ Does nothing — checks if `age` is greater than `18`, but the result isn't used.

- Line 5: ✅ Does something — prints `26`.
2. The line `x * 2;` calculates `10` but throws the result away — it doesn't assign it back to `x`. It should be `x = x * 2;` (or `x *= 2;`). The code prints `5` as written; after fixing, it prints `10`.

3. `=` is assignment — it *changes* a variable's value (e.g., `x = 10` sets `x` to `10`). `===` is comparison — it *checks* whether two values are equal and produces `true` or `false` (e.g., `x === 10` checks but doesn't change anything).

4. The line `label === "negative";` is a comparison, not an assignment — it checks whether `label` equals `"negative"` and throws the result away. It should be `label = "negative";`. As written, the code prints `"positive"` because `label` never changes.
   
   ```ts
   let value: number = -3;
   let label: string = "positive";
   if (value < 0) {
    label = "negative";
   }
   console.log(label); // "negative"
   ```

5. **False.** `count > 100;` is a comparison expression — it produces `true` or `false` but doesn't change `count`.

## Part B: Code Tracing

6.
| Step | `i` | Condition `i <= 4` | `total`       |
| ---- | --- | ------------------- | ------------- |
| Init | 1   | —                   | 0             |
| 1    | 1   | 1 <= 4 → true      | 0 + 1 = 1    |
| 2    | 2   | 2 <= 4 → true      | 1 + 2 = 3    |
| 3    | 3   | 3 <= 4 → true      | 3 + 3 = 6    |
| 4    | 4   | 4 <= 4 → true      | 6 + 4 = 10   |
| —    | 5   | 5 <= 4 → false     | (stop)        |

It prints `10`.

7.
| Step | `n`  | Condition `n < 10` |
| ---- | ---- | ------------------- |
| Init | 1    | —                   |
| 1    | 3    | 1 < 10 → true      |
| 2    | 9    | 3 < 10 → true      |
| 3    | 27   | 9 < 10 → true      |
| —    | 27   | 27 < 10 → false    |

It prints `27`.

8. It prints `2`, `1`, `0`.

Trace: `i` starts at 3. Body: `i--` makes it 2, print 2. Then `i--` makes it 1, print 1. Then `i--` makes it 0, print 0. Condition `0 > 0` is false, stop.

Note: the first thing printed is `2`, not `3`, because `i--` happens *before* `console.log`.

9. It prints `1`, `3`, `5`.

The `continue` skips even values of `i` (where `i % 2 === 0`). So `i = 0` is skipped, `i = 1` is printed, `i = 2` is skipped, `i = 3` is printed, `i = 4` is skipped, `i = 5` is printed.

10. It prints `2`, `5`, `5`.

`words[0]` is `"hi"` — length 2. `words[1]` is `"there"` — length 5. `words[2]` is `"world"` — length 5. The `.length` property returns the number of *characters* in the string, not the index.

## Part C: While Loops

11. The condition `x <= 20` is always true because `x` starts at 20 and decreases. As `x` gets smaller, it stays less than 20 forever. Fix: change the condition to `x >= 1` (check the lower bound when counting down).
    
    ```ts
    let x: number = 20;
    while (x >= 1) {
    console.log(x);
    x--;
    }
    ```

12. The line `n * 2;` calculates `n` times 2 but doesn't assign the result back — `n` never changes. Fix: change it to `n = n * 2;` (or `n *= 2;`).
    
    ```ts
    let n: number = 1;
    while (n <= 50) {
    console.log(n);
    n = n * 2;
    }
    ```
    
    This prints `1`, `2`, `4`, `8`, `16`, `32`.

13.

```ts
let i: number = 5;
while (i >= 1) {
    console.log(i);
    i--;
}
```

Prints `5`, `4`, `3`, `2`, `1`.

14.

```ts
let sum: number = 0;
let i: number = 2;
while (i <= 10) {
    sum = sum + i;
    i += 2;
}
console.log(sum); // 30
```

Sum: 2 + 4 + 6 + 8 + 10 = 30.

15.

```ts
let i: number = 3;
while (i <= 15) {
    console.log(i);
    i += 3;
}
```

Prints `3`, `6`, `9`, `12`, `15`.

## Part D: Complete Programs

16.

```ts
let numbers: number[] = [12, 7, 25, 3, 18];
let largest: number = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log(largest); // 25
```

17.

```ts
let data: number[] = [4, -1, 8, -3, 0, -7, 2];
let count: number = 0;
let i: number = 0;
while (i < data.length) {
    if (data[i] < 0) {
        count++;
    }
    i++;
}
console.log(count); // 3
```

18.

```ts
let value: number = 256;
while (value >= 1) {
    value = value / 2;
    console.log(value);
}
```

Prints `128`, `64`, `32`, `16`, `8`, `4`, `2`, `1`, `0.5`.

19.

```ts
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

The fix is adding braces `{ }` and a `console.log(i);` body. Prints `1`, `2`, `3`, `4`, `5`.

20. Every `while` loop needs:
21. **Initialisation** — create the variable before the loop: `let i: number = 0;`
22. **A condition that can become false** — so the loop eventually stops: `while (i < 10)`
23. **An update in the body** — change the variable each iteration: `i++;`

If any of these is missing, the loop either never runs or runs forever.
