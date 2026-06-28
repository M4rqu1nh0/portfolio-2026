# Marco Villegas — UX Portfolio

Personal portfolio of Marco Villegas Caballería (UX Designer, E2E). Built as a static single-page app.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** + a small set of **shadcn/ui** primitives
- **React Router** for client-side routing
- **Vitest** + **Testing Library** for unit tests

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:8080
```

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint     # eslint
npm test         # run unit tests once
npm run test:watch
```

## Project structure

```
src/
├── components/        # custom components (Navbar, Hero, ProjectCard, ...)
│   └── ui/            # shadcn/ui primitives
├── data/
│   └── projects.ts    # ← project case-study content lives here
├── pages/
│   ├── Index.tsx       # home
│   ├── ProjectPage.tsx # renders any case study by :slug
│   └── NotFound.tsx
└── App.tsx            # routing
```

## Adding a new project case study

Case studies are **data, not markup**. To add one, append a new `ProjectDetail`
object to the array in `src/data/projects.ts` (fields: `slug`, `title`,
`metrics`, `processSteps`, `gallery`, etc.) and add a card to the home grid in
`src/pages/Index.tsx`. The detail page renders automatically at
`/proyecto/<slug>` — no new component needed.

Images go in `public/img/` and are referenced by absolute path (e.g. `/img/foo.webp`).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app
and deploys `dist/` to cPanel shared hosting over SFTP. Host and credentials are
stored as GitHub Actions secrets.
