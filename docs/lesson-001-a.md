# Lesson 1a - Understanding Your Tools

Before we write any code, let's understand what all these tools actually are and why we need them. Think of this as getting to know your workshop before you start building.

---

## What is an IDE?

**IDE** stands for **Integrated Development Environment**. That's a fancy way of saying "a special program for writing code."

### Why not just use Notepad?

You *could* write code in Notepad or TextEdit, but it would be like trying to build furniture with just your hands when you have a whole toolbox available.

An IDE gives you:

| Feature                 | What it does                                 | Why it helps                              |
| ----------------------- | -------------------------------------------- | ----------------------------------------- |
| **Syntax highlighting** | Colours different parts of your code         | Makes it easier to read and spot mistakes |
| **Auto-completion**     | Suggests what you might want to type next    | Saves time and reduces typos              |
| **Error detection**     | Underlines problems before you run your code | Catches mistakes early                    |
| **File management**     | Shows all your project files in a sidebar    | Keeps you organised                       |
| **Built-in terminal**   | Run commands without leaving the app         | Everything in one place                   |

### VS Code

**Visual Studio Code** (VS Code) is one of the most popular IDEs in the world. It's:

- **Free** - completely free to download and use
- **Lightweight** - doesn't slow down your computer
- **Extensible** - you can add extra features if you need them
- **Cross-platform** - works on Windows, Mac, and Linux

When you open VS Code, you'll see:

- A **sidebar** on the left showing your files
- A **main area** in the centre where you write code
- A **terminal** at the bottom where you run commands

---

## What is JavaScript?

**JavaScript** is a programming language - a way of giving instructions to a computer.

### A Brief History

JavaScript was created in 1995 for web browsers. When you visit a website and something *interactive* happens (a button does something when you click it, a menu drops down, a form validates your input), that's usually JavaScript at work.

### Why JavaScript?

- It's **everywhere** - every web browser can run JavaScript
- It's **beginner-friendly** - relatively easy to learn
- It's **versatile** - can be used for websites, servers, mobile apps, and more
- It has a **huge community** - lots of help and resources available

### What Does JavaScript Code Look Like?

```javascript
// This is a comment - the computer ignores it
let greeting = "Hello, World!";
console.log(greeting);  // Prints: Hello, World!
```

---

## What is TypeScript?

**TypeScript** is JavaScript with extra safety features. Think of it as JavaScript wearing a seatbelt.

### The Problem with JavaScript

JavaScript is very flexible, which is great for beginners but can cause problems in larger projects. For example:

```javascript
// JavaScript lets you do this...
let age = 25;       // age is a number
age = "twenty-five"; // now age is text - JavaScript doesn't complain!
```

This flexibility can lead to bugs that are hard to find.

### How TypeScript Helps

TypeScript adds **type checking** - it makes sure you're using the right kind of data:

```typescript
// TypeScript catches mistakes
let age: number = 25;    // age must be a number
age = "twenty-five";     // ERROR! TypeScript won't allow this
```

### Key Points About TypeScript

- TypeScript is a **superset** of JavaScript (all JavaScript is valid TypeScript)
- TypeScript code gets **converted** to JavaScript before it runs
- TypeScript catches errors **before** your code runs, not after
- TypeScript is used by many large companies (Microsoft, Google, Airbnb)

### Why Are We Using TypeScript?

Even though it's an extra step to learn, TypeScript:

- Helps you understand what your code is doing
- Catches mistakes early
- Makes your code self-documenting
- Is increasingly expected in professional development

---

## What is Node.js?

**Node.js** (often just called "Node") lets you run JavaScript *outside* of a web browser.

### The Traditional Way

Originally, JavaScript could only run inside web browsers:

```
┌─────────────────────────────────────┐
│         Web Browser                 │
│  ┌─────────────────────────────┐    │
│  │    JavaScript Engine        │    │
│  │    (runs your code)         │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

### The Node.js Way

Node.js takes the JavaScript engine out of the browser so you can run JavaScript directly on your computer:

```
┌─────────────────────────────────────┐
│         Your Computer               │
│  ┌─────────────────────────────┐    │
│  │    Node.js                  │    │
│  │    (JavaScript Engine)      │    │
│  │    (runs your code)         │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

### Why Does This Matter?

With Node.js, you can:

