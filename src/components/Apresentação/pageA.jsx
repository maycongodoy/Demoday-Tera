import React from "react";
import '../Apresentação/pageA.css'
import imageTennis from'../Apresentação/hero.png'
import video1 from '../Videos/clip.mp4'
import { useState } from 'react';

function pageInicial() {
   function usePlayerState (video1) {
    const [playerState, setPlayerState] = useState({
        playing: false,
        percentage: 0,
    });
   }

    return (
        <>
        <div className="containerPage container-fluid">
            <div className="title-page">Play With Electric Nike Adapt 2.0 Sneakers</div>
            <video autoplay="hover" loop="" playsinline="" src={video1} class=" video top-0 left-0 right-0 flex h-full w-full object-cover opacity-1 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl"></video>
            <div className="container-page container-fluid"><img src={imageTennis} id="imageTenis"  className="img-page" alt="" /></div>
        </div>
        </>
    )
}

export default pageInicial;


