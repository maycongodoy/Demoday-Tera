import React from "react";
import imghighlights from '../assets/img/hightlightimg.png'

function NikeHighlights () {


    return (
        <>
            <div className="flex items-center justify-between p-10 sm:flex-col sm:bg-yellow-100 md:flex-col md:bg-yellow-200 ">
                <div className="highlights-left"><img className="w-auto object-fill transitions-theme h-60 rotate-6 hover:-rotate-12 sm:h-40" src={imghighlights} alt="" /></div>
                <div className="highlights-right w-1/2 sm:mt-10 md:mt-10">
                    <div className="text-4xl sm:text-3xl font-bold text-gradient text-amber-400">DESTAQUES</div>
                    <div className="py-3 text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg">NIKE AIR COM ESCOLHAS ILIMITADAS</div>
                    <p className="text-lg">Nosso propósito é mover o mundo para frente. Atuamos construindo comunidades, protegendo nosso planeta e aumentando o acesso ao esporte.</p>
                    <button className="button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5">Explore mais</button>

                </div>

            </div>
        </>
    )
}

export default NikeHighlights