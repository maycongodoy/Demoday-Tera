import React from "react";
import ArrayTennis from '../../Utils/Card.jsx'
import '../../Utils/Cards.css'


function TopSales () {
    return (
        <>
            <div className="font-bold text-5xl pl-10">Vendas mais bem avaliadas</div>   
            <div className="grid grid-flow-col grid-rows-3  gap-4 w-screen p-10 ">
               {ArrayTennis.map((item)=>{
                /* console.log(item) */
                return <div className={`h-80 w-64 pl-12 ${item.color ? item.color : 'amarelo'}`} >
                            <p className="text-slate-200 text-xl">{ item.nome}</p>
                            <p className="text-slate-200 text-xl">{ item.color ? item.color : ''}</p>
                            <p className="text-slate-200 filter drop-shadow text-base">{ item.tipo}</p>
                            <div className="">{ item.preco}</div>
                            <img className="" src={item.image} alt="" />
                        </div>
               })}
                
            </div>
        </>
    )
}

export default TopSales 