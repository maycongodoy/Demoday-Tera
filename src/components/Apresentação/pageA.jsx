import React from "react";
import '../Apresentação/pageA.css'
import imageTennis from'../Apresentação/hero.png'

function pageInicial() {
    return (
        <>
        <div className="containerPage container-fluid">
            <div className="title-page">Play With Electric Nike Adapt 2.0 Sneakers</div>
            <div className="container-page container-fluid"><img src={imageTennis} className="img-page" alt="" /></div>
        </div>
        </>
    )
}

export default pageInicial;