- Run JavaScript programs on your computer (like we're doing in this course)
- Build web servers
- Create command-line tools
- Automate tasks

### What is NVM?

**NVM** stands for **Node Version Manager**. It lets you install and switch between different versions of Node.js.

Why would you need different versions? Sometimes different projects require different Node versions. NVM makes it easy to manage this.

---

## What is NPM?

**NPM** stands for **Node Package Manager**. It's a tool that comes with Node.js.

### What's a Package?

A **package** (also called a **library** or **module**) is code that someone else has written that you can use in your own projects.

For example, instead of writing your own code to handle dates and times (which is surprisingly complicated!), you can use a package that someone else has already written and tested.

### What Does NPM Do?

NPM helps you:

- **Install packages** that other people have created
- **Manage dependencies** (keep track of what packages your project uses)
- **Share packages** you've created with others

### The package.json File

When you run `npm init -y`, it creates a `package.json` file. This file is like a recipe card for your project:

```json
{
  "name": "my-project",           // Your project's name
  "version": "1.0.0",             // Your project's version
  "description": "",              // What your project does
  "main": "index.js",             // The starting point
  "scripts": { ... },             // Commands you can run
  "devDependencies": {            // Packages your project needs
    "typescript": "^5.0.0",
    "tsx": "^4.0.0"
  }
}
```

### Installing Packages

When you run:

```bash
npm install -D typescript tsx @types/node
```

NPM:

1. Downloads the packages (`typescript`, `tsx`, `@types/node`)
2. Puts them in a `node_modules` folder
3. Records them in `package.json`
4. Creates a `package-lock.json` file (tracks exact versions)

The `-D` flag means these are **development dependencies** - tools you need while building your project, but not when running it in production.

---

## What Happens When You Run Your Script?

Let's break down what happens when you type:

```bash
node --import tsx main.ts
```

### Step by Step

```
┌──────────────────────────────────────────────────────────────┐
│  1. You type the command and press Enter                     │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│  2. Your terminal looks for a program called "node"          │
│     (Node.js, which we installed earlier)                    │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│  3. The --import tsx part tells Node to load "tsx"           │
│     tsx is a tool that converts TypeScript to JavaScript     │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│  4. Node reads your main.ts file                             │
│     tsx converts the TypeScript to JavaScript on-the-fly     │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│  5. Node sees the import statement and loads booking.ts      │
│     (also converted by tsx)                                  │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│  6. Node runs your code line by line                         │
│     - Creates the valid and invalid objects                  │
│     - Calls isValidBooking&lpar;&rpar; for each                         │
│     - Prints the results with console.log&lpar;&rpar;                   │
└──────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│  7. Output appears in your terminal:                         │
│     true                                                     │
│     false                                                    │
└──────────────────────────────────────────────────────────────┘
```

### Breaking Down the Command

| Part           | What it means                                           |
| -------------- | ------------------------------------------------------- |
| `node`         | Run the Node.js program                                 |
| `--import tsx` | First, load the tsx tool &lpar;handles TypeScript&rpar; |
| `main.ts`      | Then run this file                                      |

### Why .js in the Import Statement?

You might have noticed something odd in `main.ts`:

```typescript
import { isValidBooking } from "./booking.js";
```

We write `booking.js` even though our file is called `booking.ts`. This is because:

1. TypeScript gets converted to JavaScript
2. When the code actually runs, it will be looking for `.js` files
3. Tools like `tsx` handle this conversion automatically

---

## Summary

| Tool           | What it is                     | Why we use it                               |
| -------------- | ------------------------------ | ------------------------------------------- |
| **VS Code**    | An IDE &lpar;code editor&rpar; | Write and manage code easily                |
| **JavaScript** | A programming language         | The language that runs in browsers and Node |
| **TypeScript** | JavaScript with types          | Catches errors before code runs             |
| **Node.js**    | JavaScript runtime             | Runs JavaScript outside browsers            |
| **NVM**        | Node version manager           | Install and switch Node versions            |
| **NPM**        | Package manager                | Install and manage code libraries           |
| **tsx**        | TypeScript executor            | Run TypeScript directly in Node             |

---

## Quick Mental Model

Think of it like cooking:

- **JavaScript/TypeScript** = The recipe &lpar;instructions&rpar;
- **Node.js** = The kitchen &lpar;where cooking happens&rpar;
- **NPM** = The grocery store &lpar;get ingredients others have made&rpar;
- **VS Code** = Your organised recipe book and prep area
- **tsx** = A translator &lpar;converts TypeScript recipes to JavaScript&rpar;

When you run `node --import tsx main.ts`, you're saying: "Kitchen, please use this translator to read my TypeScript recipe and cook it!"

---

## Next Steps

Now that you understand the tools, head back to **Lesson 1** to write your first script! You'll have a much better understanding of what's happening behind the scenes.