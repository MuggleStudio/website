# MuggleStudio

The [official website of MuggleStudio](https://muggle.studio), an independent studio that designs and builds apps. The site is built with Astro and hosted on Cloudflare Pages.

## Local development

Use the Node.js version specified in [`.node-version`](.node-version).

```sh
npm ci
npm run dev
```

Open the [local site](http://localhost:4321/).

## Build and preview

```sh
npm run build:verified
npm run preview
```

`build:verified` runs Astro type checks and writes the production build to `dist/`.

## Deployment

GitHub Actions verifies pull requests. Pushes to `main` in `MuggleStudio/website` trigger verification and deploy the site to the `mugglestudio` project on Cloudflare Pages. See the [deployment guide](docs/cloudflare-pages.md) for configuration and rollback.

See [AGENTS.md](AGENTS.md) for contribution guidelines.

## Font license

[Instrument Sans](https://github.com/Instrument/instrument-sans) is distributed under the [SIL Open Font License 1.1](public/fonts/OFL.txt).
