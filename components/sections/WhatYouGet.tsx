import SectionContainer from "@/components/ui/SectionContainer";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import Card from "@/components/ui/Card";
import Image from "next/image";

import { Target, Book, Palette, MessageCircle } from "lucide-react";

interface Deliverable {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  valor: string;
  mockupBg: string;
  image: string;
}

const DELIVERABLES: Deliverable[] = [
  {
    icon: <Target className="h-12 w-12 text-azul-profundo" />,
    title: "Método Completo em 4 Pilares",
    description: <p>4 módulos em vídeo + apostila por pilar.</p>,
    valor: "R$ 197",
    mockupBg: "bg-azul-bebe",
    image: "/entregavel_1.png",
  },
  {
    icon: <Book className="h-12 w-12 text-azul-profundo" />,
    title: "Planner do Filho Atípico — 90 Dias",
    description: (
      <>
        <p className="mb-2">4 versões diferentes:</p>
        <ul className="space-y-1 font-body text-sm md:text-base">
          <li className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-azul-profundo" /> Suporte 1 (verbal, alta funcionalidade)
          </li>
          <li className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-amarelo-sol" /> Suporte 2 (verbal limitada, médio suporte)
          </li>
          <li className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-coral-quente" /> Suporte 3 (não verbal, alto suporte)
          </li>
          <li className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-rosa-suave" /> Meninas no espectro
          </li>
        </ul>
        <p className="mt-2 text-sm text-cinza-cuidado">
          PDF imprimível + versão editável
        </p>
      </>
    ),
    valor: "R$ 97",
    mockupBg: "bg-rosa-suave",
    image: "/entregavel_2.png",
  },
  {
    icon: <Palette className="h-12 w-12 text-azul-profundo" />,
    title: "Kit de 100 Atividades Práticas",
    description: (
      <ul className="space-y-1 font-body text-sm md:text-base">
        <li>Categorizadas por idade (2-4 / 5-7 / 8-10 anos)</li>
        <li>Por área (fala, motor, sensorial, cognitivo, social)</li>
        <li>Vídeos curtos demonstrativos</li>
      </ul>
    ),
    valor: "R$ 147",
    mockupBg: "bg-amarelo-sol",
    image: "/entregavel_3.png",
  },
  {
    icon: <MessageCircle className="h-12 w-12 text-azul-profundo" />,
    title: "Comunidade Círculo Mãe Atípica",
    description: (
      <>
        <p className="mb-2 text-sm font-semibold text-azul-profundo">
          (plano completo)
        </p>
        <ul className="space-y-1 font-body text-sm md:text-base">
          <li>Grupo privado mediado pela especialista</li>
          <li>Lives semanais</li>
          <li>Trocas reais entre mães</li>
        </ul>
      </>
    ),
    valor: "R$ 97/mês",
    mockupBg: "bg-lilas-calmo",
    image: "/entregavel_4.png",
  },
];

export default function WhatYouGet() {
  return (
    <SectionContainer bgClassName="bg-branco-nuvem">
      <FadeInOnScroll>
        <h2 className="text-center font-hero text-3xl text-azul-profundo md:text-4xl">
          Tudo que vai chegar nas suas mãos:
        </h2>
      </FadeInOnScroll>

      <div className="mt-10 space-y-5 md:mt-14 md:space-y-6">
        {DELIVERABLES.map((item, idx) => (
          <FadeInOnScroll key={item.title} delay={idx * 0.08}>
            <Card className="grid items-center gap-6 md:grid-cols-[320px_1fr_auto] md:gap-10">
              {/* Mockup */}
              <div
                role="img"
                aria-label={`Mockup do entregável: ${item.title}`}
                className={`relative flex h-48 items-center justify-center overflow-hidden rounded-card ${item.mockupBg} shadow-soft md:h-56`}
              >
                <Image
                  src={item.image}
                  alt={`Mockup de ${item.title}`}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Conteúdo */}
              <div>
                <h3 className="mb-2 font-hero text-xl text-azul-profundo md:text-2xl">
                  {item.title}
                </h3>
                <div className="font-body text-cinza-cuidado">
                  {item.description}
                </div>
              </div>

              {/* Valor riscado */}
              <div className="flex shrink-0 flex-col items-start gap-1 md:items-end">
                <span className="text-xs font-semibold uppercase tracking-wide text-cinza-cuidado">
                  Valor de mercado
                </span>
                <span className="font-display text-xl font-bold text-cinza-cuidado line-through decoration-coral-quente decoration-2">
                  {item.valor}
                </span>
              </div>
            </Card>
          </FadeInOnScroll>
        ))}
      </div>
    </SectionContainer>
  );
}
