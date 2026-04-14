# AGENTS.md

## Project scope
- Personal artist portfolio/landing built with Nuxt + Nuxt UI.
- Visual direction is experimental tech brutalist and should guide new UI work.

## Source of truth
- Always use the latest committed repository state (`HEAD`) as source of truth.
- Do not assume uncommitted/staged working tree changes unless the user explicitly asks to use them.
- Use executable config first: `package.json`, `nuxt.config.ts`, `.github/workflows/ci.yml`.
- If prose conflicts with config/scripts, follow config/scripts.

## Change policy
- Do not introduce new dependencies unless strictly necessary.
- Prefer modifying existing components over creating new ones.
- Maintain a cohesive and intentional visual identity as the design evolves.
- Avoid refactoring unrelated parts of the codebase.

## Toolchain and versions
- Package manager is `pnpm` (`packageManager: pnpm@10.33.0`). Do not switch to npm/yarn.
- CI runs on Node `22` (`.github/workflows/ci.yml`); keep local checks compatible with Node 22.

## Canonical commands
- Install: `corepack enable && pnpm install`
- Dev server: `pnpm dev`
- Lint: `pnpm lint`
- Typecheck: `pnpm typecheck`
- Production build: `pnpm build`
- Static generation: `pnpm generate`
- Local static preview: `npx serve .output/public`

## Required verification order
- Run checks in this order before merge/deploy: `pnpm lint && pnpm typecheck && pnpm build`.
- For static deployment, run `pnpm generate` and publish `.output/public`.

## Architecture notes
- App shell and SEO live in `app/app.vue`.
- Main theme and brutalist tokens live in `app/assets/css/main.css` and `app/app.config.ts`.
- Routes are file-based under `app/pages` (`/`, `/portfolio`, `/portfolio/[slug]`, `/about`, `/contact`).
- Portfolio content is statically defined in `app/data/works.ts` (no CMS or external source).

## Deployment target
- Output mode: static
- Final artifact: `.output/public`
- No server runtime (SSR/Nitro server not used)
- Compatible with generic static hosting environments