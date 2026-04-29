import { config } from "@/lib/config";
import { Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-cinza-suave bg-branco-nuvem px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        {/* Logo placeholder */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🤍</span>
          <span className="font-hero text-xl text-azul-profundo">
            Filho Atípico, Caminho Possível
          </span>
        </div>

        {/* Email */}
        <a
          href={`mailto:${config.contatoEmail}`}
          className="inline-flex items-center gap-2 font-body text-sm text-cinza-cuidado hover:text-azul-profundo md:text-base"
        >
          <Mail className="h-4 w-4" />
          {config.contatoEmail}
        </a>

        {/* Links legais */}
        <nav aria-label="Links institucionais">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-body text-sm text-cinza-cuidado">
            <li>
              <a href="#" className="hover:text-azul-profundo">
                Termos de Uso
              </a>
            </li>
            <li aria-hidden="true">·</li>
            <li>
              <a href="#" className="hover:text-azul-profundo">
                Política de Privacidade
              </a>
            </li>
            <li aria-hidden="true">·</li>
            <li>
              <a href="#" className="hover:text-azul-profundo">
                Política de Reembolso
              </a>
            </li>
          </ul>
        </nav>

        {/* Disclaimer */}
        <p className="mx-auto max-w-2xl font-body text-xs italic leading-relaxed text-cinza-cuidado md:text-sm">
          Este material não substitui acompanhamento médico ou terapêutico
          profissional. É um complemento de apoio para mães e cuidadores.
        </p>

        <p className="font-body text-xs text-cinza-cuidado">
          Copyright © {year} — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
