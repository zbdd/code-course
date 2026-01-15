# Lesson 1 - Your First Script

## Part 1: Project Setup

### What You'll Learn

- Install the minimum required components to run a script
- Learn about IDEs, NodeJS, NVM, NPM
- Run your first TypeScript programme

---

## Installation Steps

### 1. Download and Install Node Version Manager (NVM)

**For Windows:**

- Instructions: [https://github.com/coreybutler/nvm-windows#installation--upgrades](https://github.com/coreybutler/nvm-windows#installation--upgrades)
- Direct download: [https://github.com/coreybutler/nvm-windows/releases/download/1.2.2/nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases/download/1.2.2/nvm-setup.exe)

**For Mac/Linux:**

- Instructions: [https://github.com/nvm-sh/nvm#installing-and-updating](https://github.com/nvm-sh/nvm#installing-and-updating)

After installing NVM, open a new terminal and run:

```bash
nvm install 20
nvm use 20
```

### 2. Download and Install an Integrated Development Environment (IDE)

- Download and install VS Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)

### 3. Create Your Project Workspace

**Important:** Create this folder near your home directory or in your Documents folder (not on the Desktop or in deeply nested folders).

1. Create a folder called `programming-course` (or your own project name)
2. Inside it, create a folder called `lesson-001`
3. Open VS Code
4. Go to **File → Open Folder** and select the `lesson-001` folder
5. Click **"Yes, I trust the authors"** when the dialogue box appears

### 4. Initialise Node Package Manager (NPM)

1. Open a terminal in VS Code (go to **Terminal → New Terminal** or press <kbd>Ctrl</kbd>+<kbd>`</kbd>)
2. In the terminal, run the following command to set up your project's npm configuration:

```bash
npm init -y
```

3. Then install the dependencies we'll need:

```bash
npm install typescript tsx @types/node
```

4. You should now see 3 new items in the Explorer sidebar (on the left):
   
   - `node_modules/` folder
   - `package.json` file
   - `package-lock.json` file

5. Open `package.json` and add the following line after the `"license"` line:

```json
"type": "module",
```

Your `package.json` should look similar to this:

```json
{
  "name": "lesson-001",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "@types/node": "^25.0.6",
    "tsx": "^4.21.0",
    "typescript": "^5.9.3"
  }
}
```

---

## Part 2: Your First Script

We're going to build a booking validation system. This first script will check if a booking time makes sense (the end time should be after the start time).

### Create the Files

#### 1. Create `booking.ts`

In VS Code, create a new file called `booking.ts`. This file will contain our booking logic.

Add the following code:

```typescript
export type BookingRequest = {
    start: number;
    end: number;
};

export function isValidBooking(request: BookingRequest): boolean {
    return request.start < request.end;
}
```

**Note:** Make sure you include the `export` keyword before both `type` and `function` - this allows other files to use them.

#### 2. Create `main.ts`

Create another file called `main.ts`. This is where we'll test our booking logic.

Add the following code:

```typescript
import { isValidBooking } from "./booking.js";

const valid = { start: 10, end: 12 };
const invalid = { start: 14, end: 11 };

console.log(isValidBooking(valid));   // true
console.log(isValidBooking(invalid)); // false
```

### Running the Script

In your terminal, run:

```bash
node --import tsx main.ts
```

You should see:

```
true
false
```

**Congratulations!** You've successfully run your first TypeScript programme using NodeJS!

---

## Part 3: Understanding What Just Happened

Let's break down what's actually happening when you run this code.

### The Command Line

When you run `node --import tsx main.ts`, you're telling the computer:

- Use the `node` programme to run our code
- `--import tsx` tells Node how to understand TypeScript files (Node normally only reads JavaScript files ending in `.js`)
- `main.ts` is the file we want to run

### Building Blocks of Programming

Let's understand the fundamental concepts you just used.

#### 1. Primitives - The Simplest Values

Think of primitives as the most basic pieces of information a computer can understand:

**Numbers:**

- `10` - a whole number
- `12` - another whole number
- `3.14` - a decimal number
- `-5` - negative numbers work too

**Booleans (true or false):**

- `true` - yes/on/correct
- `false` - no/off/incorrect

**Strings (text):**

- `"hello"` - text in quotes
- `"Zach"` - someone's name

That's it! Everything else is built from these simple pieces.

#### 2. Variables - Giving Names to Values

Instead of writing `10` everywhere, we can give it a name:

```typescript
const myNumber = 10;
```

This says: "Create a box called `myNumber` and put the value `10` inside it."

Now whenever we write `myNumber`, the computer knows we mean `10`.

`const` means "constant" - once you put something in the box, you can't change it.

**In our code:**

```typescript
const valid = { start: 10, end: 12 };
```

We created a variable called `valid` to store our booking data.

#### 3. Objects - Grouping Related Values Together

Sometimes we want to group related information:

```typescript
const valid = {
    start: 10,
    end: 12
};
```

This creates ONE object with TWO properties:

- A property called `start` with the value `10`
- A property called `end` with the value `12`

Think of it like a form:

```
┌─────────────────┐
│ Booking Form    │
├─────────────────┤
│ start: 10       │
│ end:   12       │
└─────────────────┘
```

To access these values, we use a dot:

- `valid.start` gives us `10`
- `valid.end` gives us `12`

#### 4. Functions - Mini-Programmes That Do Something

A function takes some input, does something with it, and gives back an output:

```typescript
export function isValidBooking(request: BookingRequest): boolean {
    return request.start < request.end;
}
```

Let's break this down:

**The function name:** `isValidBooking` (what we call it)

**The input:** `request` (the object we give it)

- `: BookingRequest` tells us it expects an object with `start` and `end` properties

**The output:** `: boolean` means it gives back either `true` or `false`

**What it does:**

```typescript
return request.start < request.end;
```

- It checks: "Is start less than end?"
- `<` means "less than"
- If yes → returns `true`
- If no → returns `false`

#### 5. Putting It All Together

```typescript
const valid = { start: 10, end: 12 };
console.log(isValidBooking(valid));
```

1. We create an object called `valid`
2. We pass it to the `isValidBooking` function
3. The function checks: is 10 < 12? Yes! Returns `true`
4. `console.log` prints that result to the terminal: `true`

---

## Quick Reference: What We Learned

- **Node**: A programme that runs JavaScript/TypeScript code on your computer
- **NPM**: Node Package Manager - helps install code libraries
- **TypeScript**: A version of JavaScript with extra features (like types)
- **Primitive**: Basic values like numbers, booleans, strings
- **Variable**: A named container for a value (using `const`)
- **Object**: A collection of related properties grouped together
- **Function**: A reusable block of code that takes input and returns output
- **Import/Export**: Keywords that let you share code between files

---

## Next Steps

In the next lesson, we'll learn about:

- Adding more properties to our booking objects
- Creating multiple functions
- Handling edge cases and errors
- Working with arrays (lists of data)
