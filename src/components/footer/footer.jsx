import React from 'react'
import { List } from '../List/List'

export const Footer = () => {
    return (
        <div className='w-[100%] flex '>

            <List query="flex flex-col items-center justify-center bg-[#0a0a0a] w-[100%] gap-1">
                <li className='text-2xl '>Direccion: <span className='font-serif text-[16px]'>Av. Alberdi 999</span></li>
                <li className='text-2xl '>Email: <span className='font-serif text-[16px]'>rosarioguitarstore@gmail.com</span></li>
                <li className='text-2xl'>Telefono: <span className='font-serif text-[16px]'>3444412312</span></li>
                <li className='text-2xl'>Instagram: <span className='font-serif text-[16px]'>@rosarioguitarstore</span></li>
                <li className='font-sans'>©Copyright Lucas Oelschlager</li>
            </List >
        </div >
    )
}
