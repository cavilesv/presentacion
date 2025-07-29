'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Habilidad = { nivel: number };

const Niveles = React.memo(function Niveles({ habilidadesTecnicas }: { habilidadesTecnicas: Habilidad[] }) {
  return (
    <div className="grid grid-rows-9 w-full h-full">
      {habilidadesTecnicas.map(({ nivel }, index) => (
        <div key={index} className="grid grid-cols-8 h-full items-center">
          <div className={`col-span-${nivel} h-full text-center`}>
            <motion.div
              initial={{ opacity: 0.25, width: '0%' }}
              animate={{ opacity: 0.8, width: '100%' }}
              transition={{ duration: 2, delay: index * 0.25 }}
              className="w-full h-full border"
              style={{
                background: 'linear-gradient(to right, #a0befcff, #6b93e4ff , #4d65c5ff)'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
});

export default Niveles;