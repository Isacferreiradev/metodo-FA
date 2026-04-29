import SectionContainer from "@/components/ui/SectionContainer";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import CTAButton from "@/components/ui/CTAButton";
import { config } from "@/lib/config";
import Image from "next/image";

export default function FinalLetter() {
  return (
    <SectionContainer bgClassName="bg-lilas-calmo/30" innerClassName="max-w-3xl">
      <FadeInOnScroll>
        <article className="rounded-card border-2 border-white bg-white p-7 shadow-soft md:p-12">
          <header className="mb-6 flex items-center gap-4 border-b-2 border-lilas-calmo/20 pb-6">
            <div
              className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-azul-bebe shadow-soft"
            >
              <Image
                src={config.especialista.foto}
                alt={`Foto de ${config.especialista.nome}`}
                fill
                className="object-cover object-top"
              />
            </div>
            <h2 className="font-hero text-2xl text-azul-profundo md:text-3xl">
              Uma carta pra você, mãe.
            </h2>
          </header>

          <div className="space-y-5 font-body text-base leading-relaxed text-cinza-cuidado md:text-lg">
            <p>Mãe que está lendo isso até aqui,</p>

            <p>
              Eu sei o que é ouvir um diagnóstico e sair do consultório sem
              chão. Eu sei o que é passar a noite no celular pesquisando, e
              acordar mais perdida que dormiu.
            </p>

            <p>
              Eu criei esse método porque, depois de atender centenas de mães
              como você, percebi que o problema nunca foi falta de amor. O amor
              sempre tem. O que falta é{" "}
              <strong className="font-semibold text-azul-profundo">
                um caminho prático que respeite sua rotina, seu bolso e seu
                cansaço.
              </strong>
            </p>

            <p>
              Não vou te prometer que seu filho vai falar em 30 dias, porque eu
              não sei isso e ninguém sabe. Mas posso te prometer uma coisa: em 7
              dias aplicando o que tá aqui dentro, você vai começar a entender
              seu filho de um jeito que você ainda não entende hoje. E isso muda
              tudo.
            </p>

            <p>Você não precisa fazer isso sozinha. Vem.</p>

            <p className="font-display italic text-azul-profundo">
              — {config.especialista.nome}
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <CTAButton href="#planos" size="xl">
              Ver Planos Disponíveis
            </CTAButton>
          </div>
        </article>
      </FadeInOnScroll>
    </SectionContainer>
  );
}
