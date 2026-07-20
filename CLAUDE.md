# LCC - Lakshmi Card Clothing

This is the LCC project — a sales website and app for Lakshmi Card Clothing.

## Project Rules

- Tests live in `tests/` (smoke tests in `tests/smoke/`, regression tests in `tests/regression/`)
- Smoke tests must run under 5 minutes total
- Use `data-testid` selectors when available; fall back to other selectors only when necessary
- Never hardcode credentials — always use `.env` variables (`TEST_USERNAME`, `TEST_PASSWORD`, `BASE_URL`)
- Copy `.env.example` to `.env` and fill in values before running tests
