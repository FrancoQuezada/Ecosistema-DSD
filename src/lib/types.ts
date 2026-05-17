export type TipoProponente =
  | "estudiante"
  | "academico"
  | "unidad_interna"
  | "socio_externo"
  | "otro";

export type NivelAccesoDatos =
  | "sin_datos"
  | "publico"
  | "interno"
  | "sensible"
  | "por_definir";

export type EstadoDesafio =
  | "postulado"
  | "en_revision"
  | "evaluado"
  | "priorizado"
  | "seleccionado"
  | "convertido_en_proyecto"
  | "cerrado";

export type EstadoProyecto =
  | "planificado"
  | "en_desarrollo"
  | "validacion"
  | "piloto"
  | "adopcion"
  | "transferencia"
  | "cierre_documentado";

export type EstadoMadurezSolucion =
  | "prototipo"
  | "mvp_validado"
  | "piloto"
  | "adoptada"
  | "transferible";

export type DecisionSugerida =
  | "seleccionar"
  | "reformular"
  | "mantener_en_banco"
  | "descartar";

export type DecisionContinuidad =
  | "laboratorio"
  | "piloto"
  | "adopcion"
  | "transferencia"
  | "cierre_documentado";

export interface Challenge {
  id_desafio: string;
  nombre_desafio: string;
  origen_desafio: string;
  proponente_nombre: string;
  proponente_contacto: string;
  unidad_organizacion: string;
  tipo_proponente: TipoProponente;
  fecha_postulacion: string;
  descripcion_problema: string;
  necesidad_oportunidad: string;
  usuario_objetivo: string;
  stakeholder_principal: string;
  sponsor_academico: string;
  tipo_solucion_esperada: string;
  area_aplicacion: string;
  datos_disponibles: string;
  nivel_acceso_datos: NivelAccesoDatos;
  restricciones_datos: string;
  impacto_esperado: string;
  beneficiarios: string;
  factibilidad_preliminar: string;
  riesgos_restricciones: string;
  horizonte_desarrollo: string;
  potencial_continuidad: string;
  observaciones: string;
  estado_desafio: EstadoDesafio;
}

export interface ChallengeEvaluation {
  id_evaluacion: string;
  id_desafio: string;
  evaluador: string;
  fecha_evaluacion: string;
  claridad_problema_puntaje: number;
  usuario_stakeholder_puntaje: number;
  impacto_esperado_puntaje: number;
  factibilidad_tecnica_puntaje: number;
  disponibilidad_datos_puntaje: number;
  valor_formativo_puntaje: number;
  potencial_continuidad_puntaje: number;
  comentarios_generales: string;
  puntaje_total: number;
  decision_sugerida: DecisionSugerida;
}

export interface Project {
  id_proyecto: string;
  id_desafio: string;
  nombre_proyecto: string;
  equipo: string;
  integrantes: string[];
  academico_sponsor: string;
  lider_tecnico: string;
  product_owner: string;
  usuario_objetivo: string;
  problema_asociado: string;
  objetivo_solucion: string;
  alcance_mvp: string;
  funcionalidades_principales: string[];
  tecnologias_tentativas: string[];
  datos_utilizados: string;
  entregables: string[];
  repositorio_url: string;
  demo_url: string;
  estado_proyecto: EstadoProyecto;
  riesgos_tecnicos: string;
  criterios_validacion: string[];
  proximos_pasos: string;
}

export interface ContinuityEvaluation {
  id_continuidad: string;
  id_proyecto: string;
  fecha_revision: string;
  evaluador_comite: string;
  estado_actual: EstadoProyecto;
  usuario_real_interesado_puntaje: number;
  impacto_potencial_puntaje: number;
  madurez_tecnica_puntaje: number;
  documentacion_puntaje: number;
  factibilidad_escalamiento_puntaje: number;
  alineamiento_institucional_puntaje: number;
  equipo_disponible_puntaje: number;
  puntaje_total_continuidad: number;
  criterios_habilitantes: string[];
  decision_continuidad: DecisionContinuidad;
  modalidad_continuidad: string;
  responsable_siguiente_etapa: string;
  riesgos_continuidad: string;
  acciones_requeridas: string[];
}

export interface SolutionPortfolioItem {
  id_solucion: string;
  id_proyecto: string;
  nombre_solucion: string;
  resumen_publico: string;
  tipo_solucion: string;
  area_aplicacion: string;
  estado_madurez: EstadoMadurezSolucion;
  usuarios_beneficiarios: string[];
  funcionalidades_clave: string[];
  imagen_demo: string;
  demo_url: string;
  repositorio_url: string;
  responsable_actual: string;
  nivel_acceso: string;
  fecha_actualizacion: string;
  potencial_transferencia: string;
  contacto: string;
}
