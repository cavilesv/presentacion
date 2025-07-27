'use client';

import { motion } from 'framer-motion';
//import { useState } from 'react';
//import { useEffect } from "react";

export default function Descripciones(props: any)
{
    const habilidadesTecnicas = props.habilidadesTecnicas;
    var indiceHabilidadTecnica: number = props.indiceHabilidadTecnica;

    

    //console.log(indiceHabilidadTecnica);
    //console.log("-----------------------------------------");
    //console.log(habilidadesTecnicas);

    return (
        <motion.div 
            className="grid justify-center items-center bg bg-red-300 h-full"   
        >
            <motion.p
                initial={{ opacity:0, translateY: "-150%" }}
                animate={{ opacity:1, translateY: "0%" }}
                transition={{ duration: 0.5 }}
                className="border"
                key={props.contadorReanimacion}
            >
                {habilidadesTecnicas[indiceHabilidadTecnica]["descripcion"]}
            </motion.p>
            
        </motion.div>
    )
}