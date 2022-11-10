import React from 'react'
import { ChevronDoubleLeftIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { FaBroom } from 'react-icons/fa';

const CartCount = ({ onCartToggle, totalQTY, onClearCartItems }) => {
  return (
   <>
      <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
        <div className='flex items-center gap-3'>
            <div className='grid items-center cursor-pointer' onClick={onCartToggle}>
                
                <ChevronDoubleLeftIcon className='w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]' />
                

            </div>
            <div className='grid items-center'>
                <h1 className='text-base font-medium text-slate-900'>Volte a loja <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-sm'>({totalQTY} Items no Carrinho)</span></h1>
            </div>
        </div>
        <div className='flex items-center'>
                <h1 className='text-base font-medium text-slate-900  px-2' >Limpar Carrinho</h1>
            <button type='button' onClick={onClearCartItems} className='rounded bg-theme-cart active:scale-90 p-0.5'>
                <TrashIcon className='w-5 h-5 text-white stroke-[2]' />

            </button>
        </div>
      </div>
   </>
  )
}

export default CartCount