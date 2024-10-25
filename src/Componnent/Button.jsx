

import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import ShowPlayers from './ShowPlayers';
function Button({togglebuttonTrue,togglebuttonfalse}) {






  



  return (
    <div className='mt-4 px-6'>

        <section className='flex justify-between'>
            <div>
                <button className='text-2xl font-bold'>Available Players</button>
            </div>

            {/* add active funtinal lity */}
            <div className='flex space-x-4'>

                <button className='focus:bg-yellow-400 px-3 text-balance font-bold rounded-md'

                onClick={togglebuttonTrue}


                
                >Available</button>

                
                <button className='focus:bg-yellow-400 px-3 text-balance font-bold rounded-md'
                
                onClick={togglebuttonfalse}

                
                
                >Selected ()</button>
            </div>
        </section>



    </div>
  )
}

export default Button