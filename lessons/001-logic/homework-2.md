# Lesson 001 Logic - Homework 2

## Part A: Debugging Control Flow (Progressive)

_These questions start simple and slowly get more complex. Read the rules carefully._

1. This store should be `"Open"` when it is the weekend **OR** a holiday. Fix the condition and write the final value of `storeStatus`.

```ts
let isWeekend: boolean = true;
let isHoliday: boolean = false;
let storeStatus: string;

if (isWeekend && isHoliday) {
    storeStatus = "Open";
} else {
    storeStatus = "Closed";
}
```

2. The shipping label rules are:
- `"Light"` when `weightKg <= 1`
- `"Standard"` when `weightKg <= 5`
- `"Heavy"` otherwise

This code does not follow the rules. Fix the control flow and write the final value of `label`.

```ts
let weightKg: number = 1;
let label: string;

if (weightKg <= 5) {
    label = "Standard";
} else if (weightKg <= 1) {
    label = "Light";
} else {
    label = "Heavy";
}
```

3. Free delivery should only happen when the user is a member **AND** their `cartTotal` is at least `50`. Fix the condition and write the final value of `deliveryCost`.

```ts
let isMember: boolean = false;
let cartTotal: number = 80;
let deliveryCost: number;

if (isMember || cartTotal >= 50) {
    deliveryCost = 0;
} else {
    deliveryCost = 5;
}
```

4. Rewrite this code to remove the nested `if` by handling the “not signed in” case first (invert the control flow). Then write the final value of `message`.

```ts
let isSignedIn: boolean = true;
let isEmailVerified: boolean = false;
let message: string;

if (isSignedIn) {
    if (isEmailVerified) {
        message = "Welcome!";
    } else {
        message = "Please verify your email.";
    }
} else {
    message = "Please sign in.";
}
```

5. This app should use `"Silence"` mode when the user is in a meeting **OR** sleeping. Fix the condition and write the final value of `mode`.

```ts
let isInMeeting: boolean = false;
let isSleeping: boolean = true;
let mode: string;

if (!isInMeeting || !isSleeping) {
    mode = "Normal";
} else {
    mode = "Silence";
}
```

6. Badge rules:
- No ticket: `"No Entry"`
- Speaker (even if VIP): `"Speaker"`
- VIP: `"VIP"`
- Everyone else: `"General"`

This code almost works, but it fails one of the rules. Fix the control flow and write the final value of `badge`.

```ts
let hasTicket: boolean = true;
let isVIP: boolean = true;
let isSpeaker: boolean = true;
let badge: string;

if (!hasTicket) {
    badge = "No Entry";
} else if (isVIP) {
    badge = "VIP";
} else if (isSpeaker) {
    badge = "Speaker";
} else {
    badge = "General";
}
```

7. A “primary color” should be `true` when the color is `"red"`, `"blue"`, or `"yellow"`. Fix the condition and write the final value of `isPrimaryColor`.

```ts
let color: string = "blue";
let isPrimaryColor: boolean;

if (color === "red" || "blue" || "yellow") {
    isPrimaryColor = true;
} else {
    isPrimaryColor = false;
}
```

8. Refactor this code to use a single `if / else if / else` chain (no nested `if` statements). Do not change behavior. Then write the final value of `status`.

```ts
let batteryPercent: number = 10;
let isCharging: boolean = false;
let status: string;

if (batteryPercent > 0) {
    if (isCharging) {
        status = "Charging";
    } else {
        if (batteryPercent < 20) {
            status = "Low";
        } else {
            status = "Normal";
        }
    }
} else {
    status = "Off";
}
```

9. Rule: `canWatch` should only be `true` when the user is signed in, not banned, and (paid **OR** on a free trial). Fix the condition so it exactly matches the rule (use parentheses to make it clear), then write the final value of `canWatch`.

```ts
let isSignedIn: boolean = true;
let isPaidUser: boolean = false;
let hasFreeTrial: boolean = true;
let isBanned: boolean = false;
let canWatch: boolean;

if (isSignedIn && isPaidUser || hasFreeTrial && !isBanned) {
    canWatch = true;
} else {
    canWatch = false;
}
```

10. **Bonus (Preview):** Inside a function, `return` ends the function early. Rewrite this function so it has no nested `if` statements (use early returns). Keep the same returned strings.

```ts
function getEntryMessage(hasTicket: boolean, isBanned: boolean): string {
    let message: string;

    if (hasTicket) {
        if (!isBanned) {
            message = "Enjoy the show!";
        } else {
            message = "Banned.";
        }
    } else {
        message = "No ticket.";
    }

    return message;
}
```
