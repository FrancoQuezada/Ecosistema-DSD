# Despliegue

## Desarrollo

```bash
npm install
npm run dev
```

## Validación local

```bash
npm run lint
npm run build
```

El build no debe fallar solo porque Supabase no esté configurado o no sea
accesible: las rutas y repositorios detectan la ausencia de variables y
responden con un estado controlado en vez de lanzar una excepción durante
`next build` o en tiempo de ejecución.

## Variables de entorno

Variables públicas (expuestas al navegador, prefijo `NEXT_PUBLIC_`):

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Obligatorias para que `/desafios/nuevo` pueda registrar postulaciones y para
que `/desafios` pueda leer el banco público desde Supabase. Sin ellas, ambas
rutas siguen funcionando pero muestran un estado de "Supabase no
configurado" en vez de fallar.

Secretos exclusivos del servidor (nunca deben llevar prefijo
`NEXT_PUBLIC_` ni ejecutarse en el navegador):

```bash
RESEND_API_KEY=
RESEND_FROM_EMAIL=
```

Opcionales: solo habilitan el envío del correo de confirmación desde
`src/app/api/desafios/confirmacion/route.ts`. Si faltan, o si Resend falla,
la postulación queda registrada igual en Supabase; el envío de correo es
best-effort y su resultado no bloquea ni condiciona la confirmación visible
al usuario.

No usar la service-role key de Supabase en ningún código que se ejecute en
el navegador. La lectura pública de `/desafios` y la escritura de
`/desafios/nuevo` usan únicamente `NEXT_PUBLIC_SUPABASE_ANON_KEY`, tanto en
el cliente de navegador (`src/lib/supabase/client.ts`) como en el cliente
server-side de solo lectura (`src/lib/supabase/serverClient.ts`). Esto
mantiene ambos accesos sujetos a las políticas RLS de la tabla `desafios`.

## Vercel

1. Abrir el proyecto en Vercel.
2. Ir a Project Settings > Environment Variables.
3. Agregar las variables necesarias según el punto anterior.
4. **Redeployar**: Vercel no recarga variables de entorno en un deployment ya
   construido; cualquier cambio de variables requiere un nuevo build/deploy
   para tomar efecto.

## Despliegue sugerido

La aplicación es compatible con despliegue en Vercel o cualquier plataforma
que soporte Next.js. Antes de producción:

1. Proteger `/admin/desafios` con autenticación.
2. Reemplazar el resto de los mocks (evaluaciones, proyectos, portafolio) por
   repositorios reales.
3. Configurar y revisar las políticas RLS de Supabase (ver
   `supabase/migrations/0001_desafios_public_read.sql`).
4. Revisar textos institucionales y responsabilidades de contacto.
5. Validar accesibilidad, rendimiento y metadatos.

## Consideraciones para base de datos

- No inicializar clientes de base de datos en scope global durante
  `next build`. Los clientes de Supabase se crean de forma lazy (dentro de
  una función getter), no en el top level del módulo.
- Centralizar acceso a datos en funciones de repositorio
  (`src/lib/repositories/*.ts`), nunca directamente desde componentes
  visuales.
- Tanto la lectura pública de `/desafios` como la escritura de
  `/desafios/nuevo` dependen de que existan las políticas RLS descritas en
  `supabase/migrations/0001_desafios_public_read.sql`. Sin RLS habilitado y
  sin la política de `select`, la consulta pública puede fallar o devolver
  datos no autorizados según la configuración por defecto del proyecto
  Supabase.
- Separar datos públicos del portafolio y datos internos de evaluación.
- Registrar auditoría básica para cambios de estado y decisiones del comité.
