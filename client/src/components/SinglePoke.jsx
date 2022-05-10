import React from 'react'
import { Card } from './Card'
export const SinglePoke = ({currentPoke}) => {
  return (
    <div>
        {currentPoke?.map((poke)=>{
         return(
         
               <Card
                 key={poke.id} 
                {...poke}
                />

         
         )

    })}
    </div>
  )
}
