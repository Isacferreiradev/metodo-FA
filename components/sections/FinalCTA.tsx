import SectionContainer from "@/components/ui/SectionContainer";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import CTAButton from "@/components/ui/CTAButton";
import { Lock, Sparkles, Heart, CreditCard } from "lucide-react";

const SEALS = [
  { icon: Lock, label: "Compra 100% segura" },
  { icon: Sparkles, label: "Acesso imediato em 2 minutos" },
  { icon: Heart, label: "Garantia de 7 dias" },
  { icon: CreditCard, label: "Pix, Cartão, Boleto" },
];

export default function FinalCTA() {
  return (
    <SectionContainer bgClassName="bg-azul-bebe">
      <FadeInOnScroll>
        <h2 className="flex items-center justify-center gap-3 mx-auto max-w-3xl text-center font-hero text-3xl leading-tight text-azul-profundo md:text-5xl">
          Sua próxima semana pode ser muito diferente da última. <Sparkles className="h-8 w-8 text-verde-menta" />
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center font-body text-base text-cinza-cuidado md:text-lg">
          O método tá esperando você. Acesso imediato após a compra.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.15}>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 md:mt-12 md:flex-row md:gap-6">
          <CTAButton
            href="#planos"
            size="lg"
            className="w-full md:w-auto"
            ariaLabel="Ver planos"
          >
            Ver Planos e Começar Hoje
          </CTAButton>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.25}>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-3 md:mt-12 md:gap-5">
          {SEALS.map((seal) => {
            const Icon = seal.icon;
            return (
              <li
                key={seal.label}
                className="flex items-center gap-2 rounded-pill bg-branco-nuvem/80 px-4 py-2 font-display text-sm font-semibold text-azul-profundo shadow-soft"
              >
                <Icon className="h-4 w-4" strokeWidth={2.5} />
                <span>{seal.label}</span>
              </li>
            );
          })}
        </ul>
      </FadeInOnScroll>
    </SectionContainer>
  );
}
