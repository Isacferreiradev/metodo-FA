import SectionContainer from "@/components/ui/SectionContainer";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import Badge from "@/components/ui/Badge";
import { config } from "@/lib/config";
import { GraduationCap, Award, Heart } from "lucide-react";
import Image from "next/image";

export default function Specialist() {
  return (
    <SectionContainer bgClassName="bg-branco-nuvem">
      <div className="grid items-center gap-10 md:grid-cols-[400px_1fr] md:gap-20">
        {/* Foto e Badges de autoridade */}
        <FadeInOnScroll>
          <div className="relative flex flex-col items-center md:items-start">
            <div
              className="relative mb-6 h-72 w-72 overflow-hidden rounded-card border-[8px] border-azul-bebe bg-rosa-suave/20 shadow-soft-lg md:h-[400px] md:w-[400px]"
            >
              <Image
                src="/especialista.jpg"
                alt={`Foto de ${config.especialista.nome}`}
                fill
                className="object-cover object-[50%_15%]"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <div className="flex items-center gap-2 rounded-pill bg-azul-bebe/30 px-4 py-2 text-sm font-semibold text-azul-profundo">
                <GraduationCap className="h-4 w-4" />
                <span>Pós-graduada em ABA</span>
              </div>
              <div className="flex items-center gap-2 rounded-pill bg-verde-menta/30 px-4 py-2 text-sm font-semibold text-azul-profundo">
                <Award className="h-4 w-4" />
                <span>+10 anos de experiência</span>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Texto e Bio */}
        <FadeInOnScroll delay={0.15}>
          <div className="flex flex-col items-start gap-6">
            <Badge tone="verde" className="text-sm">
              {config.especialista.selo}
            </Badge>

            <div className="space-y-2">
              <h2 className="font-hero text-4xl text-azul-profundo md:text-5xl">
                {config.especialista.nome}
              </h2>
              <p className="font-display text-lg font-semibold text-azul-profundo/70">
                Fundadora do Método Filho Atípico
              </p>
            </div>

            <p className="font-body text-base leading-relaxed text-cinza-cuidado md:text-xl">
              {config.especialista.bioBreve}
            </p>

            <div className="relative mt-4 w-full">
               <Heart className="absolute -right-4 -top-8 h-16 w-16 text-rosa-suave/20" />
               <blockquote className="relative rounded-card bg-azul-bebe/20 p-8 md:p-10">
                <span
                  aria-hidden="true"
                  className="absolute -left-2 -top-6 font-hero text-7xl leading-none text-azul-bebe md:-top-8 md:text-9xl"
                >
                  &ldquo;
                </span>
                <p className="relative font-body text-lg italic leading-relaxed text-azul-profundo md:text-2xl">
                  Quando comecei a atender mães atípicas, percebi que o problema
                  não era falta de informação. Era informação demais, mal
                  organizada, e cara demais. Criei esse método pra que toda mãe —
                  independente de onde mora ou quanto ganha — tenha o que minhas
                  pacientes têm.
                </p>
              </blockquote>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </SectionContainer>
  );
}

