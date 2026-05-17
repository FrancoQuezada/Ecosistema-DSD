import { ChallengeForm } from "@/components/forms/ChallengeForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function NewChallengePage() {
  return (
    <div className="bg-[#f7f8f5] py-16">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Nuevo desafío"
          title="Postula un problema para evaluación del ecosistema"
          description="El formulario captura los antecedentes principales del modelo Challenge. Por ahora guarda una copia local en el navegador y muestra confirmación."
        />
        <div className="mt-10">
          <ChallengeForm />
        </div>
      </div>
    </div>
  );
}
