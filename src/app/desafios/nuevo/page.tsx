import { ChallengeForm } from "@/components/forms/ChallengeForm";
import { SectionHeader } from "@/components/ui/SectionHeader";

const submitters = [
  "Estudiantes con problemas observados en cursos, prácticas o proyectos.",
  "Académicos que buscan articular docencia, investigación aplicada o transferencia.",
  "Unidades internas con necesidades de gestión, seguimiento, datos o automatización.",
  "Partners externos con desafíos aplicados y usuarios disponibles para validar.",
];

export default function NewChallengePage() {
  return (
    <div className="bg-slate-50">
      <section className="bg-[#111a24] py-20 text-white">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Nuevo desafío"
            title="Propón un problema para evaluación del ecosistema"
            description="Pueden postular estudiantes, académicos, unidades internas y partners externos. La postulación debe describir una necesidad real, usuarios o stakeholders, datos disponibles, impacto esperado y potencial de continuidad."
            tone="dark"
          />
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
            <h2 className="text-xl font-semibold text-[#17212b]">
              ¿Quiénes pueden proponer?
            </h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {submitters.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <ChallengeForm />
        </div>
      </section>
    </div>
  );
}
