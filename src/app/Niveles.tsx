'use client';

import { motion } from 'framer-motion';

export default function Niveles(props: any)
{
    const habilidadesTecnicas = props.habilidadesTecnicas;

    

    const clasesNiveles: {[key:number]: string} = {
        1: 'col-span-1',
        2: 'col-span-2',
        3: 'col-span-3',
        4: 'col-span-4',
        5: 'col-span-5',
        6: 'col-span-6',
        7: 'col-span-7',
        8: 'col-span-8',
    };
    
    //const [demora, setDemora] = useState(-0.3);
    
    const getBarraNivel = (nivel:number, demora:number) => {
        
        return (<>
                <div className={`${clasesNiveles[nivel]} h-full text-center`}>
                    <motion.div
                        initial={{ opacity: 0.25, width: "0%" }}
                        animate={{ opacity: 1, width: "100%" }}
                        transition={{ duration: 2, delay: demora * 0.25 }}
                        className="w-full h-full border border-black-300"
                        style={{background: 'linear-gradient(to right, #5f94ffff, #034bdcff , #2442eaff)' }}
                    >
                        
                    </motion.div>
                </div>
            </>);
    };

    return (
        <div className="grid grid-rows-9 w-full h-full border border-pink-300">
            {
                habilidadesTecnicas.map((habilidad:any, index:number) => (
                    <div key={index} className="grid grid-cols-8 h-full items-center">
                        {getBarraNivel(habilidad.nivel, index)}
                    </div>
                ))
            }
        </div>
    )
}