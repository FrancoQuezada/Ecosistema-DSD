"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";

import {
  getSupabaseBrowserClient,
  getSupabaseEnvDiagnostics,
} from "@/lib/supabase/client";
import type { Challenge, TipoProponente } from "@/lib/types";

function getValue(formData: FormData, field: keyof Challenge) {
  return formData.get(field)?.toString().trim() ?? "";
}

function formatDetectedVariable(isPresent: boolean) {
  return isPresent ? "sí" : "no";
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
  error,
}: {
  label: string;
  name: keyof Challenge;
  type?: "text" | "email";
  required?: boolean;
  placeholder?: string;
  helper?: string;
  error?: string;
}) {
  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;

  return (
    <label className="block">
      <FieldLabel label={label} required={required} />
      <input
        id={fieldId}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-[#17212b] outline-none transition placeholder:text-slate-400 focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/10"
      />
      <FieldHelp>{helper}</FieldHelp>
      {error ? (
        <span id={errorId} className="mt-1 block text-xs leading-5 text-red-700">
          {error}
        </span>
      ) : null}
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
  error,
}: {
  label: string;
  name: keyof Challenge;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  helper?: string;
  error?: string;
}) {
  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;

  return (
    <label className="block">
      <FieldLabel label={label} required={required} />
      <textarea
        id={fieldId}
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm leading-6 text-[#17212b] outline-none transition placeholder:text-slate-400 focus:border-[#0f766e] focus:ring-4 focus:ring-[#0f766e]/10"
      />
      <FieldHelp>{helper}</FieldHelp>
      {error ? (
        <span id={errorId} className="mt-1 block text-xs leading-5 text-red-700">
          {error}
        </span>
      ) : null}
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

type FieldErrors = Partial<Record<keyof Challenge, string>>;

type SupabaseNivelAccesoDatos =
  | "publico"
  | "interno"
  | "privado"
  | "restringido";

type DesafioInsertPayload = Pick<
  Challenge,
  | "nombre_desafio"
  | "proponente_nombre"
  | "proponente_contacto"
  | "descripcion_problema"
> & {
  estado_desafio: "recibido";
  fecha_postulacion?: string;
  origen_desafio?: string;
  unidad_organizacion?: string;
  tipo_proponente?: TipoProponente;
  necesidad_oportunidad?: string;
  usuario_objetivo?: string;
  stakeholder_principal?: string;
  sponsor_academico?: string;
  tipo_solucion_esperada?: string;
  area_aplicacion?: string;
  datos_disponibles?: string;
  nivel_acceso_datos?: SupabaseNivelAccesoDatos;
  restricciones_datos?: string;
  impacto_esperado?: string;
  beneficiarios?: string;
  factibilidad_preliminar?: string;
  riesgos_restricciones?: string;
  horizonte_desarrollo?: string;
  potencial_continuidad?: string;
  observaciones?: string;
};

type TechnicalErrorDetail = {
  message: string;
  code?: string;
  details?: string;
};

type ConfirmationEmailFailureReason = "resend_error" | "email_not_configured";

type ConfirmationEmailTechnicalDetail = {
  reason?: ConfirmationEmailFailureReason;
  message?: string;
  name?: string;
  status?: number;
};

type ConfirmationEmailNotice = {
  tone: "success" | "warning";
  message: string;
  technicalDetail?: ConfirmationEmailTechnicalDetail;
};

type ConfirmationEmailResponse = {
  ok?: boolean;
  emailSent?: boolean;
  message?: string;
  name?: string;
  reason?: ConfirmationEmailFailureReason;
};

const shouldShowEmailTechnicalDetail =
  process.env.NODE_ENV !== "production" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";

const validNivelesAccesoDatos: SupabaseNivelAccesoDatos[] = [
  "publico",
  "interno",
  "privado",
  "restringido",
];

const optionalTextFields = [
  "origen_desafio",
  "unidad_organizacion",
  "necesidad_oportunidad",
  "usuario_objetivo",
  "stakeholder_principal",
  "sponsor_academico",
  "tipo_solucion_esperada",
  "area_aplicacion",
  "datos_disponibles",
  "restricciones_datos",
  "impacto_esperado",
  "beneficiarios",
  "factibilidad_preliminar",
  "riesgos_restricciones",
  "horizonte_desarrollo",
  "potencial_continuidad",
  "observaciones",
] satisfies Array<keyof Challenge>;

const requiredFields = [
  { name: "nombre_desafio", label: "Nombre del desafío" },
  { name: "proponente_nombre", label: "Nombre del proponente" },
  { name: "proponente_contacto", label: "Contacto" },
  { name: "descripcion_problema", label: "Descripción del problema" },
] satisfies Array<{ name: keyof Challenge; label: string }>;

function validateRequiredFields(formData: FormData) {
  return requiredFields.reduce<FieldErrors>((errors, field) => {
    if (!getValue(formData, field.name)) {
      errors[field.name] = `${field.label} es obligatorio.`;
    }

    return errors;
  }, {});
}

function focusFirstInvalidField(form: HTMLFormElement, errors: FieldErrors) {
  const firstInvalidField = requiredFields.find((field) => errors[field.name]);

  if (!firstInvalidField) {
    return;
  }

  const element = form.elements.namedItem(firstInvalidField.name);

  if (element instanceof HTMLElement) {
    element.focus();
  }
}

function getNivelAccesoDatos(
  formData: FormData,
): SupabaseNivelAccesoDatos | undefined {
  const value = getValue(formData, "nivel_acceso_datos");

  if (validNivelesAccesoDatos.includes(value as SupabaseNivelAccesoDatos)) {
    return value as SupabaseNivelAccesoDatos;
  }

  return undefined;
}

function createDesafioInsertPayload(formData: FormData): DesafioInsertPayload {
  const payload: DesafioInsertPayload = {
    nombre_desafio: getValue(formData, "nombre_desafio"),
    proponente_nombre: getValue(formData, "proponente_nombre"),
    proponente_contacto: getValue(formData, "proponente_contacto"),
    descripcion_problema: getValue(formData, "descripcion_problema"),
    estado_desafio: "recibido",
    fecha_postulacion: new Date().toISOString().slice(0, 10),
  };

  optionalTextFields.forEach((field) => {
    const value = getValue(formData, field);

    if (value) {
      payload[field] = value;
    }
  });

  const tipoProponente = getValue(formData, "tipo_proponente");

  if (tipoProponente) {
    payload.tipo_proponente = tipoProponente as TipoProponente;
  }

  const nivelAccesoDatos = getNivelAccesoDatos(formData);

  if (nivelAccesoDatos) {
    payload.nivel_acceso_datos = nivelAccesoDatos;
  }

  return payload;
}

function getTechnicalErrorDetail(error: {
  message?: string;
  code?: string;
  details?: string | null;
}): TechnicalErrorDetail {
  return {
    message: error.message ?? "Supabase no entregó un mensaje de error.",
    code: error.code,
    details: error.details ?? undefined,
  };
}

function getUnexpectedTechnicalErrorDetail(error: unknown): TechnicalErrorDetail {
  if (error instanceof Error) {
    return { message: error.message };
  }

  return { message: "Error inesperado sin detalle disponible." };
}

function getEmailWarningNotice(
  technicalDetail?: ConfirmationEmailTechnicalDetail,
): ConfirmationEmailNotice {
  return {
    tone: "warning",
    message:
      "El desafío fue registrado correctamente, pero no se pudo enviar el correo de confirmación.",
    technicalDetail,
  };
}

function getEmailRequestErrorDetail(
  error: unknown,
): ConfirmationEmailTechnicalDetail {
  if (error instanceof Error) {
    return {
      message: error.message,
      name: error.name,
    };
  }

  return {
    message: "No fue posible consultar la ruta de confirmación por correo.",
  };
}

async function sendConfirmationEmail({
  proponente_nombre,
  proponente_contacto,
  nombre_desafio,
}: Pick<
  DesafioInsertPayload,
  "proponente_nombre" | "proponente_contacto" | "nombre_desafio"
>): Promise<ConfirmationEmailNotice> {
  try {
    const response = await fetch("/api/desafios/confirmacion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        proponente_nombre,
        proponente_contacto,
        nombre_desafio,
      }),
    });
    const data = (await response.json().catch(() => null)) as
      | ConfirmationEmailResponse
      | null;

    if (!response.ok || data?.ok === false || data?.emailSent !== true) {
      return getEmailWarningNotice({
        reason: data?.reason,
        message:
          data?.message ??
          `La ruta de confirmación respondió con estado ${response.status}.`,
        name: data?.name,
        status: response.status,
      });
    }

    return {
      tone: "success",
      message: "Se envió un correo de confirmación al contacto registrado.",
    };
  } catch (error) {
    return getEmailWarningNotice(getEmailRequestErrorDetail(error));
  }
}

export function ChallengeForm() {
  const formTopRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [emailNotice, setEmailNotice] =
    useState<ConfirmationEmailNotice | null>(null);
  const [technicalError, setTechnicalError] =
    useState<TechnicalErrorDetail | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSuccessMessage(null);
    setErrorMessage(null);
    setEmailNotice(null);
    setTechnicalError(null);
    setFieldErrors({});

    const validationErrors = validateRequiredFields(formData);

    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setErrorMessage(
        "Revisa los campos obligatorios marcados antes de enviar el desafío.",
      );
      focusFirstInvalidField(form, validationErrors);
      return;
    }

    const diagnostics = getSupabaseEnvDiagnostics();

    if (!diagnostics.isSupabaseConfigured) {
      setErrorMessage(
        `Supabase no está configurado en esta versión desplegada. Variables detectadas: URL = ${formatDetectedVariable(
          diagnostics.hasSupabaseUrl,
        )}, ANON_KEY = ${formatDetectedVariable(
          diagnostics.hasSupabaseAnonKey,
        )}.`,
      );
      return;
    }

    const challenge = createDesafioInsertPayload(formData);

    setIsSubmitting(true);

    try {
      const supabase = getSupabaseBrowserClient();

      if (!supabase) {
        setErrorMessage(
          "Las variables de Supabase fueron detectadas, pero no fue posible inicializar el cliente.",
        );
        return;
      }

      const { error } = await supabase.from("desafios").insert(challenge);

      if (error) {
        console.error("Supabase insert error", error);
        setErrorMessage(
          "No fue posible enviar el desafío. Intenta nuevamente o contacta al equipo del ecosistema.",
        );
        setTechnicalError(getTechnicalErrorDetail(error));
        return;
      }

      const confirmationEmailNotice = await sendConfirmationEmail({
        nombre_desafio: challenge.nombre_desafio,
        proponente_contacto: challenge.proponente_contacto,
        proponente_nombre: challenge.proponente_nombre,
      });

      setSuccessMessage(
        "Desafío enviado correctamente. Quedó registrado con estado recibido para revisión inicial.",
      );
      setEmailNotice(confirmationEmailNotice);
      form.reset();
      setTechnicalError(null);
      setFieldErrors({});
      formTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } catch (error) {
      console.error("Supabase insert error", error);
      setErrorMessage(
        "No fue posible enviar el desafío. Intenta nuevamente o contacta al equipo del ecosistema.",
      );
      setTechnicalError(getUnexpectedTechnicalErrorDetail(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div ref={formTopRef} className="space-y-8">
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
          {emailNotice ? (
            <div
              className={`mt-3 rounded-md border p-3 text-sm leading-6 ${
                emailNotice.tone === "success"
                  ? "border-teal-200 bg-white/60 text-teal-800"
                  : "border-amber-200 bg-amber-50 text-amber-900"
              }`}
            >
              <p>{emailNotice.message}</p>
              {emailNotice.tone === "warning" &&
              emailNotice.technicalDetail &&
              shouldShowEmailTechnicalDetail ? (
                <div className="mt-3 rounded-md border border-amber-200 bg-white/70 p-3 text-xs leading-5 text-amber-900">
                  <p className="font-semibold">Detalle técnico del correo</p>
                  {emailNotice.technicalDetail.reason ? (
                    <p className="mt-1">
                      <span className="font-medium">Motivo:</span>{" "}
                      {emailNotice.technicalDetail.reason}
                    </p>
                  ) : null}
                  {emailNotice.technicalDetail.message ? (
                    <p>
                      <span className="font-medium">Mensaje:</span>{" "}
                      {emailNotice.technicalDetail.message}
                    </p>
                  ) : null}
                  {emailNotice.technicalDetail.name ? (
                    <p>
                      <span className="font-medium">Nombre:</span>{" "}
                      {emailNotice.technicalDetail.name}
                    </p>
                  ) : null}
                  {emailNotice.technicalDetail.status ? (
                    <p>
                      <span className="font-medium">Estado HTTP:</span>{" "}
                      {emailNotice.technicalDetail.status}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}

      {errorMessage ? (
        <div
          className="rounded-lg border border-red-200 bg-red-50 p-5"
          role="alert"
        >
          <p className="font-semibold text-red-800">No se pudo enviar</p>
          <p className="mt-2 text-sm leading-6 text-red-700">{errorMessage}</p>
          {technicalError ? (
            <div className="mt-4 rounded-md border border-red-200 bg-white/70 p-3 text-xs leading-5 text-red-800">
              <p className="font-semibold">Detalle técnico</p>
              <p className="mt-1">
                <span className="font-medium">Mensaje:</span>{" "}
                {technicalError.message}
              </p>
              {technicalError.code ? (
                <p>
                  <span className="font-medium">Código:</span>{" "}
                  {technicalError.code}
                </p>
              ) : null}
              {technicalError.details ? (
                <p>
                  <span className="font-medium">Detalles:</span>{" "}
                  {technicalError.details}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}

      <form
        onSubmit={handleSubmit}
        noValidate
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
            error={fieldErrors.nombre_desafio}
          />
          <InputField
            label="Origen del desafío"
            name="origen_desafio"
            placeholder="Unidad, curso, socio o iniciativa"
          />
          <InputField
            label="Área de aplicación"
            name="area_aplicacion"
            placeholder="Gestión académica, operaciones, vinculación, etc."
          />
          <InputField
            label="Tipo de solución esperada"
            name="tipo_solucion_esperada"
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
            error={fieldErrors.proponente_nombre}
          />
          <InputField
            label="Contacto"
            name="proponente_contacto"
            type="email"
            required
            helper="Correo de contacto para coordinación inicial."
            error={fieldErrors.proponente_contacto}
          />
          <InputField
            label="Unidad u organización"
            name="unidad_organizacion"
          />
          <SelectField
            label="Tipo de proponente"
            name="tipo_proponente"
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
              error={fieldErrors.descripcion_problema}
            />
          </div>
          <div className="md:col-span-2">
            <TextAreaField
              label="Necesidad u oportunidad"
              name="necesidad_oportunidad"
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
            placeholder="Personas o roles que usarían la solución"
          />
          <InputField
            label="Stakeholder principal"
            name="stakeholder_principal"
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
            options={[
              { value: "", label: "No informado" },
              { value: "publico", label: "Público" },
              { value: "interno", label: "Interno" },
              { value: "privado", label: "Privado" },
              { value: "restringido", label: "Restringido" },
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
              placeholder="Describe beneficios esperados para usuarios, unidades o comunidad."
            />
          </div>
          <div className="md:col-span-2">
            <TextAreaField
              label="Beneficiarios"
              name="beneficiarios"
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
            Este MVP registra postulaciones en Supabase. La gestión interna
            seguirá usando datos mock hasta incorporar autenticación y roles.
          </p>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-[#0f766e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#115e59] disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {isSubmitting ? "Enviando..." : "Enviar desafío"}
            </button>
            {isSubmitting ? (
              <span
                className="text-xs font-medium text-[#0f766e]"
                role="status"
                aria-live="polite"
              >
                Enviando desafío a Supabase...
              </span>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
}
