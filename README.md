# Playwright + Cucumber E2E Test Automation Framework

[![E2E Tests](https://github.com/christobj/playwright-cucumber-e2e-framework/actions/workflows/e2e-tests.yml/badge.svg)](https://github.com/christobj/playwright-cucumber-e2e-framework/actions/workflows/e2e-tests.yml)

## 📌 Overview

End-to-end test automation framework built with **Playwright** and **Cucumber** (BDD-style) targeting [automationexercise.com](https://automationexercise.com/), a public demo e-commerce site. Built as a personal portfolio project to demonstrate a production-style JavaScript test automation setup.

## 🛠️ Tech Stack

- **Playwright** — browser automation
- **Cucumber** (`@cucumber/cucumber`) — BDD feature file execution
- **JavaScript (Node.js)** — test scripting language
- **Chai** — assertions
- **ESLint & Prettier** — linting and formatting
- **Husky** — git hooks
- **GitHub Actions** — CI

## 📁 Project Structure

```
e2e/
  tests/
    components/         # Shared UI components (e.g. header/nav)
    utils/               # Env config + test data generation
    features/            # Gherkin .feature files
    pages/               # Page objects
    step_definition/     # Step definitions
    support/             # World + hooks (browser lifecycle)
scripts/                 # Report generation/opening helpers
.github/workflows/       # CI pipeline (GitHub Actions)
.env.example             # Committed template for local .env
cucumber.js               # Cucumber profile config
eslint.config.mjs         # ESLint flat config
playwright.config.js      # Shared browser/env config (baseURL, browser, headless, timeout)
```

## ⚙️ Installation

```bash
git clone <repo-url>
cd playwright-cucumber-e2e-framework
npm install
npx playwright install
cp .env.example .env
npm run prepare   # sets up Husky git hooks
```

## 🚀 Running Tests

```bash
npm test                    # all features, default browser (chromium, headless)
npm run test:chromium
npm run test:firefox
npm run test:webkit
npm run test:headed         # headed mode
npm run test:debug          # headed + slow motion
npx cucumber-js e2e/tests/features/cart.feature   # a single feature file
```

Browser and run behavior are controlled via environment variables (see `.env.example`): `BASE_URL`, `BROWSER`, `HEADLESS`, `TIMEOUT`, `SLOWMO`.

## 🌍 Environment Configuration

This project targets a single public site, so configuration is a single `.env` file (no multi-brand/multi-market setup):

```
BASE_URL=https://automationexercise.com
BROWSER=chromium
HEADLESS=true
TIMEOUT=30000
SLOWMO=0
```

`.env` is gitignored; `.env.example` is committed as the template.

## 📝 Test Reports

Every run generates a self-contained HTML report via Cucumber's built-in `html` formatter:

```
reports/cucumber_report.html
```

Open it manually, or run:

```bash
npm run report:open
```

## ✅ CI/CD (GitHub Actions)

`.github/workflows/e2e-tests.yml` runs the suite on every push/PR to `main` (and supports manual dispatch with a browser choice). The HTML report and screenshots are uploaded as a build artifact on every run, pass or fail.

## 🌿 Branching Strategy (GitHub Flow)

- `main` is always in a working, deployable state.
- All work happens on short-lived branches off `main`:
  - `feature/<short-description>` — new tests/functionality
  - `fix/<short-description>` — bug fixes
  - `chore/<short-description>` — tooling/config/docs
- Open a PR into `main`; CI must pass before merging (squash merge recommended).
- No `develop` branch — keep it simple for a single-contributor portfolio repo.

## 📌 Linting & Formatting

```bash
npm run lint         # check
npm run lint.fix     # auto-fix
npm run format       # check
npm run format.fix    # auto-fix
```

Husky's `pre-commit` hook runs `npm run lint && npm run format` before every commit.

## 🔌 Recommended VS Code Extensions

- Gherkin Beautifier
- Cucumber (Gherkin) Full Support
- DotENV
- Playwright Test for VSCode

Happy Testing! 🚀
