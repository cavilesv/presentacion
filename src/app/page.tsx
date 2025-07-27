/* eslint-disable @typescript-eslint/no-unused-vars */


'use client';



import { useRef, useState } from "react";
import React, {useReducer} from 'react';
import HabilidadesTecnicas from "./HabilidadesTecnicas";
import {EstadoHover, Accion} from "./TiposHover";
import { motion } from 'framer-motion';





export default function Home() {

  const habilidadesBlandas = [
    {nombre: "Compromiso", descripcion: "Siempre cumplir el máximo posible, me esfuerzo por dar mi máximo ante cualquier tarea, mi disposición es alta y ante el compromiso de mis compañeros, mi desempeño es muy bueno", URLImagen: "compromiso"},
    {nombre: "Perseverancia", descripcion: "Insistir en la búsqueda del mejor resultado", URLImagen: "perseverancia"},
    {nombre: "Trabajo bajo presión", descripcion: "Trabajo entre múltiples tareas", URLImagen: "multitarea"},
    {nombre: "Trabajo en equipo", descripcion: "Colaborar con los compañeros", URLImagen: "equipo"},
    {nombre: "Adaptabilidad", descripcion: "Facilidad para aprender nuevas herramientas", URLImagen: "adaptabilidad"}
  ];

  

  //###################################################################################################################################################
  // LÓGICA DESCRIPCION HABILIDAD BLANDA ##############################################################################################################
  //###################################################################################################################################################
    
  const descripcionHBlandaRef = useRef(null);

  const [descripcionHBlanda, setDescripcionHBlanda] = useState("");

  //const [punteroSobreHabilidadBlanda, setearPunteroSobreHabilidadBlanda] = useState(false);

  const [imagenHBlanda, setURLImagenHBlanda] = useState("");

  //const [estaEnPosicionInicial, setEstaEnPosicionInicial] = useState(true);

  //const iconoHBlandaRef = useRef(null);


    const [contadorReanimacion, setContadorReanimacion] = useState(1);

  /* const mostrarDescripcionHabilidadBlanda = () => {
    
    setearPunteroSobreHabilidadBlanda(true);
  };

  const quitarDescripcionHabilidadBlanda = () => {
    setEstaEnPosicionInicial(false);
   
    setearPunteroSobreHabilidadBlanda(false);
  }; */

  //const [estaCambiandoEstado, setEstaCambiandoEstado] = useState(false);

  const reducerHabilidadesBlandas = (state: EstadoHover, action: Accion): EstadoHover => 
                  { 
                    let valor = false;
                    switch (action.type) 
                    { 
                      case 'HOVER_IN':                                        
                                       //setEstaEnPosicionInicial(false);
                                       valor = true;
                                       break; 

                      case 'HOVER_OUT': 
                                        if (contadorReanimacion == 0){
                                          setContadorReanimacion(1);
                                        }

                                        else {
                                          setContadorReanimacion(0);
                                        }
                      
                                        //setEstaEnPosicionInicial(true);
                                       
                                        break;
                      //default: return state; 
                    } 
                    const indice = action.index;
                    setDescripcionHBlanda(habilidadesBlandas[indice]['descripcion']);
                    setURLImagenHBlanda(habilidadesBlandas[indice]['URLImagen'])
                  
                    return {...state, [action.index]: valor};
                  };

  const [estadoHoverHBlandas, dispatchHBlandas] = useReducer(reducerHabilidadesBlandas, {});


  
  //###################################################################################################################################################
  // RETURN FINAL
  //###################################################################################################################################################

  return (
    <div className="grid m-0 gap-0 m-auto p-0 grid-rows-[20%_80%] justify-items-center sm:p-0 min-h-[100%] max-h-[100%] h-[100%] min-w-[100%] max-w-[100%] w-[100%] border border-black-300">
      
      <header className="border border-black-300 max-w-[100%] min-w-[100%] max-h-[100%] min-h-[100%] m-0 p-0">
        <div className="grid grid-rows-[30%_70%] border border-green-300 max-h-[100%] min-h-[100%] h-[100%] m-0 p-0">
          
          
          <div className="flex justify-center items-center m-0 border border-blue-300 min-h-[100%]">
            <p className="border border-red-300">Un saludo, estoy buscando una oportunidad laboral en desarrollo de software</p>
          </div>
        </div>
      </header>
      
      <main className="flex items-center sm:items-start border border-red-300 min-w-[100%] max-h-[100%]">
        <div className="grid m-0 gap-0 p-0 grid-rows-[40%_60%] min-w-[100%] min-h-[100%] max-h-[100%] border border-blue-300">
          {/* Habilidades blandas */}
          <div className="grid grid-cols-[30%_70%] border border-red-300 min-w-[100%] max-w-[100%] min-h-[100%] max-h-[100%] bg bg-blue-300">
            <div className="grid grid-rows-[10%_90%] border border-red-300 min-w-[100%] max-w-[100%] min-h-[100%] max-h-[100%] bg bg-red-300">         
              <div className="grid bg bg-gray-300 justify-center items-center">
                <h2>Habilidades</h2>
              </div>
          
              <div className="bg bg-blue-300 justify-center items-center p-0 border border-green-300">
                <ul className="grid h-full grid-rows-[repeat(N,_1fr)] items-center gap-0 min-w-full border list-inside list-disc text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]  max-w-[100%] min-w-[100%] m-0">
                  {
                    habilidadesBlandas.map((habilidadBlanda, index) => (
                      <li key={index} 
                          onMouseEnter = {() => dispatchHBlandas({ type: 'HOVER_IN', index })}
                          onMouseLeave = {() => dispatchHBlandas({ type: 'HOVER_OUT', index })}
                          className={`${estadoHoverHBlandas[index]? 'bg bg-red-400 font-bold' : ''} w-full border m-0 h-full grid items-center ps-5 transition transition-colors ease-in-out`}
                      >{habilidadBlanda["nombre"]}
                      </li>
                  ))}        
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-[60%_40%] max-h-[100%] items-center justify-center border border-black-300 min-w-[100%] max-w-[100%] min-h-[100%] max-h-[100%] bg bg-blue-300">
              <div className="grid justify-center h-full items-center max-h-[100%] border border-green-300">
                <motion.div ref={descripcionHBlandaRef}
                    className="border ms-30"
                    initial={{ opacity:0, translateY: "-120%" }}
                    animate={{ opacity:1, translateY: "0%" }}
                    transition={{ duration: 0.5 }}
                    key={contadorReanimacion}
                >  
                  {descripcionHBlanda}
                </motion.div>  
               
              </div>
              <div className="grid justify-start border border items-center min-h-[100%] max-h-[100%] border border-red-600">
                  <motion.img
                    
                    style={{ width: "70%", height: "40%"  }}                     
                    //ref={iconoHBlandaRef}                     
                    src={"iconos/" + imagenHBlanda + ".png"}
                    initial={{ opacity:0}}
                    animate={{ opacity:1}}
                    key={contadorReanimacion}
                  />
              </div>
              
              
            </div>
            
          </div>
          {/* Habilidades técnicas */}
          <div className="grid grid-cols-[30%_70%] grid-rows-[90%_10%] border border-green-300 min-w-[100%] max-w-[100%] min-h-[100%] max-h-[100%] bg bg-blue-300">
            <HabilidadesTecnicas/>
          </div>
        </div>
        
      </main>
      
    </div>
  );
}
