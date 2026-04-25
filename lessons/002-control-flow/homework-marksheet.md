# Lesson 002 Control Flow — Homework Marksheet

**Student file:** `homework-student-attempt.ts`
**Total: 16 / 26** (61.5%)

---

## Part A: For Loops

| #   | Mark     | Notes                                                                                                                                                                                                                                        |
| --- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | 1/1 ✅    | Correct: `0, 1, 2, 3`.                                                                                                                                                                                                                       |
| 2   | 0.5/1 ⚠️ | Loop header is correct but the body is missing — no `console.log(i)` or braces.                                                                                                                                                              |
| 3   | 0.5/1 ⚠️ | Same as Q2 — correct header (`i = 2; i <= 20; i += 2`) but no body shown.                                                                                                                                                                    |
| 4   | 1/1 ✅    | Correct: `10, 7, 4, 1`.                                                                                                                                                                                                                      |
| 5   | 0.5/1 ⚠️ | Creative attempt, but `sum` is declared with `let` inside the `for` initialiser so it is scoped to the loop. The `console.log(sum)` on the next line is outside that scope and would cause a reference error. Declare `sum` before the loop. |
| 6   | 0/1 ❌    | Incorrect. Answer should be `5, 5` (the *length* of each string), not `0, 1` (those are the *indices*). Re-read what `.length` returns on a string.                                                                                          |

**Part A: 3.5 / 6**

> **Q2 & Q3:** Always write the complete loop including the body. Even if the header is right, an answer without `console.log()` and braces is incomplete and wouldn't run.

> **Q5:** Declaring a variable inside a `for` initialiser with `let` scopes it to the loop block. You need to declare `sum` on a separate line *before* the loop so it's still accessible after the loop finishes:
> 
> ```ts
> let sum: number = 0;
> for (let i = 1; i <= 100; i++) {
>     sum += i;
> }
> console.log(sum); // 5050
> ```

> **Teacher note — Q6:** `words[i]` gives you the string at index `i`, and `.length` gives the number of characters in that string. `"hello".length` is `5`, not `0`.

---

## Part B: While Loops

| #   | Mark     | Notes                                                                                                                                                                                 |
| --- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 7   | 0/1 ❌    | Incorrect. The division happens *before* `console.log`, so the first printed value is `32`, not `64`. The sequence is `32, 16, 8, 4, 2, 1`.                                           |
| 8   | 0/1 ❌    | The condition `i <= 10` is always true as `i` decreases, creating an infinite loop. Also, decrementing *before* printing means the first output would be `9`, not `10`.               |
| 9   | 0.5/1 ⚠️ | The doubling logic is correct, but the question asks to print only the *final* value after the loop. Move `console.log` outside the loop.                                             |
| 10  | 0/1 ❌    | `i % 2 === 0` is an expression that evaluates to `true` or `false` but doesn't *do* anything — it doesn't change `i`. The loop never increments `i`, so it runs forever printing `2`. |

**Part B: 0.5 / 4**

> **Q7:** Always trace the code line by line. The body of this loop is: (1) divide `n`, *then* (2) print `n`. So the first thing printed is `64 / 2 = 32`, not `64`.

> **Teacher note — Q8:** When counting down, the condition needs to check the *lower* bound: `i >= 1`. Also, print first, *then* decrement:
> 
> ```ts
> let i: number = 10;
> while (i >= 1) {
>     console.log(i);
>     i--;
> }
> ```

> **Teacher note — Q9:** Close! Just move the `console.log` after the loop:
> 
> ```ts
> let i: number = 1;
> while (i <= 1000) {
>     i *= 2;
> }
> console.log(i); // 1024
> ```

> **Q10:** You need to *increment* `i` by 2 each iteration. The line `i % 2 === 0` is a comparison — it calculates a result but throws it away because it isn't assigned to anything or used in an `if`. Replace it with `i += 2`:
> 
> ```ts
> let i: number = 2;
> while (i <= 20) {
>     console.log(i);
>     i += 2;
> }
> ```

---

## Part C: Do...While

| #   | Mark     | Notes                                                                                                                                                                                                                 |
| --- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | 1/1 ✅    | Correct: `100, 75, 50, 25`.                                                                                                                                                                                           |
| 12  | 0.5/1 ⚠️ | You've grasped the key idea — Version B runs once even when the condition is false. But be more precise: say Version A *prints nothing*, and explain *why* (`do...while` checks the condition *after* the body runs). |

**Part C: 1.5 / 2**

> **Q12:** A clearer answer would be: "Version A prints nothing because the condition `n > 0` is checked *before* the body runs, and it's already `false`. Version B prints `0` because the body runs *once before* the condition is checked — that's the key difference with `do...while`."

---

## Part D: Switch Statements

| #   | Mark  | Notes                                                                                                                                                                                            |
| --- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 13  | 1/1 ✅ | Correct: `"Bravo"`.                                                                                                                                                                              |
| 14  | 1/1 ✅ | Correct use of fall-through grouping, `break` statements, and `default`. Minor cosmetic note: `" Winter"` has a leading space — should be `"Winter"`.                                            |
| 15  | 0/1 ❌ | Incomplete. It prints `"First"`, `"Second"`, **and** `"Third"` — not just `"First"`. There are no `break` statements after `case "a"` or `case "b"`, so execution falls through all three cases. |
| 16  | 1/1 ✅ | Correct — `break` added after each case.                                                                                                                                                         |

