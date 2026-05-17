# Ecosistema de Desarrollo de Soluciones Digitales

MVP web y operacional para el Departamento de Ingeniería Industrial de la Universidad de Santiago de Chile. La plataforma organiza un ecosistema académico que transforma desafíos reales en prototipos, MVP, pilotos y soluciones digitales transferibles.

## Tech stack

- Next.js 16 con App Router
- TypeScript
- Tailwind CSS v4
- React 19
- Datos mock en módulos TypeScript

## Rutas principales

- `/`: sitio público institucional
- `/desafios`: banco de desafíos y criterios de evaluación
- `/desafios/nuevo`: formulario de postulación de desafíos
- `/portafolio`: portafolio de soluciones digitales
- `/admin/desafios`: panel interno MVP con desafíos mock

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Luego abre `http://localhost:3000`.

## Build

```bash
npm run lint
npm run build
```

## Limitaciones actuales

- No hay base de datos real.
- No hay autenticación ni control de acceso.
- El formulario guarda una copia local en `localStorage`.
- El panel admin usa datos mock desde `src/data/challenges.ts`.
- Los enlaces de demo y repositorio del portafolio son placeholders.

## Integración futura

La estructura separa tipos, scoring, datos y componentes para reemplazar los mocks por Supabase o PostgreSQL. Ver:

- `docs/data-model.md`
- `docs/roadmap.md`
- `docs/deployment.md`

No se incluyen credenciales, secretos ni servicios externos configurados.
