"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import type { Challenge, NivelAccesoDatos, TipoProponente } from "@/lib/types";

const storageKey = "ecosistema-dsd-local-challenges";

function getValue(formData: FormData, field: keyof Challenge) {
  return formData.get(field)?.toString().trim() ?? "";
}

function InputField({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: keyof Challenge;
  type?: "text" | "email";
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#17211f]">
        {label}
        {required ? <span className="text-[#b7791f]"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-[#cbd5d1] bg-white px-3 py-3 text-sm text-[#17211f] outline-none transition placeholder:text-[#98a5a1] focus:border-[#0f5f55] focus:ring-4 focus:ring-[#0f5f55]/10"
      />
    </label>
  );
}

function TextAreaField({
  label,
  name,
  required,
  rows = 4,
  placeholder,
}: {
  label: string;
  name: keyof Challenge;
  required?: boolean;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#17211f]">
        {label}
        {required ? <span className="text-[#b7791f]"> *</span> : null}
      </span>
      <textarea
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className="mt-2 w-full resize-y rounded-lg border border-[#cbd5d1] bg-white px-3 py-3 text-sm leading-6 text-[#17211f] outline-none transition placeholder:text-[#98a5a1] focus:border-[#0f5f55] focus:ring-4 focus:ring-[#0f5f55]/10"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: keyof Challenge;
  required?: boolean;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#17211f]">
        {label}
        {required ? <span className="text-[#b7791f]"> *</span> : null}
      </span>
      <select
        name={name}
        required={required}
        className="mt-2 w-full rounded-lg border border-[#cbd5d1] bg-white px-3 py-3 text-sm text-[#17211f] outline-none transition focus:border-[#0f5f55] focus:ring-4 focus:ring-[#0f5f55]/10"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function ChallengeForm() {
  const [submittedChallenge, setSubmittedChallenge] =
    useState<Challenge | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const challenge: Challenge = {
      id_desafio: `LOCAL-${Date.now()}`,
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
      estado_desafio: "postulado",
    };

    const stored = window.localStorage.getItem(storageKey);
    const previousChallenges = stored
      ? (JSON.parse(stored) as Challenge[])
      : [];

    window.localStorage.setItem(
      storageKey,
      JSON.stringify([challenge, ...previousChallenges]),
    );
    console.info("Nuevo desafío DSD registrado localmente", challenge);

    setSubmittedChallenge(challenge);
    form.reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="space-y-8">
      {submittedChallenge ? (
        <div className="rounded-lg border border-[#9ec7bd] bg-[#e5f2ee] p-5">
          <p className="font-semibold text-[#0f5f55]">
            Desafío recibido en el MVP
          </p>
          <p className="mt-2 text-sm leading-6 text-[#52615d]">
            Se registró localmente como{" "}
            <span className="font-mono font-semibold">
              {submittedChallenge.id_desafio}
            </span>
            . En una versión futura este envío irá a una base de datos y flujo
            de revisión.
          </p>
        </div>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className="rounded-lg border border-[#d8ded8] bg-white p-5 shadow-sm shadow-[#17211f]/5 md:p-8"
      >
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#17211f]">
            Formulario de postulación
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#52615d]">
            Completa los antecedentes principales para que el comité pueda
            revisar claridad, usuarios, impacto, factibilidad y continuidad.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <InputField
            label="Nombre del desafío"
            name="nombre_desafio"
            required
            placeholder="Ej. Automatizar seguimiento de solicitudes"
          />
          <InputField
            label="Origen del desafío"
            name="origen_desafio"
            required
            placeholder="Unidad, curso, socio o iniciativa"
          />
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
              { value: "socio_externo", label: "Socio externo" },
              { value: "otro", label: "Otro" },
            ]}
          />
          <InputField
            label="Usuario objetivo"
            name="usuario_objetivo"
            required
          />
          <InputField
            label="Stakeholder principal"
            name="stakeholder_principal"
            required
          />
          <InputField
            label="Sponsor académico"
            name="sponsor_academico"
            placeholder="Si existe"
          />
          <InputField
            label="Tipo de solución esperada"
            name="tipo_solucion_esperada"
            required
            placeholder="Dashboard, portal, app, automatización, IA, etc."
          />
          <InputField
            label="Área de aplicación"
            name="area_aplicacion"
            required
          />
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
        </div>

        <div className="mt-8 grid gap-5">
          <TextAreaField
            label="Descripción del problema"
            name="descripcion_problema"
            required
            placeholder="Describe qué ocurre, a quién afecta y por qué importa."
          />
          <TextAreaField
            label="Necesidad u oportunidad"
            name="necesidad_oportunidad"
            required
          />
          <TextAreaField
            label="Datos disponibles"
            name="datos_disponibles"
            placeholder="Fuentes, formatos, frecuencia, responsables."
          />
          <TextAreaField
            label="Restricciones de datos"
            name="restricciones_datos"
            placeholder="Privacidad, permisos, anonimización o limitaciones."
          />
          <TextAreaField
            label="Impacto esperado"
            name="impacto_esperado"
            required
          />
          <TextAreaField
            label="Beneficiarios"
            name="beneficiarios"
            required
          />
          <TextAreaField
            label="Factibilidad preliminar"
            name="factibilidad_preliminar"
          />
          <TextAreaField
            label="Riesgos o restricciones"
            name="riesgos_restricciones"
          />
          <TextAreaField
            label="Horizonte de desarrollo"
            name="horizonte_desarrollo"
            placeholder="Semestre, taller intensivo, laboratorio, piloto."
          />
          <TextAreaField
            label="Potencial de continuidad"
            name="potencial_continuidad"
          />
          <TextAreaField label="Observaciones" name="observaciones" rows={3} />
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#d8ded8] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-[#66736f]">
            Los campos marcados con * son obligatorios. Este MVP no envía datos
            a servicios externos.
          </p>
          <button
            type="submit"
            className="rounded-lg bg-[#0f5f55] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b4c44]"
          >
            Enviar desafío
          </button>
        </div>
      </form>
    </div>
  );
}
