'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type Habilidad = { nivel: number };

const colSpan = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
} as const;

const Niveles = React.memo(function Niveles({ habilidadesTecnicas }: { habilidadesTecnicas: Habilidad[] }) {
  return (
    <div className="grid grid-rows-9 w-full h-full">
      {habilidadesTecnicas.map(({ nivel }, index) => (
        <div key={index} className={clsx("grid grid-cols-8 h-full items-center")}>
          <motion.div 
            className={clsx(colSpan[nivel as keyof typeof colSpan], "h-[85%]")}
            initial={{ opacity: 0.25, width: '0%' }}
            animate={{ opacity: 0.75, width: '100%' }}
            transition={{ duration: 2, delay: index * 0.25 }}             
            style={{
              background: 'linear-gradient(to right, #a0befcff, #6b93e4ff , #4d65c5ff)'
            }}
          >            
          </motion.div>
        </div>
      ))}
    </div>
  );
});

export default Niveles;