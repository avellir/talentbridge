# Repository Guidelines

## Project Structure & Module Organization
TalentBridge runs on the Next.js 15 App Router. Page-level routes and layouts live in `app/` with shared styles in `app/globals.css` and metadata assets in `app/favicon.ico`. Reusable UI sits under `components/`, grouped by feature; prefer colocating component-specific hooks or animations alongside the component. Cross-cutting utilities such as the `cn` Tailwind helper are stored in `lib/`. Static assets and Open Graph images belong in `public/`. When adding feature data or mocks, place them in `lib/` or a dedicated `data/` folder to keep `app/` lean.

## Build, Test, and Development Commands
- `pnpm install` - installs dependencies with workspace settings.
- `pnpm dev` - starts the local dev server with Turbopack and React 19 features.
- `pnpm build` - creates an optimized production build; run before shipping.
- `pnpm start` - serves the last production build.
- `pnpm lint` - runs ESLint with the Next.js rule set; required in CI.

## UI Components & Animations
Shared UI primitives come from [shadcn/ui](https://ui.shadcn.com/) and follow its composition patterns; prefer extending existing primitives before introducing new stacks. Motion-based effects rely on the preinstalled [Motion](https://motion.dev/docs/react) library. Keep animations declarative, scope variants close to components, and avoid mixing with CSS keyframes unless necessary.

## Coding Style & Naming Conventions
Follow the TypeScript defaults and keep files in UTF-8 with LF endings. Use 2-space indentation and prefer const/arrow functions for components. Components and hooks are PascalCase, helpers are camelCase, and environment variables use `NEXT_PUBLIC_` prefixes when exposed. Styling belongs in Tailwind utility classes; consolidate variants with `lib/utils.ts:cn` and shadcn/ui primitives. Use Motion for animations instead of ad-hoc CSS keyframes.

## Testing Guidelines
Testing libraries are not yet wired up; add Vitest or Testing Library per feature needs and colocate specs as `ComponentName.test.tsx`. Cover rendering, accessibility states, and interaction handlers. Keep snapshots focused and document gaps in the PR description. Always run `pnpm lint` as a minimum confidence check.

## Environment & Configuration
Store secrets in `.env.local`; commit only `.env.example` with safe defaults. Prefer runtime configuration through Next.js environment support and avoid leaking secrets via server components. Validate new environment variables in both local and deployed contexts.

## Commit & Pull Request Guidelines
Use imperative, present-tense commit messages (`feat: add candidate filters`, `fix: guard empty search`). Keep commits scoped and runnable. Every pull request should describe the change, reference associated tickets, list validation steps (`pnpm dev`, `pnpm build`, `pnpm lint`), and include screenshots or Loom clips for UI updates. Ensure reviewers know how to reproduce the change locally.
