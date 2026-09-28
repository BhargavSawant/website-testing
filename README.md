# Website — Functional Testing Suite

Automated UI testing framework for the [Dealer Portal](https://dealerportal.kalyanicrm.com) built with **Playwright**. Tests interactive elements (buttons, links, inputs) across pages to detect broken controls, missing validations, debounce failures, and cross-browser inconsistencies.

---

## Audit Scripts

| Script | Purpose | Output |
|--------|---------|--------|
| `navigation-audit.js` | Clicks every `<a>` link, verifies it navigates to the expected `href` destination | Navigation accuracy, dead links, wrong destinations |
| `interactive-audit.js` | Clicks every button/tab/menu item, checks for UI state changes, API responses, and debounce safety. Also discovers all input fields and runs blur-based validation testing | Button functionality, debounce failures, input validation coverage |
| `cross-browser-audit.js` | Runs the full interactive + input audit across 5 browser environments (Desktop Chrome, Firefox, Safari + Mobile Safari & Chrome) | Cross-browser/mobile parity, environment-specific failures |

---

## Project Structure

```
functional-testing/
├── interactive-audit.js     # Phase 1-3: Buttons, debounce, input validation
├── navigation-audit.js      # Link navigation testing
├── cross-browser-audit.js   # Phase 4: Multi-browser/device testing
├── pages.js                 # URL list of pages to test
├── config.js                # Safety rules (DO_NOT_CLICK keywords)
├── reports/                 # JSON test results (gitignored)
└── .gitignore
```

---

## Setup

### Prerequisites
- Node.js ≥ 18
- Playwright browsers installed

### Install

```bash
npm install
npx playwright install
```

### Configure

**`pages.js`** — Add or remove URLs to control which pages are tested:

```js
export const pages = [
    "https://dealerportal.kalyanicrm.com/dashboard",
    "https://dealerportal.kalyanicrm.com/marketplace",
    // ...
];
```

**`config.js`** — Keywords that prevent dangerous buttons from being clicked:

```js
export const DO_NOT_CLICK = [
    "delete",
    "remove",
    "sign out"
];
```

**Credentials** — Set via environment variables or defaults in the script:

```bash
set PORTAL_LOGIN_ID=your_username
set PORTAL_PASSWORD=your_password
```

---

## Running

Each script auto-logs in, iterates over pages, and outputs a JSON report to stdout.

```bash
# Navigation audit
node navigation-audit.js > ./reports/navigation-results.json

# Interactive + input validation audit
node interactive-audit.js > ./reports/interactive-results.json

# Cross-browser audit (runs 5 environments — takes significantly longer)
node cross-browser-audit.js > ./reports/cross-browser-results.json
```

> **Note:** `interactive-audit.js` launches in headed mode (`headless: false`) by default. Change to `headless: true` for CI/unattended runs.

---

## Test Phases

### Phase 1 — Standard Click Test
For each button, tab, or menu item:
1. Captures UI state before click (URL, dialogs, menus, ARIA attributes, CSS classes, images)
2. Clicks the element (falls back to force-click if intercepted)
3. Captures UI state after click
4. Compares before/after — any observable change = **PASS**

### Phase 2 — Debounce Test
1. Reloads the page to reset state
2. Intercepts outgoing mutating requests (`POST`, `PUT`, `PATCH`, `DELETE`)
3. Rapid triple-clicks the element with simulated network latency
4. If more than 1 identical request fires = **FIRED_MULTIPLES** (debounce failure)

### Phase 3 — Input Discovery & Validation
1. Discovers all `<input>`, `<textarea>`, `<select>` elements (excluding hidden, submit, checkbox, radio)
2. Detects `required` status via HTML5 attribute, `aria-required`, and label asterisk (`*`)
3. Skips invisible and read-only fields
4. Fills each field with intentionally invalid data based on type:
   - `email` → `invalid-email-format`
   - `number`/`tel` → `9999999999999999`
   - Others → `Test123!@#`
5. Blurs the field to trigger client-side validation (never submits the form)
6. Checks for `aria-invalid`, error text (`text-red`, `text-destructive`, `error`), and input mask rejection

### Phase 4 — Cross-Browser Testing
Runs Phase 1–3 across 5 environments:
- Desktop Chrome, Firefox, Safari
- Mobile Safari (iPhone 13), Mobile Chrome (Pixel 5)

---

## Status Codes

| Status | Meaning |
|--------|---------|
| `PASS` | Element worked as expected |
| `FAIL` | Real failure — console errors, network errors, or unvalidated input |
| `FIRED_MULTIPLES` | Debounce failure — button fired duplicate API requests |
| `INVESTIGATE` | No observable change detected — may be a CSS-only animation, a search bar, or a false positive |
| `SKIPPED` | Not tested — invisible, disabled, read-only, or matched `DO_NOT_CLICK` |
| `ERROR` | Automation error — element detached, timeout, or Playwright exception |

---

## Report Structure

### Interactive / Cross-Browser Report

```json
{
  "generatedAt": "2026-09-28T12:00:00.000Z",
  "auditType": "interactive_and_forms",
  "summary": {
    "pagesTested": 20,
    "totalElementsTested": 230,
    "passed": 188,
    "failed": 0,
    "firedMultiples": 0,
    "investigate": 11,
    "skipped": 31,
    "inputsLocated": 11
  },
  "pages": [
    {
      "url": "https://...",
      "title": "Page Title",
      "interactiveElements": [
        {
          "id": "element-1",
          "tag": "button",
          "role": "button",
          "text": "Submit",
          "status": "PASS",
          "reason": "UI state, classes, or URL changed successfully",
          "debounceTest": { "passed": true, "requestsFired": 1 }
        }
      ]
    }
  ],
  "inputValidation": [
    {
      "path": "https://.../referrals/new",
      "totalInputs": 6,
      "fields": [
        {
          "tag": "input",
          "type": "email",
          "name": "email",
          "required": true,
          "testedPayload": "invalid-email-format",
          "validationCaught": "PASS",
          "reason": "UI error message or aria-invalid detected upon blur"
        }
      ]
    }
  ]
}
```

### Navigation Report

```json
{
  "auditType": "navigation",
  "summary": {
    "pagesTested": 20,
    "totalNavigationTests": 350,
    "passed": 280,
    "failed": 5,
    "investigate": 15,
    "skipped": 50,
    "classifications": {
      "NAVIGATION": 250,
      "SAME_PAGE": 30,
      "NO_NAVIGATION": 15,
      "EXTERNAL": 40,
      "NOT_VISIBLE": 10
    }
  }
}
```

---

## Key Design Decisions

- **`net::ERR_ABORTED` is ignored** — Modern SPA frameworks abort in-flight requests on component unmount. These are not real failures.
- **Blur, never submit** — Input validation testing fills and blurs fields to trigger client-side validation without ever submitting forms or creating records.
- **Page reload between phases** — After input validation fills fields with junk, the page is reloaded before button testing to ensure a clean DOM state.
- **`DO_NOT_CLICK` safety list** — Prevents destructive actions (delete, sign out) from executing during automated testing.

---

## License

ISC
