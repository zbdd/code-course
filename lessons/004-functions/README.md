# Functions — Organising and Reusing Code

Up until now, you've been writing code in a straight line: one instruction after another. Functions let you package a group of instructions together and **reuse them many times**.

Think of a function like a recipe. Instead of describing all the ingredients and steps every time you want to bake a cake, you write down the recipe once and then just say "make the cake recipe" whenever you need a cake.

## Why Functions Matter

Before we write our first function, let's look at a problem.

Imagine you're writing a program that checks if a number is positive. You need to do this check in five different places:

```typescript
let number1: number = 10;
if (number1 > 0) {
    console.log("number1 is positive");
}

let number2: number = -5;
if (number2 > 0) {
    console.log("number2 is positive");
}

let number3: number = 0;
if (number3 > 0) {
    console.log("number3 is positive");
}

let number4: number = 42;
if (number4 > 0) {
    console.log("number4 is positive");
}

let number5: number = -20;
if (number5 > 0) {
    console.log("number5 is positive");
}
```

That's a lot of repeated code! And if you wanted to change how it works, you'd have to change it five times.

With a function, you write the logic once:

```typescript
function checkIfPositive(num: number): void {
    if (num > 0) {
        console.log(num + " is positive");
    }
}
```

Then use it as many times as you need:

```typescript
checkIfPositive(10);    // prints: 10 is positive
checkIfPositive(-5);    // prints nothing
checkIfPositive(0);     // prints nothing
checkIfPositive(42);    // prints: 42 is positive
checkIfPositive(-20);   // prints nothing
```

Much cleaner! And if you need to change the logic, you change it in one place.

## Your First Function

A function has a simple structure:

```typescript
function greet(): void {
    console.log("Hello!");
}
```

Let's break this down:

