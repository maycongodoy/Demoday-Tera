import React from 'react'
import emptybag from '../../assets/img/emptybag.png';
import { ArrowLeftIcon  } from '@heroicons/react/24/outline';

const CartEmpty = ({ onCartToggle }) => {
  return (
   <>
      <div className='flex items-center justify-center flex-col h-screen px-20 text-center gap-10'>
        <img
          src={emptybag}
          alt="emptybag/img"
          className='w-50 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110'
        />
        <button type='button' className='button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110' onClick={onCartToggle}>
            <ArrowLeftIcon className='w-5 h-5 text-slate-900' />
            <span className=''>Voltar para a loja</span>
        </button>
      </div>
   </>
  )
}

export default CartEmpty