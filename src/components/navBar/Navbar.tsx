import React from 'react'
import Logohome from '../../assets/logo_farmacia 1.png'
import user from '../../assets/user 1.png'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          
            <div className="flex justify-center ">
            <img src={Logohome} alt="" className='w-2/3' />
          </div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Cadastrar categoria</div>
             
              <div className="flex justify-center ">
            <img src={user} alt="" className='w-2/3' />
          </div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar