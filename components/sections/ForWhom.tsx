import SectionContainer from "@/components/ui/SectionContainer";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import { Check, X, CheckCircle2, XCircle } from "lucide-react";

const FOR_YOU = [
  "Recebeu o diagnóstico de TEA do seu filho recentemente (ou faz tempo, mas ainda se sente perdida)",
  "Quer ferramentas práticas que cabem na sua rotina",
  "Não tem condições de pagar terapia particular (ou complementa)",
  "Está disposta a aplicar 5–15 minutos por dia",
  "Quer fazer parte de uma rede de mães que entendem",
];

const NOT_FOR_YOU = [
  'Procura uma "cura" para o autismo (não existe e não prometemos)',
  "Quer um método que substitua acompanhamento profissional (somos complemento)",
  "Não está disposta a aplicar nada (o método exige consistência, mesmo que pouca)",
];

export default function ForWhom() {
  return (
    <SectionContainer bgClassName="bg-branco-nuvem">
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <FadeInOnScroll>
          <div className="h-full rounded-card bg-verde-menta/30 p-7 shadow-soft md:p-9">
            <h3 className="mb-6 flex items-center gap-3 font-hero text-2xl text-azul-profundo md:text-3xl">
              É pra você se: <CheckCircle2 className="h-7 w-7 text-verde-menta" />
            </h3>
            <ul className="space-y-4">
              {FOR_YOU.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-branco-nuvem shadow-soft">
                    <Check
                      className="h-4 w-4 text-azul-profundo"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="font-body text-base leading-relaxed text-cinza-cuidado md:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.1}>
          <div className="h-full rounded-card bg-cinza-suave/30 p-7 shadow-soft md:p-9">
            <h3 className="mb-6 flex items-center gap-3 font-hero text-2xl text-cinza-cuidado md:text-3xl">
              Não é pra você se: <XCircle className="h-7 w-7 text-cinza-suave" />
            </h3>
            <ul className="space-y-4">
              {NOT_FOR_YOU.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-branco-nuvem shadow-soft">
                    <X
                      className="h-4 w-4 text-cinza-cuidado"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="font-body text-base leading-relaxed text-cinza-cuidado md:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionContainer>
  );
}

