import React from 'react'
import { useState, useEffect, useRef } from "react"
import {motion} from 'framer-motion'
import banner1 from '../../assets/img/banner.webp'
import banner2 from '../../assets/img/banner2.webp'
import banner3 from '../../assets/img/banner3.webp'
import banner4 from '../../assets/img/banner4.webp'


export default function Product() {
    const carousel = useRef();
    const [width, setWidth] = useState(0)
    useEffect(()=> {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    
    return (
      <>
        
        <div ref={carousel} className="carousel mt-12 justify-center " whileTop={{ cursor: "grabbing"}}>
          <motion.div 
          className="inner"
          drag="x"
          dragConstraints={{ right: 2000, left: -width}}
          initial={{ x: 2000}}
          animate={{x: -2000}}
          transition={{ repeat: 5, repeatType: "reverse", duration: 10}}
          
          >
            <motion.div className="flex justify-center w-screen ">
              
                <motion.div className="mx-5 flex-col items-center">
                  <img className=" object-contain h-screen w-screnn " src={banner1} alt="" />                             
                                   
                </motion.div>            

              
            </motion.div>
            <motion.div className="flex justify-center w-screen ">
              
                <motion.div className="mx-5 flex-col items-center">
                  <img className=" object-contain h-screen w-screnn " src={banner2} alt="" />                             
                                   
                </motion.div>            

              
            </motion.div>
            <motion.div className="flex justify-center w-screen ">
              
                <motion.div className="mx-5 flex-col items-center">
                  <img className=" object-contain h-screen w-screnn " src={banner3} alt="" />                             
                                   
                </motion.div>            

              
            </motion.div>
            <motion.div className="flex justify-center w-screen">
              
                <motion.div className="mx-5 flex-col items-center">
                  <img className=" object-contain h-screen w-screnn " src={banner4} alt="" />                             
                                   
                </motion.div>            

              
            </motion.div>
              
            
          </motion.div>
          
        </div>

        <div className="flex-col justify-center w-screen px-12">
             <h1 className='font-bold text-6xl items-center'>O Nike Zoom Freak 4 da Letter Bro recebe uma colorway apropriada para o Dia de Ação de Graças</h1>
             <p className='text-lg p-16'>O mais recente tênis de assinatura de Giannis Antetokounmpo, o Nike Zoom Freak 4 , entregou apenas alguns lançamentos desde sua introdução em junho.<br/> 
                 As coisas estão começando a aumentar lentamente, no entanto, já que a silhueta acaba de revelar sua próxima colorway “Letter Bro”. Chegando bem a tempo para o outono, esta próxima versão do Zoom Freak 4 aparentemente se inspira no Dia de Ação de Graças. Laranja e marrom, dois grampos do feriado, são usados ​​em toda a parte superior, vestindo as partes não banhadas em tons de cinza.<br/>
                 O tom quente, juntamente com a pintura da sola e a insígnia colocada na língua, destaca o Swoosh invertido, bem como muitas de suas letras impressas. Sua contraparte, então, completa o design por meio dos cadarços, traseira e forro.<br/>
                 Este Zoom Freak 4 provavelmente será lançado no final deste outono via Nike.com e varejistas selecionados. Enquanto aguardamos uma data de lançamento firme, confira as imagens oficiais abaixo. Em outros lugares da Nike, o J Balvin Air Jordan 2 será lançado em apenas alguns dias.
             </p>
             <div className="preco"></div>
             <div className="estrelas"></div>
             <div className="add-carrinho"></div>
             <button>Comprar</button>               
        </div>
      </>
    )
}