**Part D: 3 / 4**

> **Q15:** This question specifically tests your understanding of fall-through, and your Q14 answer shows you already know how to use it! When `case "a"` matches and there's no `break`, execution continues straight into `case "b"` and then `case "c"` — regardless of whether those cases match. The output is all three: `"First"`, `"Second"`, `"Third"`. The `break` in `case "c"` stops it before reaching `default`.

---

## Part E: Break and Continue

| #   | Mark     | Notes                                                                                                                                                                                                                     |
| --- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | 1/1 ✅    | Correct: `1, 2, 4, 5, 7, 8, 10`.                                                                                                                                                                                          |
| 18  | 1/1 ✅    | Correct: `"Alice"`, `"Bob"`.                                                                                                                                                                                              |
| 19  | 1/1 ✅    | Correct.                                                                                                                                                                                                                  |
| 20  | 0.5/1 ⚠️ | Logic and structure are right, but the condition `>= 8` should be `> 8` ("greater than 8" does not include 8 itself). Happens to produce the same result for this array, but the condition doesn't match the requirement. |

**Part E: 3.5 / 4**

> **Q20:** Pay attention to the wording: "greater than 8" means `> 8`, not `>= 8`. The `>=` operator means "greater than *or equal to*", which would also match `8`. Here the result is the same because the first match is `9`, but using the precise operator matters — in a different array it could give a wrong result.

---

## Part F: Combining Concepts

| #   | Mark  | Notes                                                                                                                                                                                                                   |
| --- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21  | 0/1 ❌ | The question asks for a `for` loop with a `switch` *inside* it. The answer has no loop — it switches on the entire array, and `case ["red"]` won't work (arrays are compared by reference in JavaScript, not by value). |
| 22  | 1/1 ✅ | Correct — changed `break` to `continue`.                                                                                                                                                                                |
| 23  | 1/1 ✅ | Correct.                                                                                                                                                                                                                |
| 24  | 1/1 ✅ | Correct — `while (true)` with a `break` is a valid approach.                                                                                                                                                            |

**Part F: 3 / 4**

> **Q21:** You need to loop through the array and switch on *each element*, not on the array itself. In JavaScript/TypeScript, `["red"] === ["red"]` is `false` because each `[]` creates a new array object. The structure should be:
> 
> ```ts
> let colours: string[] = ["red", "green", "blue", "yellow"];
> for (let i = 0; i < colours.length; i++) {
>     switch (colours[i]) {
>         case "red":
>             console.log("Stop");
>             break;
>         // ... other cases
>     }
> }
> ```

---

## Part G: Short Reflection

| #   | Mark     | Notes                                                                                                                                                      |
| --- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25  | 0.5/1 ⚠️ | On the right track but vague. The key reason is: use `while` when you *don't know in advance* how many times the loop should run.                          |
| 26  | 0.5/1 ⚠️ | Captures the basic idea. A stronger answer: "Without a `break`, execution continues into the next `case` block even if that case doesn't match the value." |

**Part G: 1 / 2**

> **Q25:** A stronger answer: "You'd choose a `while` loop when you don't know how many iterations you need upfront — for example, reading user input until they type 'quit', or searching for a value in data. A `for` loop is better when you know the exact count or range beforehand."

> **Q26:** Your answer ("it keeps running until break") is the right intuition, but the important thing to highlight is that fall-through ignores `case` labels — it doesn't check whether the next case matches; it just keeps executing code until it hits a `break` or the end of the `switch`.

---

## Summary by Section

| Section                | Score       | Percentage |
| ---------------------- | ----------- | ---------- |
| A — For Loops          | 3.5 / 6     | 58%        |
| B — While Loops        | 0.5 / 4     | 12.5%      |
| C — Do...While         | 1.5 / 2     | 75%        |
| D — Switch Statements  | 3 / 4       | 75%        |
| E — Break and Continue | 3.5 / 4     | 87.5%      |
| F — Combining Concepts | 3 / 4       | 75%        |
| G — Short Reflection   | 1 / 2       | 50%        |
| **Total**              | **16 / 26** | **61.5%**  |

## Overall Feedback

**Strengths:**

- Good understanding of `break` and `continue` (Part E was your strongest section).
- Switch statement mechanics are mostly solid — your Q14 and Q16 answers show you understand fall-through grouping and how to fix missing `break` statements.
- Good problem-solving on Q24 (using `while (true)` with `break`).

**Areas to work on:**

- **Tracing code carefully (Q6, Q7):** When a question asks "what does this print?", step through the code line by line and write down the value of each variable at every step. Don't try to answer from a quick glance.
- **While loops need an increment (Q8, Q10):** Every `while` loop needs something in the body that moves it towards the exit condition, otherwise it runs forever. Double-check: "does my variable actually change each iteration?"
- **Write complete answers (Q2, Q3):** Always include the full loop body. A loop header on its own isn't runnable code.
- **Fall-through (Q15):** You clearly understand how to *use* fall-through (Q14) but missed it when asked to *trace* fall-through behaviour. Revisit the lesson notes on this — it's a common source of bugs.
- **Read the question precisely (Q9, Q20):** Small details like "print the final value" vs "print every value", or "greater than" vs "greater than or equal to", matter in programming.
