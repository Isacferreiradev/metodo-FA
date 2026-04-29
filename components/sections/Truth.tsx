import SectionContainer from "@/components/ui/SectionContainer";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import Card from "@/components/ui/Card";
import { config } from "@/lib/config";

export default function Truth() {
  return (
    <SectionContainer bgClassName="bg-azul-bebe" innerClassName="max-w-3xl">
      <FadeInOnScroll>
        <Card className="space-y-5 text-center md:p-12">
          <p className="font-display text-lg font-semibold text-azul-profundo md:text-xl">
            A maioria das mães acha que precisa de terapia cara, escola especial
            ou método importado pra ajudar o filho.
          </p>

          <p className="font-body text-base leading-relaxed text-cinza-cuidado md:text-lg">
            A verdade é que{" "}
            <strong className="font-semibold text-azul-profundo">
              80% do que faz seu filho avançar acontece em casa, todos os dias,
              em pequenos momentos.
            </strong>{" "}
            E ninguém te ensina isso no consultório.
          </p>

          <p className="font-body text-base leading-relaxed text-cinza-cuidado md:text-lg">
            O Método {config.especialista.nome} foi desenvolvido pra mãe nenhuma
            precisar mais sair do diagnóstico sem saber o que fazer no dia
            seguinte.
          </p>
        </Card>
      </FadeInOnScroll>
    </SectionContainer>
  );
}
