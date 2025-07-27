/* eslint-disable @typescript-eslint/no-unused-vars */


'use client';

//import clsx from "clsx";

//import { useRef, useState } from "react";
import React, {useReducer} from 'react';
/* import HabilidadesTecnicas from "./HabilidadesTecnicas";
import {EstadoHover, Accion} from "./TiposHover"; */
//import { motion } from 'framer-motion';

//import {useRouter} from 'next/navigation';

//import {useEffect} from 'react';



export default function Contacto() {

  

  return (
    <div className="grid m-0 gap-0 m-auto p-0 grid-rows-[20%_80%] justify-items-center sm:p-0 min-h-[100%] max-h-[100%] h-[100%] min-w-[100%] max-w-[100%] w-[100%] border border-black-300">
      
      <header className="border border-black-300 max-w-[100%] min-w-[100%] max-h-[100%] min-h-[100%] m-0 p-0">
        <div className="grid grid-rows-[30%_70%] border border-green-300 max-h-[100%] min-h-[100%] h-[100%] m-0 p-0">
          
          
          <div className="flex justify-center items-center m-0 border border-blue-300 min-h-[100%]">
            <p className="border border-red-300">HOLAAAAA</p>
          </div>
        </div>
      </header>
      
      <main className="grid grid-cols-[40%_50%] items-center sm:items-start border border-red-300 min-w-[50%] max-h-[100%] justify-center">
        
        <div className="grid grid-rows-[15%_15%_15%] border border-blue-300 min-h-[100%] max-h-[100%]">
          <div className="border min-h-[100%] max-h-[100%] grid items-center justify-center">
            <label className="border">Nombre:</label>
          </div>

          <div className="border min-h-[100%] max-h-[100%] grid items-center justify-center">
            <label>Correo electrónico:</label>
          </div>

          <div className="border min-h-[100%] max-h-[100%] grid items-center justify-center">
            <label>Descripción:</label>
          </div>
        </div>

        <div className="grid grid-rows-[15%_15%_15%] min-h-[100%] max-h-[100%]">
          <div className="border border-red-300 p-0 min-w-[100%] max-w-[100%] min-h-[100%] max-h-[100%] grid gap-0 p-0 items-center w-full h-full p-0">
            <input
              type="text"
              style={{width:"100%", minWidth:"100%", maxWidth:"100%"}}
              className="border block w-full"
            />
          </div>
          <div className="border border-blue-300 grid items-center">
            <input
              type="text"
              className="border block w-full"
            />
          </div>
          <div className="border border-red-300 grid items-center p-0 gap-0 m-0">           
            <textarea
              className="border block w-full h-full p-0 m-0"
            />
          </div>
        </div>
        
        
        
      </main>
      
    </div>
  );
}
