

import React from 'react'
import PropTypes from 'prop-types'
import { prototype } from 'postcss/lib/previous-map'
import Live from './Live';
function Selected({counter,data }) {

    if(!data)
    {
        return null;
    }

 

  

 
  return (
    <div className='px-4'>
        <div>
            {/* select player number here */}
            <p className='text-2xl font-semibold'>Selected Player ({counter}/6)</p>

        </div>
        {/* show plr data  */}
        {/* Each card will have player image , name , player role, price. */}

        {
            data.map((item,key)=>(
                <Live item={item}/>
            ))
        }
        
     
      


    </div>
  )
}


export default Selected