'use client';

import { JSX, useReducer, useState } from "react";
import { EstadoHover, Accion} from './TiposHover';

import Niveles from './Niveles';
import Descripciones from './Descripciones';



export default function HabilidadesTecnicas(){

  //###################################################################################################################################################
  // LÓGICA DESCRIPCION HABILIDAD TÉCNICA #############################################################################################################
  //###################################################################################################################################################

  const habilidadesTecnicas = [
    {nombre: "PHP", nivel: 4, descripcion: "Descripción de prueba"},
    {nombre: "SQL", nivel: 5, descripcion: "Cumplir el máximo posible"},
    {nombre: "JavaScript", nivel: 3, descripcion: "Siempre cumplir el máximo posible"},
    {nombre: "Angular", nivel: 2, descripcion: "Siempre cumpliasdasdasdr el máximo posihfghfghble"},
    {nombre: "Laravel", nivel: 2, descripcion: "Siempre cumplirasdasd el máximo posible"},
    {nombre: "TypeScript", nivel: 2, descripcion: "Siempre cumplir el máximo posible"},
    {nombre: "C#", nivel: 1, descripcion: "Siempre cumplir el máximo posible"},
    {nombre: "Java", nivel: 2, descripcion: "Siemasdasdsadpre cumplir el máximo posible"},
    {nombre: "Python", nivel: 3, descripcion: "Siemadasdpre cumplir el máxasdasdimo posible"}
  ];

  const [contadorReanimacion, setContadorReanimacion] = useState(1);

  const [descripcionHTecnica, setDescripcionHTecnica] = useState("");

  

  //const [punteroSobreHabilidadTecnica, setearPunteroSobreHabilidadTecnica] = useState(false);

  /* const mostrarDescripcionHabilidadTecnica = () => {
    setearPunteroSobreHabilidadBlanda(true);
  };

  const quitarDescripcionHabilidadTecnica = () => {
    setearPunteroSobreHabilidadBlanda(false);
  }; */


  //############################################################################################################################################################
  //################# ESTADO PARA SELECCIÓN DE PESTAÑA #########################################################################################################
  //############################################################################################################################################################

  const [panelSeleccionado, setPanelSeleccionado] = useState(1);

  //############################################################################################################################################################
  //############################################################################################################################################################
  //############################################################################################################################################################

  const [indiceHabilidadTecnica, setIndiceHabilidadTecnica] = useState(1);

  const reducerHabilidadesTecnicas = (state: EstadoHover, action: Accion): EstadoHover => 
  { 
    var valor = false;
    switch (action.type) 
    { 
      case 'HOVER_IN':  console.log("la wea la wea");
                        valor = true;
                        setPanelSeleccionado(2);
                        setIndiceHabilidadTecnica(action.index);
                        setContadorReanimacion(-contadorReanimacion);
                        break; 
      case 'HOVER_OUT': 
                        valor = false; 
                        setPanelSeleccionado(1);
                        console.log("chorizo y wea");
                        break;
      //default: return state; 
    } 
    const indice = action.index;
    setDescripcionHTecnica(habilidadesTecnicas[indice]['descripcion']);

    return {...state, [action.index]: valor};
  };

  const [estadoHoverHTecnicas, dispatchHTecnicas] = useReducer(reducerHabilidadesTecnicas, {});

  //const descripcionHTecnicaRef = useRef(null);

    const componentesHabilidadesTecnicas: { [key: number] : JSX.Element } = {
        1: <Niveles habilidadesTecnicas={habilidadesTecnicas}/>,
        2: <Descripciones habilidadesTecnicas={habilidadesTecnicas} indiceHabilidadTecnica={indiceHabilidadTecnica} contadorReanimacion={contadorReanimacion}/>
    };

    return (
        <>
          <div className="grid grid-rows-[10%_90%] border border-red-300 min-w-[100%] max-w-[100%] min-h-[100%]">
                <div className="grid bg bg-gray-300 justify-center items-center">
                  <h2>Habilidades técnicas</h2>
                </div>
                <div className="bg bg-blue-300 justify-center items-center p-0 border border-green-300">
                  <ul className="grid h-full grid-rows-[repeat(N,_1fr)] items-center gap-0 min-w-full border list-inside list-disc text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] max-w-[100%] min-w-[100%] m-0">
                      {
                        habilidadesTecnicas.map((habilidadTecnica, index) => (
                          <li key={index} 
                              onMouseEnter = {() => dispatchHTecnicas({ type: 'HOVER_IN', index })}
                              onMouseLeave = {() => dispatchHTecnicas({ type: 'HOVER_OUT', index })}
                              className={`${estadoHoverHTecnicas[index]? 'bg bg-red-400 font-bold' : ''} w-full border m-0 h-full grid items-center ps-5 transition transition-colors ease-in-out`}
                          >{habilidadTecnica["nombre"]}
                          </li>
                      ))}   
                    </ul>
                </div>
            </div>
            <div className="grid grid-rows-[10%_90%] w-full h-full">
                <div className="grid grid-cols-[20%_20%] border h-full w-full justify-evenly">
                    {/* <div 
                        style={{ backgroundColor: pestanaSeleccionada == 1 ? 'red': 'white'}}
                        className="grid border h-full w-full text-center items-center rounded-lg bg bg-white font-bold"
                        onClick={() => setPestanaSeleccionada(1)}
                    >
                            
                        Nivel
                    </div>
                 
                    <div
                        style={{ backgroundColor: pestanaSeleccionada == 2 ? 'red': 'white'}} 
                        className="grid border h-full w-full text-center items-center rounded-lg bg bg-white font-bold"
                        onClick={() => setPestanaSeleccionada(2)}
                    >
                        Descripción
                    </div> */}
                </div>
                <div>
                    {componentesHabilidadesTecnicas[panelSeleccionado]}
                </div> 
                
            </div>
            <div className="grid col-span-2 items-center grid-cols-[30%_70%] gap-0">
              <div className="grid justify-center items-center h-full">
                Nivel
              </div>
              <div className="grid grid-cols-[25%_25%_25%_25%] justify-center items-center border h-full">
                <div className="grid border h-full justify-center items-center">
                      Básico
                </div>
                <div className="grid border h-full justify-center items-center">
                      Intermedio
                </div>
                <div className="grid border h-full justify-center items-center">
                      Avanzado
                </div>
                <div className="grid border h-full justify-center items-center">
                      Experto
                </div>
              </div>
            </div>
        </>
    )
}