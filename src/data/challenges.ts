import type { Challenge, ChallengeEvaluation } from "@/lib/types";
import { calculateChallengeEvaluationScore } from "@/lib/scoring";

export const challenges: Challenge[] = [
  {
    id_desafio: "DES-2026-001",
    nombre_desafio: "Seguimiento de solicitudes internas de mejora operacional",
    origen_desafio: "Unidad de Gestión de Procesos",
    proponente_nombre: "Carolina Rojas",
    proponente_contacto: "carolina.rojas@usach.cl",
    unidad_organizacion: "Departamento de Ingeniería Industrial",
    tipo_proponente: "unidad_interna",
    fecha_postulacion: "2026-03-18",
    descripcion_problema:
      "Las solicitudes de mejora llegan por correos, planillas y conversaciones, lo que dificulta priorizar, asignar responsables y cerrar aprendizajes.",
    necesidad_oportunidad:
      "Centralizar la entrada, trazabilidad y priorización de solicitudes para mejorar tiempos de respuesta y visibilidad directiva.",
    usuario_objetivo:
      "Coordinadores de unidades, equipos administrativos y jefaturas académicas.",
    stakeholder_principal: "Jefatura administrativa departamental",
    sponsor_academico: "Prof. Daniela Soto",
    tipo_solucion_esperada:
      "Aplicación web de gestión de flujo y tablero de seguimiento.",
    area_aplicacion: "Gestión operacional universitaria",
    datos_disponibles:
      "Planillas históricas de solicitudes, categorías de atención y responsables por unidad.",
    nivel_acceso_datos: "interno",
    restricciones_datos:
      "Se deben anonimizar antecedentes personales y separar datos sensibles de funcionarios.",
    impacto_esperado:
      "Reducir tiempos de coordinación, evitar duplicidad de requerimientos y generar evidencia para mejora continua.",
    beneficiarios:
      "Equipos administrativos, académicos coordinadores y usuarios internos del departamento.",
    factibilidad_preliminar:
      "Alta; el proceso está identificado y puede modelarse con datos existentes.",
    riesgos_restricciones:
      "Adopción desigual entre unidades y necesidad de definir responsables de actualización.",
    horizonte_desarrollo: "Un semestre con validación incremental.",
    potencial_continuidad:
      "Puede escalar a otras unidades de la facultad si el tablero resulta útil.",
    observaciones:
      "Requiere acuerdo mínimo de categorías y estados antes de prototipar.",
    estado_desafio: "priorizado",
  },
  {
    id_desafio: "DES-2026-002",
    nombre_desafio: "Mapa de oportunidades de práctica y memoria",
    origen_desafio: "Coordinación de Vinculación con el Medio",
    proponente_nombre: "Ignacio Muñoz",
    proponente_contacto: "ignacio.munoz@usach.cl",
    unidad_organizacion: "Vinculación con el Medio",
    tipo_proponente: "academico",
    fecha_postulacion: "2026-04-02",
    descripcion_problema:
      "Las oportunidades externas para estudiantes se registran de forma dispersa y no siempre se conectan con líneas académicas, competencias o disponibilidad de docentes.",
    necesidad_oportunidad:
      "Crear una vista unificada que permita publicar, filtrar y relacionar oportunidades con perfiles de estudiantes y sponsors académicos.",
    usuario_objetivo:
      "Estudiantes de pregrado, académicos patrocinantes y organizaciones colaboradoras.",
    stakeholder_principal: "Coordinación de Vinculación con el Medio",
    sponsor_academico: "Prof. Matías Araya",
    tipo_solucion_esperada:
      "Portal de oportunidades con filtros, ficha de organización y gestión de postulaciones inicial.",
    area_aplicacion: "Docencia y vinculación externa",
    datos_disponibles:
      "Catastro de organizaciones, ofertas históricas y líneas de interés académico.",
    nivel_acceso_datos: "interno",
    restricciones_datos:
      "No publicar contactos personales sin autorización. Validar mensajes con la unidad responsable.",
    impacto_esperado:
      "Mejorar la asignación de estudiantes a desafíos reales y fortalecer relaciones con socios externos.",
    beneficiarios:
      "Estudiantes, académicos, empleadores y organizaciones colaboradoras.",
    factibilidad_preliminar:
      "Media; requiere ordenar fuentes y definir criterios de publicación.",
    riesgos_restricciones:
      "Mantención del catálogo y calidad variable de la información recibida.",
    horizonte_desarrollo: "Prototipo funcional en ocho a diez semanas.",
    potencial_continuidad:
      "Alto si se conecta con procesos regulares de prácticas, memorias y talleres.",
    observaciones:
      "Conviene partir con un subconjunto de organizaciones frecuentes.",
    estado_desafio: "en_revision",
  },
  {
    id_desafio: "DES-2026-003",
    nombre_desafio: "Panel de indicadores para proyectos de innovación docente",
    origen_desafio: "Equipo de Innovación Docente",
    proponente_nombre: "Paula Herrera",
    proponente_contacto: "paula.herrera@usach.cl",
    unidad_organizacion: "Área de Docencia",
    tipo_proponente: "unidad_interna",
    fecha_postulacion: "2026-04-16",
    descripcion_problema:
      "Los proyectos de innovación docente se reportan en documentos aislados, sin una vista ejecutiva sobre avance, resultados, evidencia y continuidad.",
    necesidad_oportunidad:
      "Diseñar un panel que consolide iniciativas, hitos, evidencias y resultados esperados para apoyar decisiones académicas.",
    usuario_objetivo:
      "Comités docentes, coordinadores de asignatura y equipos de innovación.",
    stakeholder_principal: "Comité de Docencia",
    sponsor_academico: "Prof. Verónica Lagos",
    tipo_solucion_esperada:
      "Dashboard analítico con carga simple de evidencias y visualización de indicadores.",
    area_aplicacion: "Gestión académica",
    datos_disponibles:
      "Informes de proyectos, rúbricas, indicadores de participación y encuestas.",
    nivel_acceso_datos: "sensible",
    restricciones_datos:
      "Datos de estudiantes deben agregarse y tratarse con resguardos institucionales.",
    impacto_esperado:
      "Aumentar trazabilidad de resultados docentes y apoyar decisiones de continuidad.",
    beneficiarios:
      "Equipos docentes, dirección académica y estudiantes beneficiados indirectamente.",
    factibilidad_preliminar:
      "Media; depende de normalizar indicadores y definir permisos.",
    riesgos_restricciones:
      "Disponibilidad parcial de datos y necesidad de evitar comparaciones fuera de contexto.",
    horizonte_desarrollo: "MVP semestral con piloto en tres asignaturas.",
    potencial_continuidad:
      "Puede convertirse en repositorio institucional de innovación docente.",
    observaciones:
      "Requiere criterios de visualización responsables antes de abrir acceso.",
    estado_desafio: "seleccionado",
  },
  {
    id_desafio: "DES-2026-004",
    nombre_desafio: "Asistente para documentar aprendizajes de prototipos",
    origen_desafio: "Laboratorio de Continuidad",
    proponente_nombre: "Equipo Laboratorio DSD",
    proponente_contacto: "laboratorio.dsd@usach.cl",
    unidad_organizacion: "Laboratorio de Continuidad",
    tipo_proponente: "academico",
    fecha_postulacion: "2026-05-05",
    descripcion_problema:
      "Los prototipos desarrollados en cursos pierden trazabilidad cuando no existe documentación mínima de decisiones, validaciones y próximos pasos.",
    necesidad_oportunidad:
      "Guiar a equipos estudiantiles para cerrar cada ciclo con documentación reutilizable por nuevos equipos o por la unidad mandante.",
    usuario_objetivo: "Equipos de estudiantes y académicos sponsors.",
    stakeholder_principal: "Comité de Gobernanza DSD",
    sponsor_academico: "Prof. Andrés Vidal",
    tipo_solucion_esperada:
      "Herramienta web de checklist, bitácora y generación de ficha de cierre.",
    area_aplicacion: "Gestión de conocimiento",
    datos_disponibles:
      "Plantillas de cierre, rúbricas de evaluación y ejemplos de entregables.",
    nivel_acceso_datos: "publico",
    restricciones_datos:
      "Evitar incorporar datos sensibles en documentos públicos de cierre.",
    impacto_esperado:
      "Mejorar la continuidad entre talleres, laboratorio, pilotos y portafolio.",
    beneficiarios:
      "Estudiantes, académicos, unidades mandantes y nuevos equipos de desarrollo.",
    factibilidad_preliminar:
      "Alta; puede partir con plantillas estructuradas y exportación simple.",
    riesgos_restricciones:
      "Sobrecarga de registro para estudiantes si el flujo no es simple.",
    horizonte_desarrollo: "Seis semanas para prototipo validable.",
    potencial_continuidad:
      "Alto; habilita mejores decisiones de continuidad y transferencia.",
    observaciones:
      "Debe integrarse al cierre de asignaturas sin agregar burocracia.",
    estado_desafio: "postulado",
  },
];

