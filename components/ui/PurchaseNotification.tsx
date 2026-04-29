"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const NAMES = [
  "Ana Paula", "Maria Eduarda", "Juliana Silva", "Fernanda Costa", "Aline Oliveira",
  "Patrícia Souza", "Bruna Santos", "Camila Pereira", "Débora Rodrigues", "Letícia Lima",
  "Vanessa Ferreira", "Renata Alves", "Beatriz Machado", "Priscila Ramos", "Roberta Cavalcanti",
  "Sandra Helena", "Tânia Mara", "Vera Lúcia", "Sônia Regina", "Mônica Aparecida",
  "Luciana Melo", "Eliana Guimarães", "Márcia Valéria", "Cláudia Maria", "Simone Cristina",
  "Cristiane Lopes", "Daniela Freitas", "Érika Nobre", "Flávia Bernardes", "Gláucia Souza",
  "Helena de Fátima", "Inês Aparecida", "Joana D'Arc", "Karine Menezes", "Luísa Fernanda",
  "Marta Suplicy", "Neide Maria", "Olívia Mendes", "Paula Roberta", "Raquel Silva",
  "Silvana Bento", "Tereza Cristina", "Úrsula Maria", "Valéria Lúcia", "Wanda Gouveia",
  "Yara Flor", "Zélia Maria", "Adriana Lima", "Andreia Rocha", "Bianca Andrade",
  "Carina Marques", "Denise Dias", "Elaine Souza", "Fabiana Melo", "Gisele Bündchen",
  "Heloísa Helena", "Ivone Garcia", "Jaqueline Silva", "Kelly Key", "Larissa Manoela"
];

const PRODUCTS = [
  "Plano Essencial",
  "Plano Completo",
];

export default function PurchaseNotification() {
  const [currentNotification, setCurrentNotification] = useState<{ name: string; product: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      const randomProduct = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)];

      setCurrentNotification({ name: randomName, product: randomProduct });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    const firstTimeout = setTimeout(showNotification, 5000);
    const interval = setInterval(showNotification, 10000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && currentNotification && (
        <motion.div
          initial={{ opacity: 0, x: 30, y: 12 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 30 }}
          className="fixed bottom-3 right-3 z-[100] flex max-w-[260px] items-center gap-2 overflow-hidden rounded-xl border border-white/20 bg-white/85 p-2 shadow-soft-lg backdrop-blur-md sm:max-w-[280px] md:bottom-8 md:right-8 md:max-w-xs md:gap-3 md:rounded-2xl md:p-4"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-verde-menta/20 text-verde-menta md:h-10 md:w-10">
            <ShoppingCart className="h-3.5 w-3.5 md:h-5 md:w-5" />
          </div>

          <div className="flex min-w-0 flex-col">
            <p className="truncate font-display text-[11px] font-bold leading-tight text-azul-profundo md:text-sm">
              {currentNotification.name}
            </p>
            <p className="font-body text-[10px] leading-tight text-cinza-cuidado md:text-xs">
              comprou{" "}
              <span className="font-semibold text-azul-profundo">
                {currentNotification.product}
              </span>
            </p>
            <p className="mt-0.5 font-body text-[9px] font-medium text-verde-menta md:mt-1 md:text-[10px]">
              há poucos segundos
            </p>
          </div>

          <div className="absolute right-0 top-0 h-0.5 w-full bg-verde-menta/10 md:h-1">
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
              className="h-full bg-verde-menta"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
