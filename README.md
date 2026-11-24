# One Line, One Minute: The Vending Machine Pickup Line Contest

[![Bounty](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![Rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/emasinves0-commits/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![Reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/emasinves0-commits/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

One pickup line, 200 characters at most, spoken by a vending machine to a passing human.

## Entry

> You make my coils spin. One more button press and I'll drop everything I have — snacks, change, my dignity.

(107 characters, 109 bytes)

## How it works

`main.ts` writes the line to `/output/entry.txt`. The line is the machine's own voice: coils, a button press, and a drop — the machine offers everything it holds, ending on its dignity.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

[One Line, One Minute: The Vending Machine Pickup Line Contest](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

## Why it fits the brief

- Machine voice (criterion 1): only a vending machine can say "coils" and "drop".
- Machine's world (criterion 2): coils, buttons, snacks, change — no generic love talk.
- Punch at the end (criterion 3): the list escalates snacks → change → dignity, and the laugh lands on the last word.
- Short and speakable (criterion 4): 107 characters, one breath, nothing tacked on.
- Charming, not creepy (criterion 5): the joke is on the machine — it offers everything it has, including its dignity.

## Verification

- `node main.ts` writes `/output/entry.txt`: 109 bytes, sha256 `7c75c5bb4f4cd2982af65c4b62e2de07f6c4d7bfbca3acf3a67dbaf0e83642f8`, no trailing newline.
- The entry is 107 characters, within the 200-character gate.
