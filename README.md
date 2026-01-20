# Stencil + Vue Starter

A minimal reproduction monorepo for testing Stencil components with Vue output targets.

## Versions

- `@stencil/core`: latest
- `@stencil/vue-output-target`: latest
- `vue`: ^3.5.0

## Setup

```bash
# Install dependencies
pnpm install

# Start development mode (builds stencil first, then watches all)
pnpm start
```

The development server will start at http://localhost:4200/
In watch mode all changes to the Stencil components will automatically rebuild the Vue wrappers and reload the Vue app.