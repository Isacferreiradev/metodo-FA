import SectionContainer from "@/components/ui/SectionContainer";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import CTAButton from "@/components/ui/CTAButton";
import { Check } from "lucide-react";
import { config } from "@/lib/config";

const ESSENCIAL_ITEMS = [
  "Método completo (4 pilares)",
  "Planner em 4 versões",
  "Kit de 100 atividades",
  "Bônus 1, 2 e 4",
  "Acesso vitalício",
  "Garantia de 7 dias",
];

const COMPLETO_ITEMS = [
  "TUDO do Essencial",
  "Comunidade Círculo Mãe Atípica",
  "Lives semanais com a especialista",
  "Bônus 3 e 5 (Kit Sensorial + Áudios)",
  "Garantia estendida de 30 dias",
];

function PlanItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-verde-menta">
        <Check className="h-3.5 w-3.5 text-azul-profundo" strokeWidth={3} />
      </span>
      <span className="font-body text-base text-cinza-cuidado">{children}</span>
    </li>
  );
}

export default function Plans() {
  return (
    <SectionContainer bgClassName="bg-azul-bebe" id="planos">
      <FadeInOnScroll>
        <h2 className="text-center font-hero text-3xl text-azul-profundo md:text-4xl">
          Escolha como começar:
        </h2>
      </FadeInOnScroll>

      <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 md:items-stretch md:gap-8">
        {/* Essencial */}
        <FadeInOnScroll>
          <div className="flex h-full flex-col gap-5 rounded-card bg-branco-nuvem p-7 shadow-soft md:p-9">
            <div>
              <h3 className="font-hero text-2xl text-azul-profundo md:text-3xl">
                Essencial
              </h3>
              <p className="mt-1 font-body text-cinza-cuidado">
                Pra começar a aplicar hoje
              </p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-hero text-4xl text-azul-profundo md:text-5xl">
                {config.precos.essencial}
              </span>
              <span className="font-body text-sm text-cinza-cuidado">à vista</span>
            </div>

            <ul className="space-y-3 border-t-2 border-cinza-suave pt-5">
              {ESSENCIAL_ITEMS.map((item) => (
                <PlanItem key={item}>{item}</PlanItem>
              ))}
            </ul>

            <div className="mt-auto pt-2">
              <CTAButton
                href={config.checkout.essencial}
                size="lg"
                className="w-full"
                ariaLabel="Comprar plano essencial"
              >
                Começar pelo Essencial
              </CTAButton>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Completo */}
        <FadeInOnScroll delay={0.1}>
          <div className="relative flex h-full flex-col gap-5 rounded-card bg-amarelo-sol/70 p-7 shadow-soft-lg md:p-9">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="rounded-pill bg-coral-quente px-5 py-1.5 font-display text-sm font-bold text-white shadow-soft">
                Mais Vendido
              </span>
            </div>

            <div>
              <h3 className="font-hero text-2xl text-azul-profundo md:text-3xl">
                Completo
              </h3>
              <p className="mt-1 font-body text-cinza-cuidado">
                Pra ter tudo + a comunidade
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-display text-base text-cinza-cuidado line-through decoration-coral-quente decoration-2">
                {config.precos.completoOriginal}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-hero text-4xl text-azul-profundo md:text-5xl">
                  {config.precos.completo}
                </span>
                <span className="font-body text-sm text-cinza-cuidado">
                  à vista ou {config.precos.parcelaCompleto}
                </span>
              </div>
            </div>

            <ul className="space-y-3 border-t-2 border-amarelo-sol pt-5">
              {COMPLETO_ITEMS.map((item) => (
                <PlanItem key={item}>{item}</PlanItem>
              ))}
            </ul>

            <div className="flex justify-center">
              <span className="rounded-pill bg-rosa-suave px-4 py-1.5 font-display text-sm font-semibold text-azul-profundo">
                {config.socialProof.maesAtendidas} mães escolheram esse
              </span>
            </div>

            <div className="mt-auto pt-2">
              <CTAButton
                href={config.checkout.completo}
                size="xl"
                className="w-full"
                ariaLabel="Comprar plano completo"
              >
                Quero o Plano Completo
              </CTAButton>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionContainer>
  );
}
