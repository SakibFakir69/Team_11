

import React, { useEffect, useState } from 'react'
import ShowsAllPlayer from './ShowsAllPlayer';

function ShowPlayers() {

    const [ player , setplayer ] = useState([]);

    useEffect(()=>{
        fetch('./public/players.json')
        .then(res => res.json())
        .then(data => setplayer(data.players))

    },[]);
    console.log(player)



  return (
    <div className='grid md:grid-cols-3 px-6 mt-10'>
        <h2>Show players</h2>

        {
            player.map((item,key)=>(
                <ShowsAllPlayer Allplayers={item} />
            ))
        }

      


    </div>
  )
}

export default ShowPlayers