# Modelo de datos

El MVP define las entidades principales en `src/lib/types.ts` y usa datos mock en `src/data`. La idea es que esos arreglos sean reemplazados por consultas a Supabase o PostgreSQL sin cambiar la UI.

## Entidades

### Challenge

Representa un desafío postulado al banco. Incluye origen, proponente, usuario objetivo, descripción del problema, datos disponibles, impacto, factibilidad, riesgos, horizonte, continuidad y estado.

Tabla sugerida: `challenges`

- Clave primaria: `id_desafio`
- Índices sugeridos: `estado_desafio`, `fecha_postulacion`, `tipo_proponente`, `area_aplicacion`
- Campos sensibles: `proponente_contacto`, restricciones de datos y cualquier descripción con datos personales

### ChallengeEvaluation

Representa la evaluación del desafío por comité o evaluador. El puntaje total se calcula con `calculateChallengeEvaluationScore` en `src/lib/scoring.ts`.

Tabla sugerida: `challenge_evaluations`

- Clave primaria: `id_evaluacion`
- Clave foránea: `id_desafio -> challenges.id_desafio`
- Escala sugerida: criterios de 0 a 5, puntaje total de 0 a 100

Pesos:

- Claridad del problema: 15%
- Usuario/stakeholder: 15%
- Impacto esperado: 20%
- Factibilidad técnica: 15%
- Disponibilidad de datos: 10%
- Valor formativo: 15%
- Potencial de continuidad: 10%

### Project

Representa un desafío seleccionado y convertido en proyecto. Incluye equipo, roles, problema asociado, alcance MVP, funcionalidades, tecnologías, entregables, repositorio, demo, riesgos y criterios de validación.

Tabla sugerida: `projects`

- Clave primaria: `id_proyecto`
- Clave foránea: `id_desafio -> challenges.id_desafio`
- Campos array: integrantes, funcionalidades, tecnologías, entregables y criterios de validación

### ContinuityEvaluation

Representa la revisión de continuidad de un proyecto. El puntaje total se calcula con `calculateContinuityEvaluationScore`.

Tabla sugerida: `continuity_evaluations`

- Clave primaria: `id_continuidad`
- Clave foránea: `id_proyecto -> projects.id_proyecto`
- Escala sugerida: criterios de 0 a 5, puntaje total de 0 a 100

Pesos:

- Usuario real interesado: 20%
- Impacto potencial: 10%
- Madurez técnica: 15%
- Documentación: 15%
- Factibilidad de escalamiento: 15%
- Alineamiento institucional: 5%
- Equipo disponible: 20%

### SolutionPortfolioItem

Representa una solución visible en el portafolio público o semipúblico. Incluye resumen, tipo, área, madurez, beneficiarios, funcionalidades, enlaces, responsable y potencial de transferencia.

Tabla sugerida: `solution_portfolio_items`

- Clave primaria: `id_solucion`
- Clave foránea: `id_proyecto -> projects.id_proyecto`
- Índices sugeridos: `estado_madurez`, `area_aplicacion`, `nivel_acceso`

## Reemplazo de mock data

1. Crear tablas con los campos equivalentes a las interfaces.
2. Mover `src/data/*.ts` a una capa de repositorios, por ejemplo `src/lib/repositories/challenges.ts`.
3. Implementar funciones como `listChallenges`, `createChallenge`, `listSolutions` y `listEvaluations`.
4. En Server Components, llamar a esos repositorios en vez de importar arreglos mock.
5. Para formularios, reemplazar `localStorage` por Server Actions o Route Handlers con validación.

## Supabase o PostgreSQL

Para Supabase, usar Row Level Security desde el inicio:

- Lectura pública solo para soluciones publicables.
- Escritura de desafíos con políticas controladas.
- Panel admin restringido a usuarios institucionales.
- Evaluaciones y continuidad solo para comité autorizado.

Para PostgreSQL directo, mantener una capa de acceso a datos y evitar inicializar clientes en scope global durante build. Crear los clientes dentro de funciones getter o repositorios lazy.
