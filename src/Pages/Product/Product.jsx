import React from 'react'
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react"
import { IMask, IMaskInput } from 'react-imask';
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
             <div className="flex py-10 justify-center">
              <div className="text-slate-400 font-bold text-6xl px-6">R$399,00</div>
                <div className="flex items-center gap-1 text-4xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className=" w-10 h-5 md:w-4 md:h-4"
                      >
                        <path
                          className='w-20'
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <h1 className="md:text-sm font-normal text-slate-800 mr-6">5+</h1>
                      {/* Calcular o frete */}
                      <form onSubmit={handleSubmit(onSubmit)} className="w-2/4 sm:col-span-3 lg:col-span-2">
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
                   <div className="px-10 font-bold text-xl">
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
                    
                  <button class="bg-orange-500 hover:bg-green-400 text-white font-bold py-2 px-10 border-b-4 border-red-700 hover:border-green-500 rounded-full">
                    Adicionar ao carrinho
                  </button>   
            </div>           
        </div>
      </>
    )
}
