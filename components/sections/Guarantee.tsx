import SectionContainer from "@/components/ui/SectionContainer";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import IconCircle from "@/components/ui/IconCircle";
import { ShieldCheck, Sprout, Handshake, Heart } from "lucide-react";

const GUARANTEES = [
  {
    icon: <ShieldCheck />,
    title: "Garantia Total",
    text: "7 dias incondicional. Testou e não serviu? Devolvemos integralmente, sem perguntas.",
    tone: "verde" as const,
  },
  {
    icon: <Sprout />,
    title: "Garantia da Primeira Conexão",
    text: "Se em 7 dias aplicando o método você não tiver visto seu filho responder de uma forma nova, devolvemos seu dinheiro e você fica com o material.",
    tone: "azul" as const,
  },
  {
    icon: <Handshake />,
    title: "Garantia da Rede",
    text: "Você nunca mais vai estar sozinha nessa caminhada. Se em 7 dias na comunidade você se sentir desamparada, devolvemos sua entrada.",
    tone: "rosa" as const,
  },
];

export default function Guarantee() {
  return (
    <SectionContainer bgClassName="bg-verde-menta/30">
      <FadeInOnScroll>
        <h2 className="text-center font-hero text-3xl text-azul-profundo md:text-4xl">
          Garantia Tripla Mãe Atípica
        </h2>
      </FadeInOnScroll>

      <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
        {GUARANTEES.map((g, idx) => (
          <FadeInOnScroll key={g.title} delay={idx * 0.1}>
            <div className="flex h-full flex-col items-start gap-4 rounded-card border-2 border-white bg-white p-7 shadow-soft transition-all hover:shadow-soft-lg md:p-8">
              <IconCircle tone={g.tone} size="lg" className="bg-branco-nuvem">
                {g.icon}
              </IconCircle>
              <h3 className="font-hero text-xl text-azul-profundo md:text-2xl">
                {g.title}
              </h3>
              <p className="font-body leading-relaxed text-cinza-cuidado">
                {g.text}
              </p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>

      <FadeInOnScroll delay={0.3}>
        <p className="mt-12 flex items-center justify-center gap-2 text-center font-hero text-2xl text-azul-profundo md:mt-14 md:text-3xl">
          O risco é nosso. A jornada é sua. <Heart className="h-6 w-6 fill-rosa-suave text-rosa-suave md:h-8 md:w-8" />
        </p>
      </FadeInOnScroll>
    </SectionContainer>
  );
}

