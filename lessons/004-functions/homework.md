# Lesson 004 Functions — Homework

**Important:** For every question that asks you to write code, write the **complete, runnable code** — including function declarations, variable declarations, and `console.log` for any output.

## Part A: Simple Functions

1. Write a function called `sayHello` that takes no parameters and prints `"Hello, World!"`. Then call it twice.

2. Write a function called `greetUser` that takes one parameter `name: string` and prints `"Hello, " + name`. Call it with your name.

3. Write a function called `printTwice` that takes one parameter `text: string` and prints that text twice. Call it with any string you like.

<details>
    <summary>Click to reveal answers</summary>

**Question 1:**
```typescript
function sayHello(): void {
    console.log("Hello, World!");
}

sayHello();
sayHello();
```

**Question 2:**
```typescript
function greetUser(name: string): void {
    console.log("Hello, " + name);
}

greetUser("Alice");
```

**Question 3:**
```typescript
function printTwice(text: string): void {
    console.log(text);
    console.log(text);
}

printTwice("Code is fun!");
```

</details>

## Part B: Functions with Parameters

4. Write a function called `add` that takes two parameters `a: number` and `b: number` and prints their sum. Call it with 5 and 3.

5. Write a function called `describePerson` that takes two parameters: `name: string` and `age: number`. It should print `"{name} is {age} years old"`. Call it twice with different people.

6. Write a function called `repeatText` that takes two parameters: `text: string` and `times: number`. It should print the text that many times. (Hint: use a for loop inside the function.) Call it with a short phrase and 3.

<details>
    <summary>Click to reveal answers</summary>

**Question 4:**
```typescript
function add(a: number, b: number): void {
    console.log(a + b);
}

add(5, 3);  // prints: 8
```

**Question 5:**
```typescript
function describePerson(name: string, age: number): void {
    console.log(name + " is " + age + " years old");
}

describePerson("Alice", 25);
describePerson("Bob", 30);
```

**Question 6:**
```typescript
function repeatText(text: string, times: number): void {
    for (let i = 0; i < times; i++) {
        console.log(text);
    }
}

repeatText("Hello", 3);
```

</details>

## Part C: Functions with Return Values

7. Write a function called `double` that takes one parameter `num: number` and returns `num * 2`. Then call it with 5 and print the result. (Don't print inside the function — return the value instead.)

8. Write a function called `isPositive` that takes one parameter `num: number` and returns `true` if the number is positive (greater than 0), `false` otherwise. Call it with 5 and -3, printing each result.

9. Write a function called `getGrade` that takes one parameter `score: number` and returns:
   - `"A"` if score >= 90
   - `"B"` if score >= 80
   - `"C"` if score >= 70
   - `"F"` if score < 70
   
   Call it with 85 and print the result.

<details>
    <summary>Click to reveal answers</summary>

**Question 7:**
```typescript
function double(num: number): number {
    return num * 2;
}

let result: number = double(5);
console.log(result);  // prints: 10
```

**Question 8:**
```typescript
function isPositive(num: number): boolean {
    return num > 0;
}

console.log(isPositive(5));    // prints: true
console.log(isPositive(-3));   // prints: false
```

**Question 9:**
```typescript
function getGrade(score: number): string {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
}

let grade: string = getGrade(85);
console.log(grade);  // prints: B
```

</details>

## Part D: Understanding `return` vs `console.log`

This part tests your understanding of the difference between these two concepts.

10. What does this code print? (Choose: nothing, 10, or "10")

```typescript
function getNumber(): number {
    return 10;
}

getNumber();
```

11. What does this code print?

```typescript
function getNumber(): number {
    return 10;
}

console.log(getNumber());
```

12. What is the difference between these two functions?

```typescript
// Function A
function calculateA(x: number): void {
    console.log(x * 2);
}

// Function B
function calculateB(x: number): number {
    return x * 2;
}
```

How would you use each one?

<details>
    <summary>Click to reveal answers</summary>

**Question 10:**
The code prints **nothing**. The function returns 10, but the returned value isn't used anywhere — not printed, not stored, nothing. It just disappears.

**Question 11:**
The code prints **10**. `getNumber()` returns 10, and then `console.log()` prints that 10.

**Question 12:**
- Function A prints the result immediately. You'd use it like: `calculateA(5);` It just does the printing.
- Function B calculates and returns the value. You'd use it like: `let result = calculateB(5);` Now you have the value and can store it, print it, or use it in another calculation.

Function A is useful when you just want to print something. Function B is more flexible because you can use the result however you need.

</details>

## Part E: Scope

13. Will this code work? If not, why not?

```typescript
function makeVariable(): void {
    let x: number = 5;
}

makeVariable();
console.log(x);
```

14. Will this code work? If not, why not?

```typescript
let x: number = 5;

function printX(): void {
    console.log(x);
}

printX();
```

15. What does this code print?

```typescript
let message: string = "Outside";

function test(): void {
    let message: string = "Inside";
    console.log(message);
}

test();
console.log(message);
```

<details>
    <summary>Click to reveal answers</summary>

**Question 13:**
❌ This gives an error. Variables created inside a function only exist inside that function. Outside, `x` doesn't exist.

To fix it, you'd return the value:
```typescript
function makeVariable(): number {
    let x: number = 5;
    return x;
}

let result: number = makeVariable();
console.log(result);  // prints: 5
```

**Question 14:**
✅ This works. The variable `x` is created outside the function, so the function can see it. It prints: `5`.

**Question 15:**
It prints:
```
Inside
Outside
```

Inside the function, `message` is "Inside", so that's what prints. Outside the function, there's a different variable also called `message` that's "Outside", so that's what prints. The two `message` variables don't interfere with each other — they're separate.

</details>

## Part F: Putting It Together

16. Write a function that calculates and returns the sum of numbers from 1 to N. Then call it with 5 and print the result. (Example: sum from 1 to 5 = 1+2+3+4+5 = 15)

17. Write a function called `isEvenAndPositive` that takes one parameter `num: number` and returns `true` only if the number is both even AND positive. Test it with 4, -4, 5, and 0.

18. Write a function that takes a person's age and returns whether they can drive (must be 16 or older). Call it with 15 and 17, and print each result.

<details>
    <summary>Click to reveal answers</summary>

**Question 16:**
```typescript
function sumUpTo(n: number): number {
    let total: number = 0;
    for (let i = 1; i <= n; i++) {
        total = total + i;
    }
    return total;
}

let result: number = sumUpTo(5);
console.log(result);  // prints: 15
```

**Question 17:**
```typescript
function isEvenAndPositive(num: number): boolean {
    return num % 2 === 0 && num > 0;
}

console.log(isEvenAndPositive(4));    // prints: true
console.log(isEvenAndPositive(-4));   // prints: false
console.log(isEvenAndPositive(5));    // prints: false
console.log(isEvenAndPositive(0));    // prints: false
```

**Question 18:**
```typescript
function canDrive(age: number): boolean {
    return age >= 16;
}

console.log(canDrive(15));  // prints: false
console.log(canDrive(17));  // prints: true
```

</details>
