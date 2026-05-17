import type { SolutionPortfolioItem } from "@/lib/types";

export const solutions: SolutionPortfolioItem[] = [
  {
    id_solucion: "SOL-2026-001",
    id_proyecto: "PRO-2026-001",
    nombre_solucion: "Tablero de Solicitudes DII",
    resumen_publico:
      "MVP para registrar, priorizar y monitorear solicitudes internas de mejora operacional con estados, responsables y métricas de cierre.",
    tipo_solucion: "Aplicación web de gestión",
    area_aplicacion: "Gestión operacional universitaria",
    estado_madurez: "mvp_validado",
    usuarios_beneficiarios: [
      "Coordinadores de unidad",
      "Jefaturas administrativas",
      "Equipos internos",
    ],
    funcionalidades_clave: [
      "Ingreso estructurado de solicitudes",
      "Priorización por impacto y urgencia",
      "Tablero de seguimiento por estado",
    ],
    imagen_demo: "/portfolio/tablero-solicitudes.svg",
    demo_url: "#",
    repositorio_url: "#",
    responsable_actual: "Laboratorio de Continuidad DSD",
    nivel_acceso: "Interno",
    fecha_actualizacion: "2026-05-01",
    potencial_transferencia:
      "Replicable a otras unidades académicas con adaptación de categorías.",
    contacto: "laboratorio.dsd@usach.cl",
  },
  {
    id_solucion: "SOL-2026-002",
    id_proyecto: "PRO-2026-002",
    nombre_solucion: "Mapa de Oportunidades",
    resumen_publico:
      "Prototipo para visualizar desafíos, prácticas y memorias disponibles, conectando organizaciones, líneas académicas y perfiles estudiantiles.",
    tipo_solucion: "Portal de vinculación",
    area_aplicacion: "Docencia y vinculación externa",
    estado_madurez: "prototipo",
    usuarios_beneficiarios: [
      "Estudiantes",
      "Académicos sponsors",
      "Organizaciones colaboradoras",
    ],
    funcionalidades_clave: [
      "Catálogo filtrable de oportunidades",
      "Ficha de organización",
      "Registro inicial de interés",
    ],
    imagen_demo: "/portfolio/mapa-oportunidades.svg",
    demo_url: "#",
    repositorio_url: "#",
    responsable_actual: "Coordinación de Vinculación con el Medio",
    nivel_acceso: "Público con administración interna",
    fecha_actualizacion: "2026-04-22",
    potencial_transferencia:
      "Puede integrarse a procesos regulares de práctica y memoria.",
    contacto: "vinculacion.dii@usach.cl",
  },
  {
    id_solucion: "SOL-2026-003",
    id_proyecto: "PRO-2026-003",
    nombre_solucion: "Bitácora de Prototipos",
    resumen_publico:
      "Herramienta de cierre para documentar decisiones, validaciones, evidencias y próximos pasos de prototipos desarrollados en cursos o laboratorio.",
    tipo_solucion: "Gestión de conocimiento",
    area_aplicacion: "Continuidad y transferencia",
    estado_madurez: "piloto",
    usuarios_beneficiarios: [
      "Equipos estudiantiles",
      "Académicos",
      "Unidades mandantes",
    ],
    funcionalidades_clave: [
      "Checklist de cierre",
      "Registro de validaciones",
      "Ficha transferible del proyecto",
    ],
    imagen_demo: "/portfolio/bitacora-prototipos.svg",
    demo_url: "#",
    repositorio_url: "#",
    responsable_actual: "Comité de Gobernanza DSD",
    nivel_acceso: "Interno",
    fecha_actualizacion: "2026-05-08",
    potencial_transferencia:
      "Base para sostener continuidad entre semestres y documentar cierres.",
    contacto: "comite.dsd@usach.cl",
  },
];
