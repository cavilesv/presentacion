'use client';

import React, { useCallback, useEffect, useReducer } from "react";
import HabilidadesTecnicas from "./HabilidadesTecnicas";
import { motion, AnimatePresence } from 'framer-motion';

const presentacion = "Un cordial saludo, estoy buscando una oportunidad laboral en el ámbito de desarrollo de software. Me titulé de la carrera de ingenieria de ejecución en informática de la Universidad Católica de Valparaíso, tengo un año y medio de experiencia laboral en el área.";

const preloadIcons = () => {
  habilidadesBlandas.forEach(h => {
    const img = new Image();
    img.src = `iconos/${h.URLImagen}.png`;
  });
};

const habilidadesBlandas = [ { nombre: "Compromiso", descripcion: "Siempre busco rendir mi máximo, doy mi mejor esfuerzo ante cualquier tarea, con alta disposición y siempre intentando mejorar mi desempeño.", URLImagen: "compromiso" }, { nombre: "Perseverancia", descripcion: "Ante un problema de alta dificultad, siempre intento persistir en la búsqueda de su solución, aunque considerando las alternativas y sin perder la noción del tiempo.", URLImagen: "perseverancia" }, { nombre: "Trabajo bajo presión", descripcion: "Puedo manejar con calma las situaciones de alto estrés, así como también las tareas múltiples, logrando dividir mi atención de manera bastante eficiente.", URLImagen: "multitarea" }, { nombre: "Trabajo en equipo", descripcion: "Mantengo una actitud de apoyo mutuo hacia mis compañeros, mostrando disposición a colaborar y recibir ayuda para lograr los objetivos en cada situación.", URLImagen: "equipo" }, { nombre: "Adaptabilidad", descripcion: "Al verme en la necesidad de utilizar una nueva herramienta tengo bastante facilidad para aprenderla y lograr buenos resultados.", URLImagen: "adaptabilidad" } ];

type Estado = {
  activo: number | null;
  descripcion: string;
  imagen: string;
  posicion: number;
};

type Accion =
  | { type: 'HOVER_IN'; index: number }
  | { type: 'HOVER_OUT' };

const initialState: Estado = {
  activo: 0,
  descripcion: habilidadesBlandas[0]["descripcion"],
  imagen: habilidadesBlandas[0]["URLImagen"],
  posicion: 0
};

const reducer = (state: Estado, action: Accion): Estado => {
  switch (action.type) {
    case 'HOVER_IN': {
      const habilidad = habilidadesBlandas[action.index];
      return {
        activo: action.index,
        descripcion: habilidad.descripcion,
        imagen: habilidad.URLImagen,
        posicion: action.index * 37.5
      };
    }
    case 'HOVER_OUT':
      return initialState;
  }
};

type HabilidadItemProps = {
  habilidad: typeof habilidadesBlandas[number];
  index: number;
  activo: number | null;
  onHoverIn: (i: number) => void;
  onHoverOut: () => void;
};

const HabilidadItem = React.memo(
  ({ habilidad, index, activo, onHoverIn, onHoverOut }: HabilidadItemProps) => (
    <li
      onMouseEnter={() => onHoverIn(index)}
      onMouseLeave={onHoverOut}
      className="w-full h-full grid items-center justify-center transition-colors"
    >
      <div className={`text-center w-65 rounded me-25 ${activo === index ? 'bg-blue-600 font-bold text-white' : ''}`}>
        {habilidad.nombre}
      </div>
    </li>
  )
);

export default function Home() {
  const [estado, dispatch] = useReducer(reducer, initialState);
  const posicionTransform = estado.posicion;

  useEffect(() => {
    preloadIcons();
  }, []);

  const handleHoverIn = useCallback((index: number) => {
    dispatch({ type: 'HOVER_IN', index });
  }, []);

  const handleHoverOut = useCallback(() => {
    dispatch({ type: 'HOVER_OUT' });
  }, []);

  return (
    <div className="grid grid-rows-[20%_80%] justify-items-center w-full h-full">

      <header className="w-full h-full">
        <div className="grid h-full px-25 py-3">
          <p className="flex h-full w-full justify-center items-center">
           {presentacion}
          </p>
        </div>
      </header>

      <main className="flex items-center sm:items-start w-full h-full max-h-[100%] min-h-[100%]">
        <div className="grid grid-rows-[40%_60%] w-full h-full">

          <div className="grid grid-cols-[30%_70%] w-full h-full">
            <div className="grid grid-rows-[10%_90%] w-full h-full">
              <div className="grid bg-gray-300 justify-center items-center rounded w-[60%] m-auto">
                <h2 className="font-bold">Habilidades</h2>
              </div>

              <div className="grid grid-cols-[20%_80%] items-center max-h-[100%] min-h-[100%]">
                <div className="h-full grid justify-center text-end">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[20%] w-[55%] mx-auto"
                    animate={{ translateY: posicionTransform }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                  >
                    <polygon
                      points="12,8 12,24 42,16"
                      fill="#0040ffff"
                      stroke="#193bffff"
                      strokeWidth={2}
                      style={{ filter: "drop-shadow(0 0 4px rgba(0,0,0,0.3))" }}
                    />
                  </motion.svg>
                </div>

                <ul className="grid h-full grid-rows-[repeat(N,_1fr)] items-center gap-0 text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] w-full m-0">
                  {habilidadesBlandas.map((habilidad, index) => (
                    <HabilidadItem
                      key={index}
                      habilidad={habilidad}
                      index={index}
                      activo={estado.activo}
                      onHoverIn={handleHoverIn}
                      onHoverOut={handleHoverOut}
                    />
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-[60%_40%] items-center justify-center w-full h-full">
              {/* Descripción con altura fija y overflow oculto */}
              <div className="grid justify-center items-center h-full">
                <div className="p-6 max-h-[100%] min-h-[100%] max-w-[100%] min-w-[100%] w-full overflow-hidden grid items-center">
                  <AnimatePresence mode="wait">
                    {estado.descripcion && (
                      <motion.p
                        className="text-center font-bold leading-tight"
                        initial={{ opacity: 0, translateY: "-30%" }}
                        animate={{ opacity: 1, translateY: "0%" }}
                        exit={{ opacity: 0, translateY: "30%" }}
                        transition={{ duration: 0.4 }}
                      >
                        {estado.descripcion}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Imagen con altura controlada */}
              <div className="grid justify-center items-center h-full">
                <div className="max-h-[150px] w-full overflow-hidden flex items-center justify-start">
                  <AnimatePresence mode="wait">
                    {estado.imagen && (
                      <motion.img
                        src={`iconos/${estado.imagen}.png`}
                        className="w-[70%] h-auto max-h-[100px] object-contain me-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[30%_70%] grid-rows-[90%_10%] w-full h-full">
            <HabilidadesTecnicas />
          </div>

        </div>
      </main>
    </div>
  );
}
