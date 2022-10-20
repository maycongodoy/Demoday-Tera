import React from "react";
import '../Apresentação/pageA.css'
import imageTennis from'../Apresentação/hero.png'
import video1 from '../Videos/clip.mp4'


function pageInicial() {


    return (
        <>
        <div className="bg-animation-color h-screen">
            <div className="text-6xl justify-center flex pt-20">Play With Electric Nike Adapt 2.0 Sneakers</div>
            <div className="pt-20 flex justify-center color-azure  ">            
                <div className="">
                    <video autoplay="" loop="infinite" playsinline="" src={video1} class="h-20 m-2 rounded"></video>
                    <video autoplay="" loop="infinite" playsinline="" src={video1} class="h-20 m-2 rounded"></video>
                    <video autoplay="" loop="infinite" playsinline="" src={video1} class="h-20 m-2 rounded"></video>
                </div>
            <div className=""><img src={imageTennis} id="imageTenis"  className="img-page h-60" alt="" /></div>
            </div>
        </div>
        </>
    )
}

export default pageInicial;


