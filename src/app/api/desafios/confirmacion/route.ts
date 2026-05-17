import { NextResponse } from "next/server";
import { Resend } from "resend";

type ConfirmationEmailPayload = {
  proponente_nombre: string;
  proponente_contacto: string;
  nombre_desafio: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getRequiredString(
  body: Record<string, unknown>,
  field: keyof ConfirmationEmailPayload,
) {
  const value = body[field];

  return typeof value === "string" ? value.trim() : "";
}

function buildConfirmationEmail({
  proponente_nombre,
  nombre_desafio,
}: Pick<ConfirmationEmailPayload, "proponente_nombre" | "nombre_desafio">) {
  return `Hola ${proponente_nombre},

Hemos recibido correctamente el desafío "${nombre_desafio}" en el Ecosistema de Desarrollo de Soluciones Digitales.

El desafío quedó registrado con estado 'recibido' y será considerado para revisión inicial por el equipo del ecosistema.

Este correo confirma únicamente la recepción de la postulación. La selección, priorización o continuidad del desafío será evaluada posteriormente.

Saludos,
Ecosistema de Desarrollo de Soluciones Digitales
Departamento de Ingeniería Industrial
Universidad de Santiago de Chile`;
}

function getSafeErrorLog(error: unknown) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
    };
  }

  if (isRecord(error)) {
    return {
      message:
        typeof error.message === "string"
          ? error.message
          : "Error sin detalle disponible.",
      name: typeof error.name === "string" ? error.name : undefined,
    };
  }

  return {
    message: "Error sin detalle disponible.",
  };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        emailSent: false,
        message: "El cuerpo de la solicitud no es JSON válido.",
      },
      { status: 400 },
    );
  }

  if (!isRecord(body)) {
    return NextResponse.json(
      {
        ok: false,
        emailSent: false,
        message: "El cuerpo de la solicitud no tiene el formato esperado.",
      },
      { status: 400 },
    );
  }

  const payload: ConfirmationEmailPayload = {
    proponente_nombre: getRequiredString(body, "proponente_nombre"),
    proponente_contacto: getRequiredString(body, "proponente_contacto"),
    nombre_desafio: getRequiredString(body, "nombre_desafio"),
  };

  const missingFields = Object.entries(payload)
    .filter(([, value]) => !value)
    .map(([field]) => field);

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        emailSent: false,
        message: "Faltan campos obligatorios para enviar la confirmación.",
        missingFields,
      },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const resendFromEmail = process.env.RESEND_FROM_EMAIL?.trim();

  if (!resendApiKey || !resendFromEmail) {
    return NextResponse.json({
      ok: true,
      emailSent: false,
      message: "El correo de confirmación no está configurado.",
    });
  }

  try {
    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: resendFromEmail,
      to: payload.proponente_contacto,
      subject:
        "Desafío recibido - Ecosistema de Desarrollo de Soluciones Digitales",
      text: buildConfirmationEmail(payload),
    });

    if (error) {
      console.error("Resend confirmation email error", getSafeErrorLog(error));

      return NextResponse.json(
        {
          ok: false,
          emailSent: false,
          message: "No se pudo enviar el correo de confirmación.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      emailSent: true,
      message: "Correo de confirmación enviado.",
    });
  } catch (error) {
    console.error(
      "Resend confirmation email unexpected error",
      getSafeErrorLog(error),
    );

    return NextResponse.json(
      {
        ok: false,
        emailSent: false,
        message: "No se pudo enviar el correo de confirmación.",
      },
      { status: 500 },
    );
  }
}
