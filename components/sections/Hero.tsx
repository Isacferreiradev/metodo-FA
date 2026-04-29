import SectionContainer from "@/components/ui/SectionContainer";
import CTAButton from "@/components/ui/CTAButton";
import Badge from "@/components/ui/Badge";
import { config } from "@/lib/config";
import { CloudIcon, StarIcon } from "@/components/ui/CustomIcons";
import Image from "next/image";
import { Heart, Zap, ShieldCheck } from "lucide-react";

function FloatingCloud({ className, delay = "0s" }: { className?: string; delay?: string }) {
  return (
    <CloudIcon
      className={`absolute text-white opacity-30 ${className}`}
      style={{ animationDelay: delay }}
    />
  );
}

function FloatingStar({ className, delay = "0s" }: { className?: string; delay?: string }) {
  return (
    <StarIcon
      className={`absolute text-amarelo-sol opacity-40 ${className}`}
      style={{ animationDelay: delay }}
    />
  );
}

export default function Hero() {
  return (
    <SectionContainer bgClassName="bg-azul-bebe" className="relative overflow-hidden pt-12 md:pt-20">
      {/* Decorações flutuantes */}
      <FloatingCloud className="left-4 top-12 h-16 w-24 animate-float md:left-16 md:h-20 md:w-32" />
      <FloatingCloud className="right-8 top-32 h-12 w-20 animate-float md:right-24 md:h-16 md:w-28" delay="2s" />
      <FloatingStar className="left-1/4 top-8 h-6 w-6 animate-float md:h-8 md:w-8" delay="1s" />
      <FloatingStar className="right-1/3 bottom-16 h-5 w-5 animate-float md:h-7 md:w-7" delay="3s" />

      <div className="relative flex flex-col items-center text-center">
        {/* Conteúdo de Texto e Imagem com Efeito de Sobreposição */}
        <div className="flex max-w-4xl flex-col items-center">
          
          {/* Imagem no Topo com efeito de "sair" da headline */}
          <div className="relative z-20 -mb-6 w-full max-w-sm md:-mb-12 md:max-w-md lg:max-w-lg">
            <div
              className="relative aspect-square w-full overflow-hidden transition-transform duration-500 hover:scale-105"
              style={{
                maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
              }}
            >
               <Image
                  src="/hero.png"
                  alt="Ilustração de uma mãe abraçando carinhosamente seu filho"
                  fill
                  className="object-contain"
                  priority
               />
            </div>
            {/* Badge decorativa flutuante */}
            <div className="absolute -right-2 bottom-20 z-30 animate-float rounded-card bg-amarelo-sol p-3 shadow-soft md:p-4">
              <p className="flex items-center gap-1 font-display text-xs font-bold text-azul-profundo md:text-sm">
                AMOR ATÍPICO <Heart className="h-3 w-3 fill-branco-nuvem text-branco-nuvem" />
              </p>
            </div>
          </div>

          <h1 className="relative z-10 mb-4 font-hero text-2xl leading-tight text-azul-profundo md:text-4xl lg:text-5xl">
            Em <span className="text-coral-quente">7 DIAS</span>, você vai saber <span className="text-coral-quente">EXATAMENTE</span> como agir com seu filho atípico — sem terapia particular, sem método importado, <span className="text-coral-quente font-bold">SEM PROMESSA DE CURA.</span>
          </h1>

          <p className="relative z-10 mb-6 max-w-2xl font-body text-base text-cinza-cuidado md:text-lg">
            O Método {config.especialista.nome} já ajudou centenas de mães a sair
            do desespero do diagnóstico e começar a ver o filho responder,
            comunicar e se acalmar — usando ferramentas práticas que cabem na
            rotina de quem não tem tempo nem dinheiro sobrando.
          </p>

          <div className="relative z-10 flex w-full flex-col items-center gap-4">
            <CTAButton href="#planos" size="xl" className="w-full md:w-auto">
              Quero conhecer o método — {config.precos.essencial}
            </CTAButton>

            <p className="font-body text-sm font-semibold tracking-wide text-cinza-cuidado opacity-80 md:text-base">
              Pra mães que receberam o diagnóstico e não sabem o que fazer amanhã
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <Badge tone="rosa">
                <Heart className="mr-1.5 h-3.5 w-3.5" /> {config.socialProof.maesAtendidas} mães já aplicaram
              </Badge>
              <Badge tone="verde">
                <Zap className="mr-1.5 h-3.5 w-3.5" /> Acesso imediato
              </Badge>
              <Badge tone="amarelo">
                <ShieldCheck className="mr-1.5 h-3.5 w-3.5" /> Garantia de 7 dias
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}



