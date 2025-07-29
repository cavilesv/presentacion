'use client';

import { motion } from 'framer-motion';
//import { useState } from 'react';
//import { useEffect } from "react";

export default function Descripciones(props: {
  habilidadesTecnicas: { descripcion: string }[];
  indiceHabilidadTecnica: number;
  contadorReanimacion: number;
})
{
    const habilidadesTecnicas = props.habilidadesTecnicas;
    const indiceHabilidadTecnica: number = props.indiceHabilidadTecnica;

    

    //console.log(indiceHabilidadTecnica);
    //console.log("-----------------------------------------");
    //console.log(habilidadesTecnicas);

    return (
        <motion.div 
            className="grid justify-center items-center h-full"   
        >
            <motion.p
                initial={{ opacity:0, translateY: "-150%" }}
                animate={{ opacity:1, translateY: "0%" }}
                transition={{ duration: 0.5 }}
                className="me-110 mb-17.5 font-bold text-center"
                key={props.contadorReanimacion}
            >
                {habilidadesTecnicas[indiceHabilidadTecnica]["descripcion"]}
            </motion.p>
            
        </motion.div>
    )
}