import SectionContainer from "@/components/ui/SectionContainer";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import IconCircle from "@/components/ui/IconCircle";
import { 
  ClipboardList, 
  Search, 
  Compass, 
  Users2, 
  HeartCrack, 
  CloudRain,
  Heart
} from "lucide-react";

const PAIN_POINTS = [
  { icon: <ClipboardList />, text: "Você sai do consultório com um diagnóstico e zero plano de ação" },
  { icon: <Search />, text: "Todo profissional indica algo diferente, e tudo custa caro" },
  { icon: <Compass />, text: "Você passa horas na internet pesquisando e fica mais confusa que antes" },
  { icon: <Users2 />, text: "Sua família não entende, te dá palpite errado, ou pior: nega o diagnóstico" },
  { icon: <HeartCrack />, text: "Você se cobra por não saber se conectar com seu próprio filho" },
  { icon: <CloudRain />, text: "Você se sente sozinha, mesmo cercada de gente" },
];

export default function PainRecognition() {
  return (
    <SectionContainer bgClassName="bg-branco-nuvem">
      <FadeInOnScroll>
        <h2 className="mx-auto max-w-3xl text-center font-hero text-2xl leading-snug text-azul-profundo md:text-4xl">
          Se você recebeu o diagnóstico recentemente, talvez você esteja sentindo isso aqui:
        </h2>
      </FadeInOnScroll>

      <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6">
        {PAIN_POINTS.map((point, idx) => (
          <FadeInOnScroll key={point.text} delay={idx * 0.05}>
            <div className="flex items-center gap-4 rounded-card bg-rosa-suave/30 p-5 shadow-soft transition-all hover:bg-rosa-suave/40 md:p-6">
              <IconCircle tone="rosa" size="md" className="bg-white text-azul-profundo">
                {point.icon}
              </IconCircle>
              <p className="font-body text-base leading-relaxed text-cinza-cuidado md:text-lg">
                {point.text}
              </p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>

      <FadeInOnScroll delay={0.2}>
        <p className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-2 text-center font-hero text-2xl leading-snug text-azul-profundo md:mt-16 md:text-3xl">
          Você não está sozinha. E você não fez nada errado. <Heart className="h-6 w-6 fill-rosa-suave text-rosa-suave md:h-8 md:w-8" />
        </p>
      </FadeInOnScroll>
    </SectionContainer>
  );
}

