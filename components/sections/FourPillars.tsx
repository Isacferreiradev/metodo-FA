import SectionContainer from "@/components/ui/SectionContainer";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import Card from "@/components/ui/Card";
import IconCircle from "@/components/ui/IconCircle";
import { Search, MessageCircle, Clock, Users, Check } from "lucide-react";
import { PuzzleIcon, ChatBubbleIcon, HomeIcon } from "@/components/ui/CustomIcons";

type Tone = "rosa" | "amarelo" | "verde" | "azul" | "lilas";

interface Pillar {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tone: Tone;
  items: string[];
}

const PILLARS: Pillar[] = [
  {
    number: 1,
    title: "ENTENDER",
    subtitle: "Os Primeiros 30 Dias",
    description: "Decifre o que o diagnóstico significa de verdade — sem jargão.",
    icon: <Search className="h-10 w-10 text-azul-profundo" strokeWidth={2} />,
    tone: "azul",
    items: [
      "O que o diagnóstico significa de verdade (sem jargão técnico)",
      "Como decifrar a comunicação do seu filho (mesmo que ele não fale)",
      "Mapa de gatilhos sensoriais",
      "O que dizer pra família que não entende",
    ],
  },
  {
    number: 2,
    title: "COMUNICAR",
    subtitle: "Desenvolvendo a Fala e a Conexão",
    description: "Técnicas práticas pra estimular fala e conexão no dia a dia.",
    icon: <ChatBubbleIcon className="h-10 w-10 text-azul-profundo" />,
    tone: "rosa",
    items: [
      'Técnica de "mando" — como fazer ele pedir o que quer',
      "PECS caseiro (pranchas de comunicação visual)",
      "O método das 5 imitações diárias que aceleram a fala",
      "Como transformar qualquer brincadeira em estímulo de linguagem",
    ],
  },
  {
    number: 3,
    title: "ROTINAR",
    subtitle: "Eliminando Crises e Birras",
    description: "Estruture rotinas que reduzem birra e crise sensorial.",
    icon: <Clock className="h-10 w-10 text-azul-profundo" strokeWidth={2} />,
    tone: "amarelo",
    items: [
      "Rotina visual que reduz birra em até 70%",
      "Antecipação: a técnica que evita 80% das crises sensoriais",
      "Transições sem drama (sair de casa, banho, dormir)",
      "Kit de regulação que toda mãe atípica precisa ter",
    ],
  },
  {
    number: 4,
    title: "SOCIALIZAR",
    subtitle: "Escola, Família, Mundo",
    description: "Prepare seu filho (e quem está em volta) pra cada ambiente.",
    icon: <HomeIcon className="h-10 w-10 text-azul-profundo" />,
    tone: "lilas",
    items: [
      "Como escolher escola (sinais de escola que não vai funcionar)",
      "Carta-modelo pra entregar pra escola",
      "Como preparar visitas à casa de avós, primos, parques",
      "Lidando com olhares julgadores em público",
    ],
  },
];

export default function FourPillars() {
  return (
    <SectionContainer bgClassName="bg-azul-bebe">
      <FadeInOnScroll>
        <h2 className="text-center font-hero text-3xl text-azul-profundo md:text-4xl">
          O Método em 4 Pilares Práticos
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center font-body text-base text-cinza-cuidado md:text-lg">
          Cada pilar é simples, prático e cabe na rotina que você já tem.
        </p>
      </FadeInOnScroll>

      <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
        {PILLARS.map((pillar, idx) => (
          <FadeInOnScroll key={pillar.number} delay={idx * 0.1}>
            <Card className="flex h-full flex-col gap-5">
              <div className="flex items-center gap-4">
                <IconCircle tone={pillar.tone} size="lg" className="bg-white">
                  {pillar.icon}
                </IconCircle>
                <span className="rounded-pill bg-azul-bebe px-3 py-1 font-display text-sm font-bold text-azul-profundo">
                  Pilar {pillar.number}
                </span>
              </div>

              <div>
                <h3 className="font-hero text-2xl text-azul-profundo md:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-1 font-display text-base font-semibold text-cinza-cuidado md:text-lg">
                  {pillar.subtitle}
                </p>
              </div>

              <p className="font-body text-base leading-relaxed text-cinza-cuidado">
                {pillar.description}
              </p>

              <ul className="mt-2 space-y-2.5">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-verde-menta">
                      <Check className="h-3.5 w-3.5 text-azul-profundo" strokeWidth={3} />
                    </span>
                    <span className="font-body text-sm text-cinza-cuidado md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeInOnScroll>
        ))}
      </div>
    </SectionContainer>
  );
}

