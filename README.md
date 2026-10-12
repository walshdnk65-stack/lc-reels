# LC Reels

A TikTok-style feed of bite-sized revision for the Irish Leaving Certificate. It covers Accounting, English, Irish, Mathematics, Chemistry, French and Business, aimed at the June 2027 exam.

```
npm install
npm run dev      # http://localhost:5173
npm test         # content integrity, spaced repetition, answer checking and feed tests
npm run build
```

## How it works

- **Feed** (`src/ui/Feed.tsx`): full-screen vertical scroll-snap. Cards load in batches as you scroll, and only cards near the screen are rendered. Arrow keys / j / k work on desktop.
- **Card types** (`src/ui/cards/`): flashcard, multiple choice, short answer (key-point matching), fill-the-gap, worked example (step-by-step reveal), quick explainer (with a quick check), exam technique, translate, sentence builder and essay plan. Visuals (graphs, accounting layouts, structural formulae) are in `src/ui/Visual.tsx`.
- **Spaced repetition** (`src/engine/srs.ts`): a simplified SM-2. Wrong answers come back within the session. Correct ones come back after growing gaps.
- **Feed algorithm** (`src/engine/feed.ts`): due reviews first, then new cards weighted towards weak topics. An explainer is shown before the questions on its objective, and no more than two cards in a row come from the same subject.
- **Progress** (`src/engine/store.ts`): streak, XP, daily goal, and per-card memory state, stored in `localStorage` on the device.

## Content and the syllabus

- `src/data/syllabus.ts`: the syllabus map (Subject → Level → Topic → Subtopic → Objective), kept separate from the UI. Update this file when requirements change.
- `src/data/sources.ts`: the official documents used, with notes on what has actually been checked.
- `src/data/content/*.ts`: the cards, one file per subject. Each card has a unique `id`, the `objective` it maps to, a `level`, a `provenance` and a `verification` status.

Provenance labels are shown on every card:

| provenance | meaning |
|---|---|
| `prescribed` | Department of Education prescribed-material circulars |
| `syllabus` | restates official syllabus / specification content |
| `exam-format` | official exam structure (confirm with the SEC) |
| `original-practice` | written for this app from syllabus content; **not** past-paper questions |
| `exam-advice` | general advice, not an official marking rule |

`verification: 'verified'` is used only where the item was checked against the cited document. Currently that means the 2027 English prescribed list (circular 0021/2025) and the 2027/2028 Irish prescribed material (circular 0041/2026). Everything else is `needs-review`. **Syllabus coverage is not complete.** The map has not yet been checked line by line against each NCCA specification.

`npm test` fails if a card points at a missing objective, has the wrong number of correct options, uses a level its objective excludes, or claims verification without a source.
