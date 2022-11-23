import React from 'react'
import { TenisApi } from '../../components';
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react"
import { IMask, IMaskInput } from 'react-imask';
import {motion} from 'framer-motion'
import button from '../../assets/img/setaCarousel.png'
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

    const { register, handleSubmit, setValue, getValues } = useForm(); // Preenche os campos do formulário

  const apiCep = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setValue("cidade", data.localidade);
        setValue("uf", data.uf);
      });
  };

  const onSubmit = (e) => {};

  function handleDados() {
    const dados = getValues();
    console.log(dados);
    api.post("/v1/user", dados).then((response) => {
      console.log(response);
    });
  }

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

    
    return (
      <>
        
        <div ref={carousel} className="overflow-hidden flex  mt-12 ">
          <motion.div className='flex '>
            <motion.div className="flex justify-center w-screen ">
              
                <motion.div className="mx-5  rounded-full ">
                  <img className="object-contain h-screen w-screen " src={banner1} alt="" />                             
                                   
                </motion.div>            

              
            </motion.div>
            <motion.div className="flex justify-center w-screen ">
              
                <motion.div className="mx-5 ">
                  <img className="object-contain h-screen w-screen " src={banner2} alt="" />                             
                                   
                </motion.div>            

              
            </motion.div>
            <motion.div className="flex justify-center w-screen ">
              
                <motion.div className="mx-5">
                  <img className="object-contain h-screen w-screen  " src={banner3} alt="" />                             
                                   
                </motion.div>            

              
            </motion.div>
            <motion.div className="flex justify-center w-screen">
              
                <motion.div className="mx-5 ">
                  <img className="object-contain h-screen w-screen " src={banner4} alt="" />                             
                                   
                </motion.div>            

              
            </motion.div>           
              
            
          </motion.div>         
          <div className="w-full h-full justify-between absolute flex translate-x-[12px]">
              <button onClick={handleLeftClick}>
                <img className='rotate-180' src={button} alt="Scroll Left" />
              </button>
              <button onClick={handleRightClick}>
                <img src={button} alt="Scroll Right" />
              </button>
          </div> 
        </div>

          

        <div className="flex-col justify-center w-screen px-12 ">
             <h1 className='font-bold text-4xl items-center'>O Nike Zoom Freak 4 da Letter Bro recebe uma colorway apropriada para o Dia de Ação de Graças</h1>
             <p className='text-lg p-16 md:p-8'>O mais recente tênis de assinatura de Giannis Antetokounmpo, o Nike Zoom Freak 4 , entregou apenas alguns lançamentos desde sua introdução em junho.<br/> 
                 As coisas estão começando a aumentar lentamente, no entanto, já que a silhueta acaba de revelar sua próxima colorway “Letter Bro”. Chegando bem a tempo para o outono, esta próxima versão do Zoom Freak 4 aparentemente se inspira no Dia de Ação de Graças. Laranja e marrom, dois grampos do feriado, são usados ​​em toda a parte superior, vestindo as partes não banhadas em tons de cinza.<br/>
                 O tom quente, juntamente com a pintura da sola e a insígnia colocada na língua, destaca o Swoosh invertido, bem como muitas de suas letras impressas. Sua contraparte, então, completa o design por meio dos cadarços, traseira e forro.<br/>
                 Este Zoom Freak 4 provavelmente será lançado no final deste outono via Nike.com e varejistas selecionados. Enquanto aguardamos uma data de lançamento firme, confira as imgns oficiais abaixo. Em outros lugares da Nike, o J Balvin Air Jordan 2 será lançado em apenas alguns dias.
             </p>
             
             <div className="flex py-10 justify-center md:flex-col ">
             <div className="px-10 font-bold text-xl ">
                    Selecione o Tamanho:
                    <form action="" className='flex justify-center bg-slate-300' method="post">
                      <select className='bg-slate-200' name="" id="">
                        <option value="">36</option>
                        <option value="">38</option>
                        <option value="">40</option>
                        <option value="">42</option>
                        <option value="">44</option>
                      
                      </select>  
                    </form> 
                  </div> 
              
                <div className="flex items-center gap-1 text-4xl md:flex-col md:py-10 ">
                      
                      {/* Calcular o frete */}
                      <form onSubmit={handleSubmit(onSubmit)} className="w-[200px] sm:col-span-3 lg:col-span-2">
                        <label htmlFor="cep"  className="block text-lg font-bold text-gray-700" >
                          Calcule o frete
                        </label>
                        <IMaskInput
                          className="mt-1 block w-full  rounded-md border-gray-300 shadow-sm px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          mask="00000-000"
                          type="text"
                          required
                          {...register("cep")}
                          maxLength={9}
                          onBlur={apiCep}
                          placeholder="00000-00"                  
                        />
                      </form>

                  </div>                            
                   
                  <div className="text-slate-400 font-bold text-6xl px-6 md:py-10">R$399,00</div>
                    
                  <button class="bg-orange-500 hover:bg-green-400 text-white font-bold py-2 px-10 border-b-4 border-red-700 hover:border-green-500 rounded-full">
                    Adicionar ao carrinho
                  </button>   
            </div>           
        </div>
        <TenisApi />
      </>
    )
}
