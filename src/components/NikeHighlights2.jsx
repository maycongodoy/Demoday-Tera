import React from "react";
import product3 from '../assets/ImgCards/product3.png'

function NikeHighlights2 () {


    return (
        <>
            <div className="flex flex-row-reverse items-center justify-end p-10 sm:flex-col sm:bg-red-100 md:flex-col md:bg-red-200">
                <div className="highlights-left "><img className="object-fill ml-0 pl-0 transitions-theme h-72 rotate-6 hover:-rotate-12 sm:h-40" src={product3} alt="" /></div>
                <div className="highlights-right w-1/2 sm:mt-10 md:mt-10">
                    <div className="text-4xl sm:text-3xl font-bold text-gradient text-red-600 ">DESTAQUES</div>
                    <div className="py-3 text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg">NIKE AIR COM ESCOLHAS ILIMITADAS</div>
                    <p className="text-lg">Nosso propósito é mover o mundo para frente. Atuamos construindo comunidades, protegendo nosso planeta e aumentando o acesso ao esporte.</p>
                    <button className="button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5">Explore mais</button>
                </div>

            </div>
        </>
    )
}

export default NikeHighlights2