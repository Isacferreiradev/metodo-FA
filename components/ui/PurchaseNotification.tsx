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

      // Esconde após 4 segundos
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Primeira execução
    const firstTimeout = setTimeout(showNotification, 5000);

    // Loop a cada 10 segundos
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
          initial={{ opacity: 0, x: 50, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed bottom-4 right-4 z-[100] flex items-center gap-3 overflow-hidden rounded-2xl border border-white/20 bg-white/80 p-3 shadow-soft-lg backdrop-blur-md md:bottom-8 md:right-8 md:p-4"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-verde-menta/20 text-verde-menta">
            <ShoppingCart className="h-5 w-5" />
          </div>
          
          <div className="flex flex-col">
            <p className="font-display text-sm font-bold text-azul-profundo">
              {currentNotification.name}
            </p>
            <p className="font-body text-xs text-cinza-cuidado">
              acabou de comprar <span className="font-semibold text-azul-profundo">{currentNotification.product}</span>
            </p>
            <p className="mt-1 font-body text-[10px] text-verde-menta font-medium">
              há poucos segundos
            </p>
          </div>
          
          <div className="absolute top-0 right-0 h-1 w-full bg-verde-menta/10">
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
