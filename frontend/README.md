# Frontend - DashboardVietshopx247

Frontend application for the monitoring and operations dashboard.

## Tech Stack

- React + Vite
- React Router
- Tailwind CSS
- Axios
- ESLint + Prettier + Husky + lint-staged

## Project Structure

```text
src/
├── components/    # Reusable UI and layout components
├── pages/         # Route-level pages
├── routes/        # Route declarations
├── services/      # API client and domain services
├── hooks/         # Custom hooks
├── utils/         # Shared helpers
└── styles/        # Shared style modules
```

## Environment

Create `frontend/.env` from `frontend/.env.example`:

```env
VITE_API_URL=http://localhost:8000/api
```

## Available Scripts

- `npm run dev`: start development server
- `npm run build`: create production build
- `npm run preview`: preview production build
- `npm run lint`: run eslint
- `npm run format`: format source with prettier
- `npm run format:check`: check prettier formatting

## Code Quality Workflow

- `lint-staged` runs prettier and eslint on staged files
- `husky` pre-commit hook runs `npm run lint-staged`

Install hooks once after clone:

```bash
npm install
npm run prepare
```

## Notes

- Keep API calls inside `src/services` only.
- Avoid hardcoding API endpoints in pages/components.
- Add new features by module: page + service + route.
