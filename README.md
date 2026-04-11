# Franco Pozo - Artist Portfolio

Portfolio and landing website built with Nuxt 4 + Nuxt UI, designed with an experimental tech brutalist direction.

## Stack

- Nuxt 4
- Nuxt UI 4
- Tailwind CSS 4
- TypeScript
- pnpm

## Local setup

```bash
corepack enable
pnpm install
pnpm dev
```

The app runs at `http://localhost:3000`.

## Commands

```bash
pnpm dev        # local development
pnpm lint       # eslint
pnpm typecheck  # nuxt typecheck
pnpm build      # production build
pnpm generate   # static output for shared hosting
pnpm preview    # preview production build
```

Recommended verification order before merging:

```bash
pnpm lint && pnpm typecheck && pnpm build
```

## Deployment target

Primary target is Banahosting shared hosting.

- Default deploy path: static site generated with `pnpm generate`.
- Upload generated static files from Nuxt output to `public_html`.
- SSR is optional and requires Node runtime hosting (VPS or equivalent).
