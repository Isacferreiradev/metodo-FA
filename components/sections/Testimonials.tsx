import SectionContainer from "@/components/ui/SectionContainer";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import { Heart } from "lucide-react";

interface Testimonial {
  initials: string;
  name: string;
  city: string;
  childInfo: string;
  text: string;
  avatarBg: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    initials: "C",
    name: "Carla",
    city: "São Paulo, SP",
    childInfo: "Mãe do Theo, 3 anos, suporte 2",
    text: "Foi a primeira vez em meses que eu dormi tranquila. Saber o que fazer no dia seguinte mudou tudo.",
    avatarBg: "bg-rosa-suave",
  },
  {
    initials: "J",
    name: "Júlia",
    city: "Curitiba, PR",
    childInfo: "Mãe do Bento, 4 anos, suporte 3",
    text: "Em 5 dias aplicando o método de imitação, ele apontou pra mim pela primeira vez. Eu chorei o dia inteiro.",
    avatarBg: "bg-amarelo-sol",
  },
  {
    initials: "R",
    name: "Renata",
    city: "Belo Horizonte, MG",
    childInfo: "Mãe da Alice, 5 anos, suporte 1",
    text: "Minha sogra finalmente entendeu meu filho depois que mostrei a carta-modelo. A relação dela com ele mudou completamente.",
    avatarBg: "bg-verde-menta",
  },
  {
    initials: "P",
    name: "Patrícia",
    city: "Recife, PE",
    childInfo: "Mãe do Davi, 6 anos, suporte 2",
    text: "Eu achei que tava sozinha nessa. A comunidade me devolveu a esperança que eu tinha perdido.",
    avatarBg: "bg-lilas-calmo",
  },
];

export default function Testimonials() {
  return (
    <SectionContainer bgClassName="bg-rosa-suave/30">
      <FadeInOnScroll>
        <h2 className="text-center font-hero text-3xl text-azul-profundo md:text-4xl">
          Histórias reais de mães que passaram por aí:
        </h2>
      </FadeInOnScroll>

      <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <FadeInOnScroll key={t.name} delay={idx * 0.08}>
            <div className="relative h-full rounded-card bg-branco-nuvem p-6 shadow-soft md:p-8">
              <Heart
                className="absolute right-5 top-5 h-6 w-6 fill-rosa-suave text-rosa-suave"
                aria-hidden="true"
              />

              <div className="flex items-center gap-4">
                <div
                  aria-hidden="true"
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${t.avatarBg} font-hero text-2xl text-azul-profundo`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-display font-bold text-azul-profundo">
                    {t.name} — {t.city}
                  </p>
                  <p className="text-sm text-cinza-cuidado">{t.childInfo}</p>
                </div>
              </div>

              <p className="mt-5 font-body italic leading-relaxed text-cinza-cuidado md:text-lg">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>

      <FadeInOnScroll delay={0.3}>
        <p className="mt-8 text-center font-body text-sm italic text-cinza-cuidado md:mt-10">
          [INSERIR DEPOIMENTOS REAIS — substituir os 4 placeholders acima por
          depoimentos reais coletados de alunas, mantendo o tom emocional focado
          em conexão e pequenas conquistas]
        </p>
      </FadeInOnScroll>
    </SectionContainer>
  );
}
