/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

//import clsx from "clsx";

//import { useRef, useState } from "react";
import React, {useReducer, useState} from 'react';
import clsx from 'clsx';
import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
/* import HabilidadesTecnicas from "./HabilidadesTecnicas";
import {EstadoHover, Accion} from "./TiposHover"; */
//import { motion } from 'framer-motion';

//import {useRouter} from 'next/navigation';

//import {useEffect} from 'react';

Modal.setAppElement('#root');

export default function Contacto() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  //#################################################################################################################################################
  //=============== TEXTOS INGRESADO ================================================================================================================

  const [nombreRemitente, setNombreRemitente] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [mensaje, setMensaje] = useState('');

  //================ ERRORES =======================================================================================================================

  const [errorCampoNombre, setErrorCampoNombre] = useState("");
  const [errorCampoCorreo, setErrorCampoCorreo] = useState("");
  const [errorCampoMensaje, setErrorCampoMensaje] = useState("");


  //================= APARICIÓN/DESAPARICIÓN DE ERRORES ============================================================================================

  const [mostrandoErrorCampoNombre, setMostrandoErrorCampoNombre] = useState(true);
  const [mostrandoErrorCampoCorreo, setMostrandoErrorCampoCorreo] = useState(true);
  const [mostrandoErrorCampoMensaje, setMostrandoErrorCampoMensaje] = useState(true);

  //################################################################################################################################################


  const nombreRemitenteHandle = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setNombreRemitente(event.target.value);
  }

  const correoElectronicoHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCorreoElectronico(event?.target.value);
  }

  const mensajeHandle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMensaje(event.target.value);
  }

  const dictErrores = {
    1 : "Nombre de remitente vacío",
    2 : "Nombre de remitente con menos de 4 caracteres",
    3 : "Correo electrónico vacío",
    4 : "El formato correo electrónico es incorrecto",
    5 : "El mensaje vacío",
    6 : "El mensaje debe tener más de 20 caracteres"
  }

  const enviarFormulario = () => {

    const nomRemitente = nombreRemitente.trim();
    const corrElectronico = correoElectronico.trim();
    const msj = mensaje.trim();

    // Expresión regular para validar formato de correo
    const formatoCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const errores = [];

    //#####---VALIDACIONES---################################################################################
    if ( nomRemitente.trim() == "" )
    {
      errores.push(1);
    }
    else 
    {
      if (nomRemitente.length <= 3)
      {
        errores.push(2);
      }
    }

    if (corrElectronico.trim() == "")
    {
      errores.push(3);
    }
    else
    {
      if (!formatoCorreo.test(corrElectronico))
      {
        errores.push(4);
      }
    }
    
    if (msj.trim() == "")
    {
      errores.push(5);
    }
    else
    {
      if (msj.length <= 20)
      {
        errores.push(6);
      }
    }
    //######################################################################################################

    if (errores.length == 0)
    {
      fetch('http://localhost:81', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "nombreRemitente": nombreRemitente,
          "correoElectronico": correoElectronico,
          "mensaje": mensaje
        })
      }).then(res => {
        if (res.ok){
          setModalIsOpen(true);
        }
        else alert("Hubo un error al enviar el mensaje.");
      });
    }

    else
    {
      if (errores.includes(1))
      {
        setErrorCampoNombre(dictErrores[1]);
      }
      else {
        if (errores.includes(2))
        {
          setErrorCampoNombre(dictErrores[2]);
        }
        else
        {
          setErrorCampoNombre("");
        }
      }
      if (errores.includes(3))
      {
        setErrorCampoCorreo(dictErrores[3]);
      }
      else {
        if (errores.includes(4))
        {
          setErrorCampoCorreo(dictErrores[4]);
        }
        else
        {
          setErrorCampoCorreo("");
        }
      }
      if (errores.includes(5))
      {
        setErrorCampoMensaje(dictErrores[5]);
      }
      else {
        if (errores.includes(6))
        {
          setErrorCampoMensaje(dictErrores[6]);
        }
        else
        {
          setErrorCampoMensaje("");
        }
      }

      setTimeout(() => {
        setMostrandoErrorCampoNombre(true);
        setMostrandoErrorCampoCorreo(true);
        setMostrandoErrorCampoMensaje(true);
      }, 5000);
      setMostrandoErrorCampoNombre(false);
      setMostrandoErrorCampoCorreo(false);
      setMostrandoErrorCampoMensaje(false);
    }

    // Simular envío (ejemplo con fetch)
    
  }

  return (
    <div id="app" className="grid m-0 gap-5 m-auto p-0 grid-rows-[20%_80%] justify-items-center sm:p-0 min-h-[100%] max-h-[100%] h-[100%] min-w-[100%] max-w-[100%] w-[100%]">
      
      <header className="max-w-[100%] min-w-[100%] max-h-[100%] min-h-[100%] m-0 p-0">
        <div className="grid max-h-[100%] min-h-[100%] h-[100%] m-0 p-0 items-center">
          
          
          
            <p className="grid items-center justify-center">Si mi perfil le ha resultado de interés o cree que puedo contribuirle en algo no dude en contactarme. <br/>

              Teléfono: +56 930148745 <br/>
              Correo electrónico: cristofer.aviles.v@gmail.com </p>
            
          
        </div>
      </header>
      
      <main className="grid grid-cols-[35%_50%] grid-rows-[75%_7.5%] gap-3 sm:items-start items-center min-w-[50%] max-h-[80%] justify-center">
        
        <div className="grid grid-rows-[25%_25%_50%] h-[100%]">
          <div className="min-h-[100%] max-h-[100%] grid items-center justify-center">
            <label className="font-bold">Nombre:</label>
          </div>

          <div className=" min-h-[100%] max-h-[100%] grid items-center justify-center">
            <label className="font-bold">Correo electrónico:</label>
          </div>

          <div className="min-h-[100%] max-h-[100%] grid items-center justify-center">
            <label className="mb-18 font-bold">Descripción:</label>
          </div>
        </div>

        <div className="grid grid-rows-[25%_25%_50%] min-h-[50%] h-[100%]">

          {/* ===================== CÓDIGO DE NOMBRE REMITENTE =========================================== */}
          <div className="p-0 min-w-[100%] max-w-[100%] min-h-[100%] max-h-[100%] grid gap-0 p-0 items-center w-full h-full p-0 grid-rows-[25%_50%_25%]">
            <div
              className={clsx("h-full grid items-center text-sm transition-opacity duration-200 text-red-500 font-bold", !mostrandoErrorCampoNombre ? 'opacity-100' : 'opacity-0')}
            >
              {errorCampoNombre}
            </div>
            <input
              type="text"
              name="username" 
              placeholder="Ingrese su nombre"
              style={{width:"100%", minWidth:"100%", maxWidth:"100%"}}
              className={clsx("border block w-full h-[100%] rounded focus:outline-indigo-600 focus:outline-2 focus:-outline-offset-2 grow placeholder:text-gray-400 pl-3 transition-colors duration-200", !mostrandoErrorCampoNombre && errorCampoNombre != "" ? 'border-red-600 border-2' : '')}
              onChange={nombreRemitenteHandle}
            />
            <div
              className="h-full"
            ></div>
          </div>

          {/* ===================== CÓDIGO DE CORREO ELECTRÓNICO =========================================== */}
          <div className="grid items-center grid-rows-[25%_50%_25%]">
            <div
              className={clsx("h-full grid items-center text-sm transition-opacity duration-200 text-red-500 font-bold", !mostrandoErrorCampoCorreo ? 'opacity-100' : 'opacity-0')}
            >
             {errorCampoCorreo}
            </div>

            <input
              type="text"
              placeholder="Ingrese su correo electrónico"
              className={clsx("border block w-full h-[40%] rounded focus:outline-indigo-600 focus:outline-2 focus:-outline-offset-2 grow placeholder:text-gray-400 pl-3 h-full transition-colors duration-200", !mostrandoErrorCampoCorreo && errorCampoCorreo != "" ? 'border-red-600 border-2' : '')}
              onChange={correoElectronicoHandle}
            />
            <div
              className="h-full"
            >
            </div>
          </div>

          {/* ======================= CÓDIGO DE MENSAJE =============================================== */}
          <div className="items-end p-0 gap-0 m-0 grid grid-rows-[16%_70%]">
            <div
              className={clsx("h-full grid items-center text-sm transition-opacity duration-200 text-red-500 font-bold", !mostrandoErrorCampoMensaje ? 'opacity-100' : 'opacity-0')}
            >
              {errorCampoMensaje}
            </div>
               
            <textarea
              placeholder="Escriba su mensaje"
              className={clsx("resize-none border block w-full p-0 h-full rounded focus:outline-indigo-600 focus:outline-2 focus:-outline-offset-2 grow placeholder:text-gray-400 pl-3 pt-2 transition-colors duration-200", !mostrandoErrorCampoMensaje && errorCampoMensaje != "" ? 'border-red-600 border-2' : '')}
              onChange={mensajeHandle}    
            />            
          </div>
        </div>
        
        <div className="m-0 col-span-2 grid h-[100%]">
            <button 
              className="w-[20%] bg bg-blue-300 mx-auto rounded font-bold shadow-md active:shadow-sm active:translate-y-0.5 transition-all duration-150"
              onClick={enviarFormulario}
            >   
                Enviar
            </button>
        </div>

        <AnimatePresence>
        {modalIsOpen && (
          <Modal
        
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Ejemplo de Modal"
          className="bg-white p-3 rounded-lg shadow-xl h-[25vh] gap-0"
          overlayClassName="fixed inset-0 flex justify-center items-center"
          style={{
                 overlay: { backgroundColor: 'rgba(30,30,30,0.15)' }}}
        >
          <motion.div
            className="grid grid-rows-[25%_50%_25%] mb-0 p-0 h-[100%] min-h-[100%] max-h-[100%] h-full" 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
              <div className="grid justify-center items-center h-full">
                <h3 className="text-lg font-semibold text-gray-800">Confirmación</h3>
              </div>

              {/* Body */}
              <div className="grid items-center h-full">
                <p className="text-gray-700 m-auto">
                  Su mensaje ha sido enviado exitosamente.
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-center h-full items-center">
                <button
                  onClick={() => setModalIsOpen(false)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition h-[75%]"
                >
                  Aceptar
                </button>
              </div>
          </motion.div>
        </Modal>
        )}
      </AnimatePresence>
        
      </main>
      
    </div>
  );
}
