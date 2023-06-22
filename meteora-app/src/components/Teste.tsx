"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Item = {
  id: string;
  subtitle: string;
  title: string;
};

export function Teste() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const items: Item[] = [
    {
      id: "1",
      subtitle: "Subtitle 1",
      title: "Title 1",
    },
    {
      id: "2",
      subtitle: "Subtitle 2",
      title: "Title 2",
    },
    {
      id: "3",
      subtitle: "Subtitle 3",
      title: "Title 3",
    },
  ];

  return (
    <>
      {items.map((item: Item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>
              {items.find((item) => item.id === selectedId)?.subtitle}
            </motion.h5>
            <motion.h2>
              {items.find((item) => item.id === selectedId)?.title}
            </motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>
              Fechar
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
