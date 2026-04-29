import SectionContainer from "@/components/ui/SectionContainer";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import Image from "next/image";

const FAQS = [
  {
    q: "Funciona pra meu filho mesmo? Cada autismo é diferente.",
    a: "Sim. O método tem 4 versões do planner pra cada perfil de suporte (1, 2, 3 e meninas no espectro). As atividades são adaptáveis e a especialista te orienta na comunidade pra adequar ao seu filho específico.",
  },
  {
    q: "Eu não tenho tempo, vai funcionar pra mim?",
    a: "Sim. As técnicas foram desenhadas pra encaixar em 5–15 minutos por dia, dentro da rotina que você já tem. Não é mais uma coisa pra adicionar — é uma forma de fazer melhor o que você já faz.",
  },
  {
    q: "Já fiz curso de autismo antes, é a mesma coisa?",
    a: 'Não. A maioria dos cursos é teórica e pra profissionais. Esse método é prático, criado pra mães aplicarem em casa, sem precisar entender de neurologia. É o "como fazer", não o "o que é".',
  },
  {
    q: "E se meu filho tem suporte 3 (não verbal)?",
    a: "Tem versão específica do planner pra suporte 3, com foco em comunicação alternativa, regulação sensorial e construção de vínculo não-verbal.",
  },
  {
    q: "Vai substituir a terapeuta?",
    a: "Não, e não queremos isso. O método é complemento — pra você potencializar o trabalho dos terapeutas em casa, ou pra você ter um caminho enquanto consegue terapia.",
  },
  {
    q: "Como recebo o material?",
    a: "Acesso imediato após a compra, por email. Você entra na plataforma, baixa tudo e começa hoje mesmo.",
  },
  {
    q: "É realmente vitalício?",
    a: "Sim. Você paga uma vez e tem acesso pra sempre, incluindo atualizações futuras do material.",
  },
];

export default function FAQ() {
  return (
    <SectionContainer bgClassName="bg-branco-nuvem" innerClassName="max-w-3xl">
      <FadeInOnScroll>
        <h2 className="text-center font-hero text-3xl text-azul-profundo md:text-4xl">
          Perguntas que toda mãe me faz:
        </h2>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.1}>
        <div className="mt-10 md:mt-14">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, idx) => (
              <AccordionItem key={faq.q} value={`item-${idx}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <em>{faq.a}</em>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.2}>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-cinza-cuidado/10 pt-10">
          <div className="relative h-24 w-24 md:h-32 md:w-32">
            <Image
              src="/garantia_selo.png"
              alt="Selo de Garantia 7 Dias"
              fill
              className="object-contain"
            />
          </div>
          <p className="max-w-xs text-center font-display text-sm font-semibold text-azul-profundo/60">
            Sua compra é 100% segura e protegida por nossa garantia incondicional.
          </p>
        </div>
      </FadeInOnScroll>
    </SectionContainer>
  );
}
