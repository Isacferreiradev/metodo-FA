import SectionContainer from "@/components/ui/SectionContainer";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import IconCircle from "@/components/ui/IconCircle";
import Image from "next/image";
import { 
  FileText, 
  Stethoscope, 
  ToyBrick, 
  BookOpen, 
  Headphones,
  Gift
} from "lucide-react";

const BONUSES = [
  {
    icon: <FileText />,
    title: "Carta-modelo pra Escola",
    description:
      "O documento que você entrega pra escola explicando exatamente como seu filho funciona, o que ele precisa e como agir nas crises.",
    tone: "azul" as const,
    image: "/bonus_1.png",
  },
  {
    icon: <Stethoscope />,
    title: "Roteiro do Médico",
    description:
      "As 23 perguntas que você precisa fazer no neuropediatra, terapeuta ocupacional e fonoaudióloga (e que ninguém te ensinou).",
    tone: "verde" as const,
    image: "/bonus_2_new.png",
  },
  {
    icon: <ToyBrick />,
    title: "Kit Sensorial Caseiro",
    description:
      "Como montar um kit de regulação sensorial gastando menos de R$ 50, com itens da farmácia e bazar.",
    tone: "amarelo" as const,
    image: "/bonus_3.png",
  },
  {
    icon: <BookOpen />,
    title: "Glossário Sem Frescura",
    description:
      "O que significa cada termo que os médicos falam (TEA, ABA, TO, TCC, DI, comorbidade, suporte 1/2/3) explicado em português claro.",
    tone: "lilas" as const,
    image: "/bonus_4.png",
  },
  {
    icon: <Headphones />,
    title: "Áudios Pra Mãe Sobreviver",
    description:
      "7 áudios curtos da especialista pra você ouvir nos dias difíceis. Quando bater culpa, quando bater medo, quando bater exaustão.",
    tone: "rosa" as const,
    image: "/bonus_5_v2.png",
  },
];

export default function Bonuses() {
  return (
    <SectionContainer bgClassName="bg-amarelo-sol/30">
      <FadeInOnScroll>
        <h2 className="flex items-center justify-center gap-3 text-center font-hero text-3xl text-azul-profundo md:text-4xl">
          <Gift className="h-8 w-8 text-coral-quente" /> Bônus que vão fazer parte da sua jornada:
        </h2>
      </FadeInOnScroll>

      <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
        {BONUSES.map((bonus, idx) => (
          <FadeInOnScroll
            key={bonus.title}
            delay={idx * 0.08}
            className={idx === 3 ? "md:col-start-1" : ""}
          >
            <div className="flex h-full flex-col overflow-hidden rounded-card bg-white shadow-soft transition-all hover:shadow-soft-lg">
              <div className="flex h-full flex-col gap-6 p-6 md:p-8">
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-4">
                  <IconCircle tone={bonus.tone} size="md" className="bg-branco-nuvem">
                    {bonus.icon}
                  </IconCircle>
                  <div className="flex flex-col">
                    <span className="font-display text-xs font-bold uppercase tracking-widest text-azul-profundo/40">
                      Bônus {idx + 1}
                    </span>
                    <h3 className="font-hero text-xl text-azul-profundo md:text-2xl">
                      {bonus.title}
                    </h3>
                  </div>
                </div>

                {/* Imagem do Bônus ou Placeholder Visual */}
                <div className={`relative aspect-square w-full overflow-hidden rounded-card ${bonus.image === '/bonus_placeholder.png' ? 'bg-branco-nuvem/30 flex items-center justify-center' : 'bg-white'}`}>
                  {bonus.image !== '/bonus_placeholder.png' ? (
                    <Image
                      src={bonus.image}
                      alt={`Mockup de ${bonus.title}`}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 opacity-20">
                      {bonus.icon}
                      <span className="font-display text-xs font-bold uppercase tracking-widest">Mockup em breve</span>
                    </div>
                  )}
                </div>

                {/* Descrição */}
                <p className="font-body italic leading-relaxed text-cinza-cuidado md:text-lg">
                  &ldquo;{bonus.description}&rdquo;
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </SectionContainer>
  );
}

