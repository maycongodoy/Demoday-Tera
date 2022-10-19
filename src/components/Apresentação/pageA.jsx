import React from "react";
import '../Apresentação/pageA.css'
import imageTennis from'../Apresentação/hero.png'
import video1 from '../Videos/clip.mp4'


function pageInicial() {


    return (
        <>
        <div className="bg-animation-color ">
            <div className="pt-20">
            <div className="text-6xl">Play With Electric Nike Adapt 2.0 Sneakers</div>
               <div className="">
                <video autoplay="" loop="infinite" playsinline="" src={video1} class="h-14 m-2"></video>
                <video autoplay="" loop="infinite" playsinline="" src={video1} class="h-14 m-2"></video>
                <video autoplay="" loop="infinite" playsinline="" src={video1} class="h-14 m-2"></video>
            </div>
            <div className=""><img src={imageTennis} id="imageTenis"  className="img-page" alt="" /></div>
            </div>
        </div>
        </>
    )
}

export default pageInicial;


