# Lesson 003 Reinforcement — Marked Homework

**Score: 14.5 / 20 (72.5%)**

---

## Part A: Expressions vs Statements

### 1. ✅ Correct

Your markings are spot on — well done.

- Line 1 ✅, Line 2 ❌, Line 3 ✅, Line 4 ❌, Line 5 ✅

### 2. ✅ Correct

You correctly identified that `x * 2;` doesn't assign the result back, and `x *= 2;` is a valid fix. Good.

### 3. ⚠️ Partially Correct

> "= is the given value, === is equal."

You've got the right idea, but the wording is a bit vague. More precisely:

- `=` is **assignment** — it *changes* a variable's value (e.g., `x = 10` sets `x` to `10`).
- `===` is **comparison** — it *checks* whether two values are equal and produces `true` or `false`, but doesn't change anything.

Try to use the word "assignment" when describing `=` — it makes the distinction much clearer.

### 4. ⚠️ Partially Correct

> "label === 'negative'; is false. It does not work."
> "label = 'negative'; is correct."

Your fix is correct — nice one. But the explanation needs a tweak: the problem isn't that the comparison evaluates to `false` (although it does here). The real problem is that `===` is a comparison, so the result is **thrown away** — it doesn't change `label` regardless of whether it's `true` or `false`. Even if `label` were already `"negative"`, the line `label === "negative";` would still do nothing.

### 5. ✅ Correct

`count > 100;` is a comparison — it doesn't change `count`.

---

## Part B: Code Tracing

### 6. ⚠️ Partially Correct

Your values are all correct (1, 3, 6, 10) — good tracing work. Two small issues:

1. **Typo in step 2**: you wrote `2 <= true` instead of `2 <= 4 true`.
2. **Missing output**: the question asks what the code prints — the answer is **10** (the `console.log` is after the loop).

Always finish a tracing question by stating what gets printed.

### 7. ⚠️ Partially Correct

Your values are correct (3, 9, 27) — the trace is right. Two things to tidy up:

1. **Condition column**: the condition is checked *before* the body runs. So at step 1, the condition should show `1 < 10 → true` (using the *old* value of `n`), not `3 < 10`. It's a presentational thing, but it shows you understand the order of evaluation.
2. **Missing output**: the code prints **27**.

### 8. ✅ Correct

`2, 1, 0` — you correctly noticed that `i--` happens before `console.log`.

### 9. ✅ Correct

`1, 3, 5` — `continue` skips the even values. Spot on.

### 10. ✅ Correct

`2, 5, 5` — `"hi"` has 2 characters, `"there"` and `"world"` each have 5.

---

## Part C: While Loops

### 11. ✅ Correct

Good diagnosis — `x <= 20` is always true when `x` starts at 20 and decreases. Changing to `x >= 1` is the right fix.

### 12. ✅ Correct

You correctly identified that `n * 2;` doesn't assign the result back, and `n *= 2` fixes it.

### 13. ✅ Correct

```ts
let n: number = 5;
while (n >= 1) {
    console.log(n);
    n--;
}
```

Clean code, prints `5, 4, 3, 2, 1` as required.

### 14. ❌ Incorrect

Your code:

```ts
let sum = 2;
let i = 2;
while (i <= 10) {
    i *= 2;
    sum += i;
}
console.log(sum);
```

This gives 30, but **by coincidence** — the logic is wrong. Let's trace it:

| Step | `i` | `sum` |
|------|-----|-------|
| Init | 2   | 2     |
| 1    | 4   | 6     |
| 2    | 8   | 14    |
| 3    | 16  | 30    |

You're adding 2 + 4 + 8 + 16 = 30. But the question asks for the sum of **even numbers from 2 to 10**: 2 + 4 + 6 + 8 + 10 = 30.

Two problems:
1. **`i *= 2` doubles** `i` each time (2 → 4 → 8 → 16) instead of stepping through even numbers. You need **`i += 2`** to get 2, 4, 6, 8, 10.
2. **`sum` starts at 2** instead of 0, and the update happens after doubling `i`, so you skip adding the first value properly.

Correct version:

```ts
let sum: number = 0;
let i: number = 2;
while (i <= 10) {
    sum += i;
    i += 2;
}
console.log(sum); // 30
```

**Key takeaway**: always trace your code to verify it's doing what you think, even when the output looks right.

### 15. ✅ Correct

Clean conversion from `for` to `while`. Well done.

---

## Part D: Complete Programs

### 16. ❌ Not Attempted

> "I have no idea. :("

That's okay — this is a harder question. Here's the approach:

1. Start by assuming the first element is the largest.
2. Loop through the rest — if you find something bigger, update your "largest" variable.

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

This is a common pattern — try to get comfortable with it before the next lesson.

### 17. ❌ Incorrect

Your code prints each negative number, but the question asks you to **count** how many negatives there are and print the count.

Your code:

```ts
while (i < data.length) {
    if (data[i] < 0)
        console.log(data[i]);  // ← prints the value, doesn't count
    i++;
}
```

You need an **accumulator variable** (a counter) that increases each time you find a negative:

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

The structure of your loop is good — you just need to swap `console.log(data[i])` for `count++` and print the count afterwards.

### 18. ⚠️ Partially Correct

Your code works, but the order of operations gives different output from what's expected:

```ts
// Your version — prints BEFORE halving
console.log(i);  // prints 256 first
i /= 2;
```

This prints: `256, 128, 64, 32, 16, 8, 4, 2, 1`

The question says "print each value **as it halves**", which means print the halved results:

```ts
// Expected — halve THEN print
i /= 2;
console.log(i);  // prints 128 first
```

This prints: `128, 64, 32, 16, 8, 4, 2, 1, 0.5`

Remember from the lesson: the order of lines inside the loop body matters! This is exactly the same concept as question 8.

### 19. ✅ Correct

Good fix — added braces and `console.log(i)`.

### 20. ✅ Correct

> 1. "value need to be set before while" — ✅ Initialisation
> 2. "inside of () needs to be true" — ✅ Condition
> 3. "making the value to move to make the condition false" — ✅ Update

All three concepts captured clearly. Nice work.

---

## Summary

| Section | Score | Out of |
|---------|-------|--------|
| Part A: Expressions vs Statements | 3.5 | 5 |
| Part B: Code Tracing | 4 | 5 |
| Part C: While Loops | 4 | 5 |
| Part D: Complete Programs | 3 | 5 |
| **Total** | **14.5** | **20** |

### What went well

- Solid understanding of expressions vs statements — you caught every "does nothing" line.
- Good code tracing skills — all values were correct across questions 6–10.
- Bug-spotting (Q11, Q12) is strong — you identified both infinite loop causes quickly.
- Q13, Q15, Q20 show you understand while loop structure well.

### Areas to revisit

1. **Q14 — Accumulator logic**: When the question says "even numbers from 2 to 10", step through them with `i += 2`, not `i *= 2`. Always trace your code even when the answer looks right.
2. **Q16 — Finding the largest**: Learn the "assume first, compare rest" pattern — it comes up often.
3. **Q17 — Counting vs printing**: When asked to *count*, use a counter variable (`count++`) and print after the loop. Don't print individual values.
4. **Q18 — Order of operations**: Print *after* the change if you want to show the changed value. This was covered in the lesson's tracing section — worth re-reading.
5. **Q3/Q4 — Explanations**: Your fixes are correct, but practise explaining *why* with more precision. Using terms like "assignment" and "the result is thrown away" will help.
