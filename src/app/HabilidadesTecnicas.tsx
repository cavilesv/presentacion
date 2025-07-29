'use client';

import React, { JSX, useCallback, useReducer, useState } from "react";
import { EstadoHover, Accion } from './TiposHover';

import Niveles from './Niveles';
import Descripciones from './Descripciones';

export default function HabilidadesTecnicas() {
  const habilidadesTecnicas = [
    { nombre: "PHP", nivel: 4, descripcion: "Adquirí sólida experiencia en este lenguaje, principalmente a través de mi experiencia ganada en la Universidad Católica como programador." },
    { nombre: "SQL", nivel: 5, descripcion: "Tengo conocimientos en lenguajes como MySQL, Sybase y PostgreSQL." },
    { nombre: "JavaScript", nivel: 3, descripcion: "Adquirí sólida experiencia en este lenguaje, principalmente a través de mi experiencia en un proyecto de migración." },
    { nombre: "Angular", nivel: 2, descripcion: "He aprendido Angular en base a experiencia práctica personal y también se me enseñó en la universidad." },
    { nombre: "Laravel", nivel: 2, descripcion: "He aprendido Laravel en base a experiencia práctica personal y en base a tutoriales y lectura de documentación." },
    { nombre: "TypeScript", nivel: 2, descripcion: "He aprendido a utilizar este lenguaje junto con frameworks como Angular y React. Se me enseñó en la universidad y he ampliado mis conocimientos por cuenta propia." },
    { nombre: "C#", nivel: 1, descripcion: "Aprendí a utilizar este lenguaje en la universidad, principalmente en cursos como programación avanzada. También he ampliado mi experiencia practicando de manera autodidacta." },
    { nombre: "Java", nivel: 2, descripcion: "Me enseñaron a usar Java en la universidad, fue el lenguaje con que se me impartieron cursos como Programación orientada a objetos." },
    { nombre: "Python", nivel: 3, descripcion: "Aprendí a utilizar Python en un curso que tuve en la Universidad Federico Santa María, y luego mejoré mi experiencia con este lenguaje en un diplomado de inteligencia artificial que cursé." }
  ];

  const [contadorReanimacion, setContadorReanimacion] = useState(1);
  const [posicionPuntero, setPosicionPuntero] = useState(0);
  const [panelSeleccionado, setPanelSeleccionado] = useState(1);
  const [indiceHabilidadTecnica, setIndiceHabilidadTecnica] = useState(1);

  const reducerHabilidadesTecnicas = (state: EstadoHover, action: Accion): EstadoHover => {
    const valor = action.type === 'HOVER_IN';

    if (action.type === 'HOVER_IN') {
      setPanelSeleccionado(2);
      setPosicionPuntero(action.index * 55);
      setIndiceHabilidadTecnica(action.index);
      setContadorReanimacion(prev => -prev);
    } else {
      setPanelSeleccionado(1);
    }

    return { ...state, [action.index]: valor };
  };

  const [estadoHoverHTecnicas, dispatchHTecnicas] = useReducer(reducerHabilidadesTecnicas, {});

  const handleHoverIn = useCallback((index: number) => {
    dispatchHTecnicas({ type: 'HOVER_IN', index });
  }, []);

  const handleHoverOut = useCallback((index: number) => {
    dispatchHTecnicas({ type: 'HOVER_OUT', index });
  }, []);

  const componentesHabilidadesTecnicas: Record<number, JSX.Element> = {
    1: <Niveles habilidadesTecnicas={habilidadesTecnicas} />,
    2: <Descripciones habilidadesTecnicas={habilidadesTecnicas} indiceHabilidadTecnica={indiceHabilidadTecnica} contadorReanimacion={contadorReanimacion} />
  };

  return (
    <>
      <div className="grid grid-rows-[10%_90%] min-w-[100%] max-w-[100%] min-h-[100%]">
        <div className="grid bg-gray-300 justify-center items-center rounded w-[60%] m-auto">
          <h2 className="font-bold">Habilidades técnicas</h2>
        </div>

        <div className="justify-center items-center p-0 grid grid-cols-[20%_80%]">
          <div className="h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="min-h-[20%] h-[20%] max-h-[20%] w-[55%] mx-auto"
              style={{
                transform: `translateY(${posicionPuntero}%)`,
                transition: 'transform 0.2s ease-in-out'
              }}
            >
              <polygon
                points="12,8 12,24 42,16"
                fill="#0040ffff"
                stroke="#193bffff"
                strokeWidth={2}
                style={{ filter: "drop-shadow(0 0 4px rgba(0, 0, 0, 0.3))" }}
              />
            </svg>
          </div>

          <ul className="grid h-full grid-rows-[repeat(N,_1fr)] items-center gap-0 min-w-full text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] max-w-[100%] min-w-[100%] m-0">
            {habilidadesTecnicas.map((habilidadTecnica, index) => (
              <li
                key={index}
                onMouseEnter={() => handleHoverIn(index)}
                onMouseLeave={() => handleHoverOut(index)}
                className="w-full m-0 h-full grid items-center justify-center transition-colors"
              >
                <div className={`${estadoHoverHTecnicas[index] ? 'bg-blue-600 font-bold text-white' : ''} text-center w-65 rounded me-25`}>
                  {habilidadTecnica.nombre}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-rows-[10%_90%] w-full h-full">
        <div className="grid grid-cols-[20%_20%] h-full w-full justify-evenly">{/* pestañas ocultas */}</div>
        <div className="grid items-center">{componentesHabilidadesTecnicas[panelSeleccionado]}</div>
      </div>

      <div className="grid col-span-2 items-center grid-cols-[30%_70%] gap-0">
        <div className="h-full grid justify-end">
          <div
            className="grid justify-center items-center h-full font-bold rounded-bl-3xl w-119 mt-2"
            style={{
              background: "linear-gradient(to right, #383736ff, #a4a4a4ff, #b0b0b0ff)",
              color: "white"
            }}
          >
            Nivel
          </div>
        </div>

        <div className="grid grid-cols-[25%_25%_25%_25%] justify-center items-center h-full mt-4">
          <div className="grid h-full justify-center items-center font-bold border border-gold-300" style={{ background: "linear-gradient(to right, #b6b6b6ff, #b2b2b2ff, #b0b0b0ff)", color: "white" }}>Básico</div>
          <div className="grid h-full justify-center items-center font-bold border border-gold-300" style={{ background: "linear-gradient(to right, #b6b6b6ff, #b2b2b2ff, #b0b0b0ff)", color: "white" }}>Intermedio</div>
          <div className="grid h-full justify-center items-center font-bold border border-gold-300" style={{ background: "linear-gradient(to right, #b6b6b6ff, #b2b2b2ff, #b0b0b0ff)", color: "white" }}>Avanzado</div>
          <div className="grid h-full justify-center items-center rounded-br-3xl font-bold border border-gold-300" style={{ background: "linear-gradient(to right, #b6b6b6ff, #b2b2b2ff, #b0b0b0ff)", color: "white" }}>Experto</div>
        </div>
      </div>
    </>
  );
}