- `function` — the keyword that says "I'm defining a function"
- `greet` — the name of the function (you choose this)
- `()` — the parentheses show where parameters go (we'll get to this in a moment)
- `: void` — means this function doesn't return a value; it just does something
- `{ ... }` — the braces contain the code that runs when you call the function

To **call** (use) the function, you write its name followed by parentheses:

```typescript
greet();  // This runs the function, printing "Hello!"
greet();  // You can call it again
greet();  // And again
```

### Practice

What does this code print?

```typescript
function sayGoodbye(): void {
    console.log("Goodbye!");
}

sayGoodbye();
sayGoodbye();
```

<details>
    <summary>Click to reveal answer</summary>

It prints:
```
Goodbye!
Goodbye!
```

The function is called twice, so the body runs twice.

</details>

## Parameters — Giving Information to Functions

A **parameter** is information you give to a function. It's like passing an ingredient to your recipe.

In the `checkIfPositive` example above, `num` is a parameter:

```typescript
function checkIfPositive(num: number): void {
    if (num > 0) {
        console.log(num + " is positive");
    }
}
```

When you call the function, you pass a value (called an **argument**):

```typescript
checkIfPositive(10);   // 10 is the argument; inside, num = 10
checkIfPositive(42);   // 42 is the argument; inside, num = 42
```

Here's another example:

```typescript
function printName(name: string): void {
    console.log("Hello, " + name);
}

printName("Alice");     // prints: Hello, Alice
printName("Bob");       // prints: Hello, Bob
```

Inside the function, `name` works like a variable. It has whatever value you passed in.

### Multiple Parameters

A function can take more than one parameter:

```typescript
function add(a: number, b: number): void {
    console.log(a + b);
}

add(3, 5);      // prints: 8
add(10, 20);    // prints: 30
```

The parameters are separated by commas. Each one needs a type (`: number`, `: string`, etc.).

### Practice

What does this code print?

```typescript
function describe(name: string, age: number): void {
    console.log(name + " is " + age + " years old");
}

describe("Alice", 25);
describe("Bob", 30);
```

<details>
    <summary>Click to reveal answer</summary>

It prints:
```
Alice is 25 years old
Bob is 30 years old
```

The first call passes `"Alice"` as `name` and `25` as `age`. The second call passes different values.

</details>

## Return Values — Getting Information Back from Functions

So far, all our functions just print or do something. But often you want a function to **calculate** something and give you the answer back.

A **return value** is what the function gives back to you.

```typescript
function addNumbers(a: number, b: number): number {
    return a + b;
}
```

Notice:
- `: number` after the parameters means the function returns a number
- `return a + b;` sends the result back to whoever called the function

Now you can **use** the result:

```typescript
let result: number = addNumbers(3, 5);
console.log(result);  // prints: 8
```

Or even use it directly in another calculation:

```typescript
console.log(addNumbers(3, 5) + 2);  // prints: 10
```

Here's the difference between `void` and a return type:

```typescript
// This function does something (prints) but returns nothing
function greet(): void {
    console.log("Hello");
}
greet();  // You call it for what it does, not for a value

// This function calculates and returns a value
function double(num: number): number {
    return num * 2;
}
let answer: number = double(5);  // You call it to get a value back
console.log(answer);  // prints: 10
```

### Practice

What does this code print?

```typescript
function isEven(num: number): boolean {
    return num % 2 === 0;
}

console.log(isEven(4));   // What gets printed?
console.log(isEven(7));   // What gets printed?
```

<details>
    <summary>Click to reveal answer</summary>

It prints:
```
true
false
```

`isEven(4)` returns `true` because 4 is even. `isEven(7)` returns `false` because 7 is odd.

</details>

### A Common Confusion: `return` vs `console.log`

This is where beginners often get stuck. **`return` and `console.log` are completely different:**

```typescript
// This function prints to the screen
function printDouble(num: number): void {
    console.log(num * 2);
}

// This function calculates and returns the value
function double(num: number): number {
    return num * 2;
}

printDouble(5);     // prints: 10 (but you can't use the 10 anywhere)
let x: number = double(5);  // x becomes 10 (you can use this value)
```

With `printDouble`, the value appears on your screen but disappears. With `double`, you **get the value back** and can store it or use it.

Think of it this way:
- `console.log` is like announcing something loudly — everyone hears it, but you don't *have* it
- `return` is like handing someone a gift — they now have it and can use it

### Practice

What does this code do? (Hint: think about whether the result is returned or just printed.)

```typescript
function calculateSum(a: number, b: number): number {
    return a + b;
}

let total: number = calculateSum(5, 3);
console.log(total);
```

<details>
    <summary>Click to reveal answer</summary>

The function calculates `5 + 3 = 8` and **returns** it. This returned value is stored in `total`. Then `console.log` prints the value: `8`.

The key: `return` gives the value *to your code*, then you decide what to do with it (print it, store it, use it in another calculation).

</details>

## Understanding Function Scope

Inside a function, variables behave a bit differently than outside. This is called **scope**.

A variable created **inside** a function only exists inside that function:

```typescript
function test(): void {
    let x: number = 10;
    console.log(x);  // This works; x exists here
}

test();
console.log(x);  // ERROR! x doesn't exist here
```

But a variable created **outside** can be used inside:

```typescript
let x: number = 10;

function test(): void {
    console.log(x);  // This works; x exists outside, so we can see it
}

test();  // prints: 10
```

**Here's the important rule:** A function can **see** variables outside of it, but the outside world **cannot see** variables inside it.

```typescript
let outside: number = 100;

function example(): void {
    let inside: number = 50;
    console.log(outside);  // ✅ Can see outside
    console.log(inside);   // ✅ Can see inside
}

example();
console.log(outside);  // ✅ Can see outside (it's outside!)
console.log(inside);   // ❌ ERROR! inside doesn't exist out here
```

### Practice

Will this code work or give an error?

```typescript
let userName: string = "Alice";

function printUser(): void {
    console.log(userName);
}

printUser();
```

<details>
    <summary>Click to reveal answer</summary>

✅ This works. `userName` is outside the function, so the function can see it. It prints: `Alice`.

</details>

Will this code work or give an error?

```typescript
function createName(): void {
    let localName: string = "Bob";
}

createName();
console.log(localName);
```

<details>
    <summary>Click to reveal answer</summary>

❌ This gives an error. `localName` is created **inside** the function, so it only exists inside. Outside the function, it doesn't exist.

To fix this, you'd need to **return** the value:

```typescript
function createName(): string {
    let localName: string = "Bob";
    return localName;
}

let result: string = createName();
console.log(result);  // prints: Bob
```

</details>

## A Real Example: Checking Ages

Let's build a slightly more complex example to tie it all together:

```typescript
function isAdult(age: number): boolean {
    return age >= 18;
}

function canVote(age: number): boolean {
    return isAdult(age);
}

function checkPerson(name: string, age: number): void {
    if (canVote(age)) {
        console.log(name + " can vote");
    } else {
        console.log(name + " cannot vote");
    }
}

checkPerson("Alice", 25);  // Alice can vote
checkPerson("Bob", 16);    // Bob cannot vote
checkPerson("Carol", 18);  // Carol can vote
```

Notice:
- `isAdult` calculates and **returns** a boolean
- `canVote` calls `isAdult` and returns the result
- `checkPerson` uses `canVote` to decide what to print
- Each function does one thing and does it well

## Wrapping Up

Functions let you:
1. **Avoid repetition** — write code once, use it many times
2. **Organise** — group related instructions together
3. **Make code readable** — a well-named function explains what's happening
4. **Reuse** — other functions can call your functions

Key takeaways:
- **Parameters** are inputs — information you give to a function
- **Return values** are outputs — information the function gives back
- **Scope** means variables inside functions are private; outsiders can't see them
- **`return`** is different from **`console.log`** — one gives you a value, the other just prints

In the next lessons, we'll use functions to solve more complex problems and combine them with everything you've learned so far.
