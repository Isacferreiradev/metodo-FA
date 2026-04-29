import type { Metadata } from "next";
import { Fredoka, Quicksand, Nunito } from "next/font/google";
import Script from "next/script";
import { config as siteConfig } from "@/lib/config";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-fredoka",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Filho Atípico, Caminho Possível — Método para Mães de Filhos Autistas",
  description:
    "O método que ensina mães de filhos autistas a aplicar técnicas práticas em casa em 7 dias. Acesso imediato por R$ 17,90.",
  openGraph: {
    title: "Filho Atípico, Caminho Possível",
    description:
      "Em 7 dias, você vai saber exatamente como agir com seu filho atípico — sem terapia particular, sem método importado, sem promessa de cura.",
    images: ["/og-image.png"],
    type: "website",
    locale: "pt_BR",
  },
};

// INSERIR PIXEL META AQUI — preencher metaPixelId em lib/config.ts
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${fredoka.variable} ${quicksand.variable} ${nunito.variable}`}
    >
      <body>
        {children}
        {siteConfig.metaPixelId && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${siteConfig.metaPixelId}');
              fbq('track', 'PageView');`}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${siteConfig.metaPixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
