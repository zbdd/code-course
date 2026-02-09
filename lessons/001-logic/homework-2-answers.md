# Lesson 001 Logic - Homework 2 - Answer Sheet

## Part A: Debugging Control Flow (Progressive)

1. The condition uses `&&`, but the store should be open when it is the weekend **or** a holiday, so it should use `||`. Final value: `"Open"`.
```ts
let isWeekend: boolean = true;
let isHoliday: boolean = false;
let storeStatus: string;

if (isWeekend || isHoliday) {
    storeStatus = "Open";
} else {
    storeStatus = "Closed";
}
```

2. The `else if (weightKg <= 1)` check is unreachable because `weightKg <= 5` comes first. Final value: `"Light"`.
```ts
let weightKg: number = 1;
let label: string;

if (weightKg <= 1) {
    label = "Light";
} else if (weightKg <= 5) {
    label = "Standard";
} else {
    label = "Heavy";
}
```

3. It uses `||`, but free delivery needs both conditions to be true, so it should use `&&`. Final value: `5`.
```ts
let isMember: boolean = false;
let cartTotal: number = 80;
let deliveryCost: number;

if (isMember && cartTotal >= 50) {
    deliveryCost = 0;
} else {
    deliveryCost = 5;
}
```

4. Final value: `"Please verify your email."`
```ts
let isSignedIn: boolean = true;
let isEmailVerified: boolean = false;
let message: string;

if (!isSignedIn) {
    message = "Please sign in.";
} else if (!isEmailVerified) {
    message = "Please verify your email.";
} else {
    message = "Welcome!";
}
```

5. The condition should only be `"Normal"` when the user is not in a meeting and not sleeping (both must be false), so it should use `&&`. Final value: `"Silence"`.
```ts
let isInMeeting: boolean = false;
let isSleeping: boolean = true;
let mode: string;

if (!isInMeeting && !isSleeping) {
    mode = "Normal";
} else {
    mode = "Silence";
}
```

6. `isSpeaker` should be checked before `isVIP` so speakers always get `"Speaker"`. Final value: `"Speaker"`.
```ts
let hasTicket: boolean = true;
let isVIP: boolean = true;
let isSpeaker: boolean = true;
let badge: string;

if (!hasTicket) {
    badge = "No Entry";
} else if (isSpeaker) {
    badge = "Speaker";
} else if (isVIP) {
    badge = "VIP";
} else {
    badge = "General";
}
```

7. You must compare `color` to each string. Final value: `true`.
```ts
let color: string = "blue";
let isPrimaryColor: boolean;

if (color === "red" || color === "blue" || color === "yellow") {
    isPrimaryColor = true;
} else {
    isPrimaryColor = false;
}
```

8. Final value: `"Low"`.
```ts
let batteryPercent: number = 10;
let isCharging: boolean = false;
let status: string;

if (batteryPercent <= 0) {
    status = "Off";
} else if (isCharging) {
    status = "Charging";
} else if (batteryPercent < 20) {
    status = "Low";
} else {
    status = "Normal";
}
```

9. You need to group the rule clearly: signed in, not banned, and (paid or trial). Final value: `true`.
```ts
let isSignedIn: boolean = true;
let isPaidUser: boolean = false;
let hasFreeTrial: boolean = true;
let isBanned: boolean = false;
let canWatch: boolean;

if (isSignedIn && !isBanned && (isPaidUser || hasFreeTrial)) {
    canWatch = true;
} else {
    canWatch = false;
}
```

10.
```ts
function getEntryMessage(hasTicket: boolean, isBanned: boolean): string {
    if (!hasTicket) {
        return "No ticket.";
    }

    if (isBanned) {
        return "Banned.";
    }

    return "Enjoy the show!";
}
```
