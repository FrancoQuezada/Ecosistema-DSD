---
title: "Ambiente Integrado de Desarrollo"
slug: "taller-ambiente-desarrollo"
section: "taller"
order: 4
summary: "Herramientas y flujo de trabajo técnico para construir MVPs digitales con IA, GitHub, base de datos y despliegue."
---

# Ambiente integrado de desarrollo

El taller debe enseñar tempranamente un ambiente moderno de desarrollo para soluciones digitales. El objetivo es que los estudiantes trabajen desde el inicio con herramientas reales y un flujo profesional: editor, GitHub, asistente o agente de IA, base de datos, despliegue y documentación.

## Componentes del ambiente

| Componente | Función dentro del taller |
|---|---|
| Editor o IDE | Espacio principal para escribir, revisar y organizar el código. Se sugiere VS Code. |
| Git | Control de versiones y registro de cambios. |
| GitHub | Repositorio, colaboración, evidencia de avance y trazabilidad. |
| Asistente o agente IA | Apoyo para diseño, programación, depuración, documentación y pruebas. |
| Framework web | Base para construir la aplicación digital. |
| Base de datos | Persistencia y estructura de información. |
| Variables de entorno | Configuración segura de credenciales y servicios. |
| Plataforma de despliegue | Demo accesible para usuarios, docentes y evaluadores. |
| README | Documentación viva del proyecto. |
| Bitácora de IA | Registro del uso de IA y revisión humana. |

## Flujo mínimo de trabajo

El flujo recomendado para cada equipo es:

1. Abrir el proyecto en el editor.
2. Seleccionar una tarea del backlog.
3. Formular la tarea de manera clara.
4. Usar IA para apoyar diseño, código o depuración.
5. Revisar y entender la respuesta de IA.
6. Modificar el código según el criterio del equipo.
7. Probar localmente.
8. Registrar errores o decisiones relevantes.
9. Hacer commit con un mensaje claro.
10. Subir cambios a GitHub.
11. Desplegar o verificar demo.
12. Actualizar documentación si corresponde.

## Uso del editor

El editor debe ser el espacio donde el equipo:

- navega la estructura del proyecto;
- edita componentes;
- revisa errores;
- ejecuta comandos;
- consulta cambios;
- interactúa con extensiones o asistentes de IA;
- mantiene consistencia del código.

Se sugiere enseñar una estructura mínima de trabajo en VS Code:

- explorador de archivos;
- terminal integrada;
- control de versiones;
- extensiones básicas;
- formato de código;
- búsqueda global;
- revisión de cambios.

## Uso de Git y GitHub

GitHub no debe usarse solo para guardar archivos al final. Debe funcionar como evidencia de trabajo semanal.

Buenas prácticas mínimas:

- commits pequeños;
- mensajes claros;
- no subir secretos;
- actualizar README;
- documentar instalación;
- mantener estructura ordenada;
- usar issues o lista de tareas si corresponde;
- evitar grandes bloques de código no revisado.

## Uso de IA como asistente de desarrollo

La IA debe incorporarse desde la semana 3 como parte del flujo de construcción.

Puede apoyar en:

- descomponer tareas;
- proponer estructura de componentes;
- generar código inicial;
- explicar errores;
- depurar;
- crear datos mock;
- mejorar documentación;
- escribir pruebas;
- comparar alternativas técnicas;
- preparar demos.

No debe usarse para:

- copiar código sin entenderlo;
- introducir dependencias innecesarias;
- resolver decisiones críticas sin revisión humana;
- reemplazar la documentación del equipo;
- ocultar errores de funcionamiento;
- generar soluciones sobredimensionadas.

## Bitácora de IA

Cada equipo debe mantener una bitácora mínima con:

- fecha;
- tarea abordada;
- herramienta usada;
- prompt o descripción del pedido;
- respuesta relevante;
- decisión tomada;
- qué se aceptó;
- qué se modificó;
- qué se descartó;
- riesgos o errores detectados;
- commit o evidencia asociada.

## Base de datos

La base de datos debe incorporarse una vez que la arquitectura esté definida, pero las necesidades de información deben identificarse desde las primeras semanas.

Los estudiantes deben distinguir entre:

- datos mock;
- datos simulados;
- datos reales;
- datos personales;
- datos sensibles;
- datos públicos;
- datos internos;
- datos que no deberían capturarse.

## Despliegue temprano

El despliegue no debe quedar para el final. Desde el primer tercio del curso debería existir una demo simple o una versión reproducible.

El objetivo del despliegue temprano es:

- detectar problemas técnicos antes del cierre;
- mostrar avance real;
- facilitar feedback;
- preparar la demo final;
- documentar configuración;
- probar la solución fuera del computador del equipo.

## Documentación mínima del ambiente

Cada repositorio debe incluir un README con:

- nombre del proyecto;
- descripción breve;
- problema o desafío asociado;
- solución propuesta;
- integrantes y roles;
- stack utilizado;
- instrucciones de instalación;
- variables de entorno requeridas;
- comandos principales;
- enlace a demo, si existe;
- estado actual;
- funcionalidades implementadas;
- funcionalidades pendientes;
- registro resumido de decisiones importantes.

## Evidencia esperada desde las primeras semanas

| Semana | Evidencia técnica mínima |
|---:|---|
| 2 | Repositorio creado, README inicial y primer commit |
| 3 | Estructura base del proyecto y primer uso documentado de IA |
| 4 | Prototipo navegable o interfaz inicial |
| 5 | Arquitectura definida y ambiente documentado |
| 6 | Modelo de datos y conexión inicial con datos |
| 8 | Demo alpha funcional |
| 12 | MVP beta validado |
| 14 | MVP desplegado o demo reproducible con documentación |
| 16 | Demo pública y repositorio final |
