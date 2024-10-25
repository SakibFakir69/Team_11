

import React, { useEffect, useState } from 'react'
import ShowsAllPlayer from './ShowsAllPlayer';

function ShowPlayers({selectedCounter}) {

    const [ player , setplayer ] = useState([]);

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setplayer(data))
        .catch(err => console.log(err))

    },[]);




  return (
    <div className='grid md:grid-cols-3 px-6 mt-10 items-center'>
 
        {
            player.map((post,key)=>
                <ShowsAllPlayer key={key} post = {post} selectedCounter={selectedCounter}  />
            )
        }



    </div>
  )
}

export default ShowPlayers