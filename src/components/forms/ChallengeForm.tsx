"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import type { Challenge, NivelAccesoDatos, TipoProponente } from "@/lib/types";

function getValue(formData: FormData, field: keyof Challenge) {
  return formData.get(field)?.toString().trim() ?? "";
}

function FieldHelp({ children }: { children?: string }) {
  if (!children) {
    return null;
  }

  return (
    <span className="mt-1 block text-xs leading-5 text-slate-500">
      {children}
    </span>
  );
}

function FieldLabel({
  label,
  required,
}: {
  label: string;
  required?: boolean;
}) {
  return (
    <span className="text-sm font-semibold text-[#17212b]">
      {label}
      {required ? <span className="text-[#0f766e]"> *</span> : null}
    </span>
  );
}

function InputField({
  label,
  name,
  type = "text",
  required,
  placeholder,
  helper,
}: {
  label: string;
  name: keyof Challenge;
  type?: "text" | "email";
  required?: boolean;
  placeholder?: string;
  helper?: string;
}) {
  return (
    <label className="block">
      <FieldLabel label={label} required={required} />
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-[#17212b] outline-none transition placeholder:text-slate-400 focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/10"
      />
      <FieldHelp>{helper}</FieldHelp>
    </label>
  );
}

function TextAreaField({
  label,
  name,
  required,
  rows = 4,
  placeholder,
  helper,
}: {
  label: string;
  name: keyof Challenge;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  helper?: string;
}) {
  return (
    <label className="block">
      <FieldLabel label={label} required={required} />
      <textarea
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm leading-6 text-[#17212b] outline-none transition placeholder:text-slate-400 focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/10"
      />
      <FieldHelp>{helper}</FieldHelp>
    </label>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
  helper,
}: {
  label: string;
  name: keyof Challenge;
  required?: boolean;
  options: Array<{ value: string; label: string }>;
  helper?: string;
}) {
  return (
    <label className="block">
      <FieldLabel label={label} required={required} />
      <select
        name={name}
        required={required}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-[#17212b] outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/10"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <FieldHelp>{helper}</FieldHelp>
    </label>
  );
}

function FormSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="rounded-lg border border-slate-200 bg-slate-50/70 p-5 md:p-6">
      <legend className="px-1 text-lg font-semibold text-[#17212b]">
        {title}
      </legend>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-6 grid gap-5 md:grid-cols-2">{children}</div>
    </fieldset>
  );
}

type DesafioInsert = Omit<Challenge, "id_desafio" | "estado_desafio"> & {
  estado_desafio: "recibido";
};

export function ChallengeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const supabase = getSupabaseBrowserClient();

    setSuccessMessage(null);
    setErrorMessage(null);

    if (!supabase) {
      setErrorMessage(
        "No se pudo conectar con Supabase. Revisa las variables de entorno.",
      );
      return;
    }

    const challenge: DesafioInsert = {
      nombre_desafio: getValue(formData, "nombre_desafio"),
      origen_desafio: getValue(formData, "origen_desafio"),
      proponente_nombre: getValue(formData, "proponente_nombre"),
      proponente_contacto: getValue(formData, "proponente_contacto"),
      unidad_organizacion: getValue(formData, "unidad_organizacion"),
      tipo_proponente: getValue(
        formData,
        "tipo_proponente",
      ) as TipoProponente,
      fecha_postulacion: new Date().toISOString().slice(0, 10),
      descripcion_problema: getValue(formData, "descripcion_problema"),
      necesidad_oportunidad: getValue(formData, "necesidad_oportunidad"),
      usuario_objetivo: getValue(formData, "usuario_objetivo"),
      stakeholder_principal: getValue(formData, "stakeholder_principal"),
      sponsor_academico: getValue(formData, "sponsor_academico"),
      tipo_solucion_esperada: getValue(
        formData,
        "tipo_solucion_esperada",
      ),
      area_aplicacion: getValue(formData, "area_aplicacion"),
      datos_disponibles: getValue(formData, "datos_disponibles"),
      nivel_acceso_datos: getValue(
        formData,
        "nivel_acceso_datos",
      ) as NivelAccesoDatos,
      restricciones_datos: getValue(formData, "restricciones_datos"),
      impacto_esperado: getValue(formData, "impacto_esperado"),
      beneficiarios: getValue(formData, "beneficiarios"),
      factibilidad_preliminar: getValue(formData, "factibilidad_preliminar"),
      riesgos_restricciones: getValue(formData, "riesgos_restricciones"),
      horizonte_desarrollo: getValue(formData, "horizonte_desarrollo"),
      potencial_continuidad: getValue(formData, "potencial_continuidad"),
      observaciones: getValue(formData, "observaciones"),
      estado_desafio: "recibido",
    };

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("desafios").insert(challenge);

      if (error) {
        setErrorMessage(
          "No fue posible enviar el desafío. Intenta nuevamente o contacta al equipo del ecosistema.",
        );
        console.error("Error al insertar desafío en Supabase", error);
        return;
      }

      setSuccessMessage(
        "Desafío enviado correctamente. Quedó registrado con estado recibido para revisión inicial.",
      );
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setErrorMessage(
        "No fue posible enviar el desafío. Intenta nuevamente o contacta al equipo del ecosistema.",
      );
      console.error("Error inesperado al insertar desafío en Supabase", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-8">
      {successMessage ? (
        <div
          className="rounded-lg border border-teal-200 bg-teal-50 p-5"
          role="status"
        >
          <p className="font-semibold text-[#0f766e]">
            Desafío recibido para revisión inicial
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            {successMessage}
          </p>
        </div>
      ) : null}

      {errorMessage ? (
        <div
          className="rounded-lg border border-red-200 bg-red-50 p-5"
          role="alert"
        >
          <p className="font-semibold text-red-800">No se pudo enviar</p>
          <p className="mt-2 text-sm leading-6 text-red-700">{errorMessage}</p>
        </div>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 md:p-8"
      >
        <div className="border-b border-slate-200 pb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-[#17212b]">
            Formulario de postulación
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Completa los antecedentes necesarios para evaluar claridad del
            problema, usuarios, datos, impacto, factibilidad y potencial de
            continuidad. Los campos marcados con * son obligatorios.
          </p>
        </div>

        <FormSection
          title="Identificación del desafío"
          description="Resume la oportunidad y define el tipo de solución digital esperada."
        >
          <InputField
            label="Nombre del desafío"
            name="nombre_desafio"
            required
            placeholder="Ej. Seguimiento de solicitudes internas"
            helper="Usa un nombre breve y específico."
          />
          <InputField
            label="Origen del desafío"
            name="origen_desafio"
            required
            placeholder="Unidad, curso, socio o iniciativa"
          />
          <InputField
            label="Área de aplicación"
            name="area_aplicacion"
            required
            placeholder="Gestión académica, operaciones, vinculación, etc."
          />
          <InputField
            label="Tipo de solución esperada"
            name="tipo_solucion_esperada"
            required
            placeholder="Aplicación web, dashboard, simulador, IA, etc."
          />
        </FormSection>

        <FormSection
          title="Proponente y organización"
          description="Identifica a la persona o equipo que puede entregar contexto y participar en validaciones."
        >
          <InputField
            label="Nombre del proponente"
            name="proponente_nombre"
            required
          />
          <InputField
            label="Contacto"
            name="proponente_contacto"
            type="email"
            required
            helper="Correo de contacto para coordinación inicial."
          />
          <InputField
            label="Unidad u organización"
            name="unidad_organizacion"
            required
          />
          <SelectField
            label="Tipo de proponente"
            name="tipo_proponente"
            required
            options={[
              { value: "unidad_interna", label: "Unidad interna" },
              { value: "academico", label: "Académico/a" },
              { value: "estudiante", label: "Estudiante" },
              { value: "socio_externo", label: "Partner externo" },
              { value: "otro", label: "Otro" },
            ]}
          />
          <InputField
            label="Sponsor académico"
            name="sponsor_academico"
            placeholder="Si existe"
            helper="Opcional, pero útil para desafíos asociados a docencia o investigación."
          />
        </FormSection>

        <FormSection
          title="Descripción del problema"
          description="Describe el problema de forma concreta y evita partir por una solución predeterminada."
        >
          <div className="md:col-span-2">
            <TextAreaField
              label="Descripción del problema"
              name="descripcion_problema"
              required
              placeholder="Describe qué ocurre, a quién afecta, dónde aparece y por qué importa."
              helper="Mientras más claro sea el problema, mejor se puede priorizar."
            />
          </div>
          <div className="md:col-span-2">
            <TextAreaField
              label="Necesidad u oportunidad"
              name="necesidad_oportunidad"
              required
              placeholder="Explica qué cambio se busca habilitar o qué oportunidad se quiere aprovechar."
            />
          </div>
          <div className="md:col-span-2">
            <TextAreaField
              label="Riesgos o restricciones"
              name="riesgos_restricciones"
              placeholder="Restricciones de tiempo, operación, normativa, adopción o capacidades disponibles."
            />
          </div>
        </FormSection>

        <FormSection
          title="Usuarios, datos e impacto"
          description="Indica quién usará o validará la solución, qué datos existen y qué impacto se espera."
        >
          <InputField
            label="Usuario objetivo"
            name="usuario_objetivo"
            required
            placeholder="Personas o roles que usarían la solución"
          />
          <InputField
            label="Stakeholder principal"
            name="stakeholder_principal"
            required
            placeholder="Unidad o persona que toma decisiones sobre el problema"
          />
          <div className="md:col-span-2">
            <TextAreaField
              label="Datos disponibles"
              name="datos_disponibles"
              placeholder="Fuentes, formatos, frecuencia, responsables y calidad preliminar."
            />
          </div>
          <SelectField
            label="Nivel de acceso a datos"
            name="nivel_acceso_datos"
            required
            options={[
              { value: "por_definir", label: "Por definir" },
              { value: "sin_datos", label: "Sin datos disponibles aún" },
              { value: "publico", label: "Público" },
              { value: "interno", label: "Interno" },
              { value: "sensible", label: "Sensible" },
            ]}
          />
          <TextAreaField
            label="Restricciones de datos"
            name="restricciones_datos"
            rows={3}
            placeholder="Privacidad, permisos, anonimización o limitaciones."
          />
          <div className="md:col-span-2">
            <TextAreaField
              label="Impacto esperado"
              name="impacto_esperado"
              required
              placeholder="Describe beneficios esperados para usuarios, unidades o comunidad."
            />
          </div>
          <div className="md:col-span-2">
            <TextAreaField
              label="Beneficiarios"
              name="beneficiarios"
              required
              placeholder="Indica quiénes se beneficiarían directa o indirectamente."
            />
          </div>
        </FormSection>

        <FormSection
          title="Factibilidad y continuidad"
          description="Entrega una primera lectura sobre alcance, tiempo, recursos y posibilidades de continuidad."
        >
          <div className="md:col-span-2">
            <TextAreaField
              label="Factibilidad preliminar"
              name="factibilidad_preliminar"
              placeholder="Describe disponibilidad de usuarios, datos, capacidades técnicas y alcance inicial."
            />
          </div>
          <TextAreaField
            label="Horizonte de desarrollo"
            name="horizonte_desarrollo"
            rows={3}
            placeholder="Semestre, taller intensivo, laboratorio, piloto."
          />
          <TextAreaField
            label="Potencial de continuidad"
            name="potencial_continuidad"
            rows={3}
            placeholder="Explica si podría avanzar a laboratorio, piloto, adopción o transferencia."
          />
          <div className="md:col-span-2">
            <TextAreaField
              label="Observaciones"
              name="observaciones"
              rows={3}
              placeholder="Agrega antecedentes relevantes no cubiertos en los campos anteriores."
            />
          </div>
        </FormSection>

        <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-slate-500">
            Este MVP no envía datos a servicios externos ni reemplaza un proceso
            institucional definitivo.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-lg bg-[#0f766e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#115e59] disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSubmitting ? "Enviando..." : "Enviar desafío"}
          </button>
        </div>
      </form>
    </div>
  );
}
