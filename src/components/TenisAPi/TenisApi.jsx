import React from "react"
import { useState, useEffect, useRef } from "react"
import {motion} from 'framer-motion'
import ArrayTennis2 from '../../Utils/data/data2'
import '../../index.css'


function TenisApi() {

    const carousel = useRef();
    const [width, setWidth] = useState(0)
    useEffect(()=> {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    
    return (
      <>
        <div className="text-5xl font-bold pl-10 sm:text-3xl sm:mt-10">Mais variedades e opções.</div>
        <div ref={carousel} className="carousel" whileTop={{ cursor: "grabbing"}}>
          <motion.div 
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width}}
          initial={{ x: 500}}
          animate={{x: 0}}
          transition={{duration: 15}}
          >
            <motion.div className="item flex justify-center">
              {ArrayTennis2.map(item =>(
                <motion.div className="mx-5 flex-col">
                  <img className="h-96 max-w-sm mx-5" src={item.image} alt="" />
                  <div className="flex justify-center items-center w-auto font-bold">{item.name}</div>
                  <div className="font-bold  flex justify-center">{item.price}</div>
                  <div className="flex justify-center"><button
                  type="button"
                  className=" bg-white/90 font-bold blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
                  onClick={()=> {onAddToCart(); onCartToggle();}}
                >
                  Compre Agora
                </button></div>
                  
                  
                </motion.div>

              ))}
            </motion.div>
          </motion.div>
        </div>
      </>
    )
}
export default TenisApi
