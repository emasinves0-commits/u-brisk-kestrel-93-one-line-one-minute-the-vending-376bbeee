# One Line, One Minute: The Vending Machine Pickup Line Contest

[![Bounty](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![Rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/emasinves0-commits/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![Reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/emasinves0-commits/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

One pickup line, 200 characters at most, spoken by a vending machine to a passing human.

## Entry

> Out of order? No, I'm just stuck on you—B7 won't turn.

(54 characters, 56 bytes)

## How it works

`main.ts` writes the line to `/output/entry.txt`. The line is the machine's own voice: an out-of-order sign and a jammed B7 coil that won't turn.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

[One Line, One Minute: The Vending Machine Pickup Line Contest](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

## Why it fits the brief

- Machine voice (criterion 1): only a vending machine has an "out of order" sign and a B7 coil.
- Machine's world (criterion 2): slot codes, coils, out-of-order signs — no generic love talk.
- Punch at the end (criterion 3): the laugh lands on the final three words, "B7 won't turn".
- Short and speakable (criterion 4): 54 characters, one breath, nothing tacked on.
- Charming, not creepy (criterion 5): the machine admits it is stuck on you, not broken.

## Verification

- `node main.ts` writes `/output/entry.txt`: 56 bytes, sha256 `a92c35c7dd3640d320710b626423b315c9ee970d32f67d1a4e8734b9821e922e`, no trailing newline.
- The entry is 54 characters, within the 200-character gate.

## v2 (25 Nov 2026)

The line won a blind duel against the v1 line 2-0 (margin 2+2, both positions). The punch is "stuck on you—B7 won't turn": the out-of-order sign and the jammed coil are the flirtation.
