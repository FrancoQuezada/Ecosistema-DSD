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

## Variables de entorno

El MVP no requiere variables de entorno. No se deben agregar secretos al repositorio.

Cuando se integre una base de datos, usar variables como:

```bash
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Las claves privadas o service-role deben vivir solo en el entorno del servidor.

## Despliegue sugerido

La aplicación es compatible con despliegue en Vercel o cualquier plataforma que soporte Next.js. Antes de producción:

1. Proteger `/admin/desafios` con autenticación.
2. Reemplazar mock data por repositorios reales.
3. Configurar políticas de acceso para datos sensibles.
4. Revisar textos institucionales y responsabilidades de contacto.
5. Validar accesibilidad, rendimiento y metadatos.

## Consideraciones para base de datos

- No inicializar clientes de base de datos en scope global durante `next build`.
- Centralizar acceso a datos en funciones de repositorio.
- Separar datos públicos del portafolio y datos internos de evaluación.
- Registrar auditoría básica para cambios de estado y decisiones del comité.
