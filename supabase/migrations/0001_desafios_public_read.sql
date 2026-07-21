-- Migración de referencia para habilitar la lectura pública de /desafios.
-- No se aplica automáticamente: revísala y ejecútala manualmente en el
-- proyecto Supabase (SQL editor o CLI) cuando corresponda.
--
-- Requisitos previos: la tabla `desafios` ya existe (usada hoy por el
-- formulario de /desafios/nuevo) con al menos las columnas de
-- src/lib/types.ts#Challenge.

-- 1. Columna de publicación explícita. Controla qué desafíos son visibles
--    en /desafios; nunca se activa automáticamente al postular.
alter table public.desafios
  add column if not exists publicado boolean not null default false;

-- 2. Si existen filas con estado_desafio = 'recibido' (valor usado antes de
--    esta integración y que no pertenece al enum EstadoDesafio), normalizar
--    a 'postulado'. Ejecutar solo tras confirmar que no rompe reportes
--    externos que dependan del valor anterior.
-- update public.desafios set estado_desafio = 'postulado' where estado_desafio = 'recibido';

-- 3. Habilitar RLS.
alter table public.desafios enable row level security;

-- 4. Inserción pública controlada: cualquiera puede postular, pero solo con
--    estado_desafio = 'postulado' y publicado = false. Evita que el
--    formulario público publique o cambie el estado de un desafío.
create policy "desafios_insert_publico_controlado"
  on public.desafios
  for insert
  to anon, authenticated
  with check (
    estado_desafio = 'postulado'
    and publicado = false
  );

-- 5. Lectura pública restringida a desafíos publicados. El propio RLS ya
--    evita exponer postulaciones no aprobadas; los campos sensibles
--    (proponente_contacto, restricciones_datos, observaciones, etc.) además
--    quedan excluidos a nivel de aplicación por
--    src/lib/repositories/challenges.ts, que solo selecciona columnas
--    públicas.
create policy "desafios_select_publicado"
  on public.desafios
  for select
  to anon, authenticated
  using (publicado = true);

-- Sin política de UPDATE/DELETE para anon/authenticated: solo un rol con
-- acceso administrativo (definido en una fase posterior, con autenticación
-- institucional) podrá marcar publicado = true o cambiar estado_desafio.