const seguimientoEvaluation = {
  id_evaluacion: "EVAL-2026-001",
  id_desafio: "DES-2026-001",
  evaluador: "Comité DSD",
  fecha_evaluacion: "2026-03-28",
  claridad_problema_puntaje: 5,
  usuario_stakeholder_puntaje: 5,
  impacto_esperado_puntaje: 4,
  factibilidad_tecnica_puntaje: 4,
  disponibilidad_datos_puntaje: 4,
  valor_formativo_puntaje: 5,
  potencial_continuidad_puntaje: 4,
  comentarios_generales:
    "Buen calce con taller semestral y alta disponibilidad de usuarios internos para validar.",
  decision_sugerida: "seleccionar",
} satisfies Omit<ChallengeEvaluation, "puntaje_total">;

const mapaEvaluation = {
  id_evaluacion: "EVAL-2026-002",
  id_desafio: "DES-2026-002",
  evaluador: "Comité DSD",
  fecha_evaluacion: "2026-04-12",
  claridad_problema_puntaje: 4,
  usuario_stakeholder_puntaje: 4,
  impacto_esperado_puntaje: 5,
  factibilidad_tecnica_puntaje: 3,
  disponibilidad_datos_puntaje: 3,
  valor_formativo_puntaje: 5,
  potencial_continuidad_puntaje: 5,
  comentarios_generales:
    "Requiere acotar alcance inicial y acordar gobernanza de actualización.",
  decision_sugerida: "reformular",
} satisfies Omit<ChallengeEvaluation, "puntaje_total">;

const panelEvaluation = {
  id_evaluacion: "EVAL-2026-003",
  id_desafio: "DES-2026-003",
  evaluador: "Comité DSD",
  fecha_evaluacion: "2026-04-25",
  claridad_problema_puntaje: 4,
  usuario_stakeholder_puntaje: 5,
  impacto_esperado_puntaje: 5,
  factibilidad_tecnica_puntaje: 3,
  disponibilidad_datos_puntaje: 3,
  valor_formativo_puntaje: 4,
  potencial_continuidad_puntaje: 5,
  comentarios_generales:
    "Seleccionable con restricciones de datos y piloto controlado.",
  decision_sugerida: "seleccionar",
} satisfies Omit<ChallengeEvaluation, "puntaje_total">;

export const challengeEvaluations: ChallengeEvaluation[] = [
  {
    ...seguimientoEvaluation,
    puntaje_total: calculateChallengeEvaluationScore(seguimientoEvaluation),
  },
  {
    ...mapaEvaluation,
    puntaje_total: calculateChallengeEvaluationScore(mapaEvaluation),
  },
  {
    ...panelEvaluation,
    puntaje_total: calculateChallengeEvaluationScore(panelEvaluation),
  },
];
