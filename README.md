# Ecosistema de Desarrollo de Soluciones Digitales

MVP web y operacional para el Departamento de Ingeniería Industrial de la Universidad de Santiago de Chile. La plataforma organiza un ecosistema académico que transforma desafíos reales en prototipos, MVP, pilotos y soluciones digitales transferibles.

El sitio actual es una primera versión institucional: presenta la narrativa pública del ecosistema, un banco de desafíos con datos mock, un formulario público conectado a Supabase, un portafolio de soluciones de ejemplo y un panel interno simulado.

## Tech stack

- Next.js 16 con App Router
- TypeScript
- Tailwind CSS v4
- React 19
- Supabase JS
- Resend
- Simple Icons
- Datos mock en módulos TypeScript

## Herramientas del ecosistema

### Inteligencia artificial y asistencia al desarrollo

- ChatGPT
- OpenAI Codex
- Claude Code

### Código, colaboración y control de versiones

- GitHub
- Git
- Visual Studio Code

### Frontend y desarrollo web

- Next.js
- React
- TypeScript
- Tailwind CSS
- Node.js / npm

### Base de datos, autenticación y backend

- Supabase
- PostgreSQL

### Despliegue e infraestructura

- Vercel

### Correos y notificaciones

- Resend

### Diseño, documentación y prototipado

- Figma
- Overleaf / LaTeX
- Markdown
- Notion o Google Drive

### Datos, análisis y prototipos técnicos

- Python
- Jupyter
- Pandas
- Streamlit, opcional

### Calidad y pruebas

- ESLint
- Prettier
- Playwright, futuro

Nota: los logos de herramientas visibles en la landing se renderizan localmente con `simple-icons`. Cuando un ícono no está disponible en esa dependencia, se usa un fallback textual con iniciales.

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

## Conexión con Supabase

El formulario público de `/desafios/nuevo` inserta postulaciones en la tabla `desafios` usando el cliente público de Supabase.

Variables requeridas:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Configuración local:

1. Copia `.env.example` como `.env.local`.
2. Completa `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` con los valores del proyecto Supabase.
3. Reinicia el servidor local con `npm run dev`.

Configuración en Vercel:

1. Abrir el proyecto en Vercel.
2. Ir a Project Settings > Environment Variables.
3. Agregar `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Redeployar para que las variables queden disponibles en build/runtime.

Limitación actual: el formulario público puede enviar desafíos, pero la gestión administrativa real todavía requiere autenticación, roles y políticas de acceso. El panel `/admin/desafios` sigue usando datos mock.

## Correos de confirmación

El formulario de `/desafios/nuevo` usa Resend solo desde el servidor para enviar un correo de confirmación después de registrar el desafío en Supabase. La clave de Resend nunca debe usar prefijo `NEXT_PUBLIC_` ni ejecutarse desde el navegador.

Variables requeridas en Vercel para habilitar el envío:

```bash
RESEND_API_KEY=
RESEND_FROM_EMAIL=
```

Si Resend no está configurado o el correo falla, la postulación sigue quedando registrada en Supabase. El correo confirma solo la recepción de la postulación.

## Limitaciones actuales

- Solo el formulario público está conectado a Supabase.
- No hay autenticación ni control de acceso.
- El panel admin usa datos mock desde `src/data/challenges.ts`.
- Los enlaces de demo y repositorio del portafolio son placeholders.
- El logo USACH del footer está disponible en `public/logos/usach-s1.png`.

## Integración futura

La estructura separa tipos, scoring, datos y componentes para reemplazar progresivamente los mocks por Supabase o PostgreSQL. Ver:

- `docs/data-model.md`
- `docs/roadmap.md`
- `docs/deployment.md`

No se incluyen credenciales, secretos ni servicios externos configurados.

## Pasos futuros

- Conectar evaluaciones, proyectos, portafolio y panel admin a una base de datos.
- Agregar autenticación institucional para las rutas internas.
- Implementar gestión real del panel administrativo.
- Habilitar administración de soluciones, demos, repositorios y estados de madurez.
